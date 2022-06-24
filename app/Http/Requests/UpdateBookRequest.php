<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // cấp quyền
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            // 'department_name' => 'required',
            // 'department_name' => 'email',
            //custom rule to check id exist in location table
            // 'location_id' => ['required', new AvilableLocation];
        ];
    }
}
