<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use App\Models\Book;
use Illuminate\Http\Request;
use App\Services\BookService;

class BookController extends Controller
{
    private BookService $_BookService;

    public function __construct(BookService $BookService )
    {
        $this->_BookService = $BookService;
    }

    public function index(Request $request)
    {
        return response($this->_BookService->index($request));
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
