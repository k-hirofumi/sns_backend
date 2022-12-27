<?php

namespace App\Http\Middleware;

use App\Http\Requests\AppResponse\AppErrorResponse;
use App\Models\User;
use Closure;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\PersonalAccessToken;

class verifyAccessToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->header("Authorization");
        $personalAccessToken = PersonalAccessToken::findToken($token);
        if(!$personalAccessToken){
            throw new HttpResponseException((new AppErrorResponse(1000,'認証エラー', '認証の有効期限が切れています'))->toJson());
        }

        $user = User::where("user_id",$personalAccessToken->name)->first();
        $request->merge(['user' => $user]);
        return $next($request);
    }
}
