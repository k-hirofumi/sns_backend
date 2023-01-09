<?php

use App\Http\Controllers\AppApi\AccountAppController;
use App\Http\Controllers\AppApi\LoginAppController;
use App\Http\Controllers\AppApi\PostAppController;
use App\Models\Post;
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

// Route::post('/store',[LoginController::class, 'store'])->name('store');
// Route::post('/login',[LoginController::class, 'login'])->name('login');
// Route::get('/logout',[LoginController::class, 'logout'])->name('logout');

Route::post('/register', [LoginAppController::class, 'register']);
Route::post('/login', [LoginAppController::class, 'login']);

Route::middleware(['accessTokenVerified'])->group(function(){

    // Route::get('/user', function (Request $request) {
    //     // return (new AppErrorResponse(499,'テストエラー'))->toJson();
    //     // return response()->json([
    //     //     'code' => 499,
    //     //     'message' => 'テストエラー',
    //     // ]);
    //     return $request->user;
    // });

    Route::get('/get_user', [AccountAppController::class, 'getUser']);
    Route::post('/new_post', [PostAppController::class, 'newPost']);
    Route::get('/get_post', [PostAppController::class, 'getPost']);

});

