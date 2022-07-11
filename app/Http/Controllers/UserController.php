<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function __construct()
    {
        $this->query = User::query();
    }

    public function index(Request $request)
    {
       $this->query 
        ->select('*')
        ->where('email', $request->email)
        ->where('password',$request->password);
        // if()
        echo $this->query->get();
        // return $this->query->get();
    }


    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

   
    public function destroy($id)
    {
        //
    }
}
