<?php

namespace App\Http\Requests\AppResponse;

class AppErrorResponse {
    public int $code;
    public string $message;
    public string $content;
    
    public function __construct(int $code, string $message, $content = "")
    {
        $this->code = $code;
        $this->message = $message;
        $this->content = $content;
    }

    function toJson(){
        return response()->json((array)$this);
    }
}