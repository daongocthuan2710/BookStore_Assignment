<?php

namespace App\Http\Controllers;

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
        return $id;
    }

    public function showReviews($id)
    {
        return $id;
        // return response($this->_BookBookService->getById($id));
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
