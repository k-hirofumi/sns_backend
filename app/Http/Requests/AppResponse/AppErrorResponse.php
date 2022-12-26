<?php

namespace App\Http\Requests\AppResponse;

class AppErrorResponse {
    public int $code;
    public string $message;
    
    public function __construct(int $code, string $message)
    {
        $this->code = $code;
        $this->message = $message;
    }

    function toJson(){
        return response()->json((array)$this);
    }
}