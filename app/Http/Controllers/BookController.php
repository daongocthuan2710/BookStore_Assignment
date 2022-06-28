<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use App\Models\Book;
use Illuminate\Http\Request;
use App\Repositories\BookRepository;

class BookController extends Controller
{
    private BookRepository $_BookRespository;

    public function __construct(BookRepository $BookRespository )
    {
        $this->_BookRespository = $BookRespository;
    }

    public function index(Request $request)
    {
        return response($this->_BookRespository->filter($request));
    }


    public function store(Request $request)
    {

    }


    public function show($id)
    {
        return response($this->_BookRespository->getById($id));
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
