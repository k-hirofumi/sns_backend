<?php

namespace App\Http\Controllers\AppApi;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppApi\Login\LoginAppRequest;
use App\Http\Requests\AppResponse\AppErrorResponse;
use App\Http\Requests\Login\LoginRequest;
use App\Models\Staff;
use App\Models\User;
use Exception;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use \Symfony\Component\HttpFoundation\Response;


class LoginAppController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
          ]);
      
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);
           
        $token = $user->createToken('auth_token')->plainTextToken;
           
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function login(LoginAppRequest $request)
    {
        // $validated = $request->validate([
        //     'email' => 'required|email',
        //     'password' => 'required',
        //     // 'device_name' => 'required',
        // ]);

        $user = User::where('email', $request->email)->first();
  
        if (! $user || ! Hash::check($request->password, $user->password)) {
            // throw ValidationException::withMessages([
            //     'email' => ['The provided credentials are incorrect.'],
            // ]);
            return (new AppErrorResponse(1002,'不明なユーザー','メールアドレスまたはパスワードが正しくありません'))->toJson();
        }
    
        //ユーザIDからアクセストークンを生成（personal_access_tokenテーブルのnamenにユーザIDが登録される）
        $accessToken = $user->createToken($user->user_id)->plainTextToken;
        return response()->json([
            'access_token' => $accessToken,
        ]);
    }

    // /**
    //  * @param  Request  $request
    //  * @return \Illuminate\Http\JsonResponse
    //  */
    // public function logout(Request $request)
    // {
    //     Auth::logout();
    
    //     $request->session()->invalidate();
    
    //     $request->session()->regenerateToken();
    
    //     return response()->json(true);
    // }

    /**
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function user(Request $request)
    {
        // return $request->user();
        // ログイン済み
        return Auth::user();
    }
}