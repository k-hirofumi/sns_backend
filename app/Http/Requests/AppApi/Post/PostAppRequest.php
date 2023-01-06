<?php

namespace App\Http\Requests\AppApi\Post;

use App\Http\Requests\AppResponse\AppErrorResponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Log;
use Symfony\Component\ErrorHandler\Debug;

class PostAppRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'periods' => ['nullable', 'string'],
            'events' => ['nullable','string'],
            'images' => ['nullable'],
        ];
    }

    protected function failedValidation( Validator $validator ){
        $response  = $validator->errors()->toArray();
        throw new HttpResponseException((new AppErrorResponse(1003,'入力内容が正しくありません'))->toJson());
        // return (new AppErrorResponse(1001,'validation_error'))->toJson();
    }
}
