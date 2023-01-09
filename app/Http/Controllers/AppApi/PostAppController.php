<?php

namespace App\Http\Controllers\AppApi;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppApi\Post\PostAppRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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

    public function getPost(Request $request)
    {        
        $posts = Post::get();
        $firstPost = Post::first();

        $response = [
           [
              'account_image_path' => 'https://1.bp.blogspot.com/-NxtW_gNSo2k/WqihXh3VIPI/AAAAAAABKzE/yNubh5ItteoZmtB8_EJ3lB28kFS6QpsGgCLcBGAs/s180-c/backpacker_woman.png',
              'account_name' => '女　一子',
              'time_lines' => [
                [
                  'period' => '9:00 ~ 10:00' , 
                  'event' => '梅田のカフェ[*************]で朝食。'
                ],
                [
                  'period' => '10:30 ~ 12:00' , 
                  'event' => 'ジム'
                ],
                [
                  'period' => '12:15 ~ 13:00' , 
                  'event' => '昼食'
                ]
              ],
              'images' => [
                  'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_960_720.jpg',
                  'https://images.pexels.com/photos/5946968/pexels-photo-5946968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              ]
            ],
        ];

        // タイムライン作成
        $periods = collect(explode('|', $firstPost->periods));
        $events = collect(explode('|', $firstPost->events));
        $timeLines = $periods->map(function ($period, $key) use($events) { 
            return ['period' => $period, 'event' => $events[$key]];
        })->toArray();

        $add_response = [
            'account_image_path' => 'https://1.bp.blogspot.com/-NxtW_gNSo2k/WqihXh3VIPI/AAAAAAABKzE/yNubh5ItteoZmtB8_EJ3lB28kFS6QpsGgCLcBGAs/s180-c/backpacker_woman.png',
            'account_name' => $firstPost->user->name,
            'time_lines' => 
                $timeLines
            //   [
            //     'period' => '$firstPost' , 
            //     'event' => '梅田のカフェ[*************]で朝食。'
            //   ],
            //   [
            //     'period' => '10:30 ~ 12:00' , 
            //     'event' => 'ジム'
            //   ],
            //   [
            //     'period' => '12:15 ~ 13:00' , 
            //     'event' => '昼食'
            //   ]
            ,
            'images' => [
                'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_960_720.jpg',
                'https://images.pexels.com/photos/5946968/pexels-photo-5946968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ]
        ];

        array_push($response, $add_response);

        return response()->json($response);
    }
}