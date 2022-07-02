<?php
namespace App\Services;

use App\Repositories\ReviewRepository;

class ReviewService extends BaseService
{
    private ReviewRepository $_ReviewRepository;

    public function __construct(ReviewRepository $ReviewRepository){
        $this->_ReviewRepository = $ReviewRepository;
    }

    public function index($request)
    {
        $perPage = $request->perPage ?? 5; 
        $this->_ReviewRepository->applyPagination($perPage);
    }

    public function getAll($perPage){
        return $this->_BookRepository->getAll($perPage);
    }

    public function sortBy($request,$perPage)
    {

    }
    
    public function getById($id)
    {

    }
    public function filter($conditions,$perPage)
    {

    }
    public function create($data)
    {

    }
    public function update($data)
    {

    }
}

?>