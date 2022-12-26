<?php

namespace App\Http\Controllers\WebApi;

use App\Http\Controllers\Controller;
use App\Http\Requests\WebApi\Login\LoginRequest;
use App\Models\Staff;
use Exception;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use \Symfony\Component\HttpFoundation\Response;


class LoginController extends Controller
{
    public function store(Request $request)
    {
        $validator = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = Staff::create([
            'name' =>  $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $json = [
            'data' => $user,
            'message' => 'User registration completed',
            'error' => ''
        ];

        return response()->json( $json, Response::HTTP_OK);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        try{
            if (Auth::attempt($request->validated())) {
                Log::debug("ログイン成功");
    
                $request->session()->regenerate();
                $staff = Auth::user();
                return response()->json([
                    'name' => $staff->name,
                    'email' => $staff->email,
                ], 
                200);
            }
        }catch(Exception $e){
            Log::debug($e->getMessage());
            throw new HttpResponseException( response()->json( ['error' => 'ログインに失敗しました。再度お試しください'], 520 ));
        }

        throw new HttpResponseException( response()->json( ['error' => 'メールアドレスまたは、パスワードが正しくありません'], 430 ));
    }

    /**
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        Auth::logout();
    
        $request->session()->invalidate();
    
        $request->session()->regenerateToken();
    
        return response()->json(true);
    }

    /**
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function staff(Request $request)
    {
        // return $request->user();
        // ログイン済み
        return Auth::user();
    }
}