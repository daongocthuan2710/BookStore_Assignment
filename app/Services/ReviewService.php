<?php
namespace App\Services;

use App\Repositories\ReviewRepository;

class ReviewService
{
    private ReviewRepository $_ReviewRepository;

    public function __construct(ReviewRepository $ReviewRepository){
        $this->_ReviewRepository = $ReviewRepository;
    }

    public function index($perPage)
    {
        $this->_ReviewRepository->applyPagination($perPage);
    }

    public function sortBy($request)
    {

    }
    
}

?>