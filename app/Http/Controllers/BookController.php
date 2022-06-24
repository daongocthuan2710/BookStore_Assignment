<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;
use App\Http\Resources\BookResource;
// use App\Responsitory\BookResponsitory;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Book::all();
    }

    public function foo(Request $request){
        dd($request->all());
    //    return "aaa";
    //            throw new ApiStatusException('Resoure not found', 404);
    //    \request()->get('id');
    //    return 'aaaa'.\request()->get('id');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
