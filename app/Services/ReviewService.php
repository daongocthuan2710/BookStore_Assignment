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
        $datas = [];
        if($request->all() == [])
        {
            $datas = $this->getAll($perPage);
        }
        if($request->book_id != null){
            $datas = $this->getByBookId($request->book_id,$perPage);
        }
        if($request->sortBy != null){
            $datas = $this->sortByBookId($request->sortBy,$request->book_id,$perPage);
        }
        if($request->getByStar != null){
            $datas = $this->getByStar($request->book_id,$request->getByStar,$perPage);
        }
        return $datas;
    }

    public function getAll($perPage){
        return $this->_ReviewRepository->getAll($perPage);
    }

    public function sortBy($condition,$perPage)
    {
        // return $this->_ReviewRepository->sortBy($condition,$perPage);
    }

    public function sortByBookId($condition,$book_id,$perPage)
    {
        return $this->_ReviewRepository->sortBy($condition,$book_id,$perPage);
    }
    
    public function getById($id)
    {

    }
    public function getByBookId($id,$perPage)
    {
        return $this->_ReviewRepository->getByBookId($id,$perPage);
    }

    public function getByStar($bookId,$star,$perPage)
    {
        return $this->_ReviewRepository->getByStar($bookId,$star,$perPage);
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