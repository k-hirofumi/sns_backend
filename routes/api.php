<?php

use App\Http\Controllers\WebApi\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/store',[LoginController::class, 'store'])->name('store');
Route::post('/login',[LoginController::class, 'login'])->name('login');
Route::get('/logout',[LoginController::class, 'logout'])->name('logout');


Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        // return $request->user();
        // ログイン済み
        return Auth::user();
    });
});