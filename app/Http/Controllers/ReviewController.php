<?php

namespace App\Http\Controllers;
use App\Services\ReviewService;

use Illuminate\Http\Request;

class ReviewController extends Controller
{
    private ReviewService $_ReviewService;

    public function __construct(ReviewService $ReviewService )
    {
        $this->_ReviewService = $ReviewService;
    }

    public function index()
    {
        $PER_PAGE = 10 ;
        return response($this->_ReviewService->index($PER_PAGE));
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
