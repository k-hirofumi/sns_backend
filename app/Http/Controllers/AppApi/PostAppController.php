<?php

namespace App\Http\Controllers\AppApi;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppApi\Post\PostAppRequest;
use App\Models\Post;
use Illuminate\Http\Request;


class PostAppController extends Controller
{
    public function newPost(PostAppRequest $request)
    {        
        Post::create([
            'post_user_id' => $request->user->user_id,
            'periods' => $request['periods'],
            'events' => $request['events'],
        ]);

        return response()->json([
            'result' => true,
        ]);
    }
}