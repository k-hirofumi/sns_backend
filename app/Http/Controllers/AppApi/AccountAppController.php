<?php

namespace App\Http\Controllers\AppApi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class AccountAppController extends Controller
{
    public function getUser(Request $request)
    {        
        return $request->user;
    }
}