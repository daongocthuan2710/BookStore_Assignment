<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Services\ReviewService;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ReviewController extends Controller
{
    private ReviewService $_ReviewService;

    public function __construct(ReviewService $ReviewService )
    {
        $this->_ReviewService = $ReviewService;
    }

    public function index(Request $request)
    {
        return response($this->_ReviewService->index($request));
    }


    public function store(Request $request)
    {
        // return Review::create($request->all());
        // dd($request->all());
        $rev = new Review();
        $rev->book_id = $request->book_id;
        $rev->review_title = $request->review_title;
        $rev->review_details = $request->review_details;
        $rev->rating_start = $request->rating_start;
        $rev->review_date = Carbon::now()->toDateTimeString();

        $rev->save();
        return $rev;
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
