<?php

namespace App\Http\Requests\AppApi\Login;

use App\Http\Requests\AppResponse\AppErrorResponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Log;

class LoginApiRequest extends FormRequest
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
            'email' => ['required', 'email'],
            'password' => ['required'],
        ];
    }

    protected function failedValidation( Validator $validator ){
        $response  = $validator->errors()->toArray();
        throw new HttpResponseException((new AppErrorResponse(1001,'メールアドレスまたはパスワードの形式が正しくありません'))->toJson());
        // return (new AppErrorResponse(1001,'validation_error'))->toJson();
    }
}
