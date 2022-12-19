<?php

use App\Http\Controllers\AppApi\AppLoginController;
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

Route::post('/register', [AppLoginController::class, 'register']);
Route::post('/login', [AppLoginController::class, 'login']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

