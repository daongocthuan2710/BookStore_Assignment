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
        if($request->all() == [])
        {
            return $this->getAll($perPage);
        }
        if($request->book_id != null){
            return $this->getByBookId($request->book_id,$perPage);
        }
        if($request->sortBy != null){
            return $this->sortBy($request->sortBy,$perPage);
        }

        
    }

    public function getAll($perPage){
        return $this->_ReviewRepository->getAll($perPage);
    }

    public function sortBy($request,$perPage)
    {

    }
    
    public function getById($id)
    {

    }
    public function getByBookId($id,$perPage)
    {
        return $this->_ReviewRepository->getByBookId($id,$perPage);
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