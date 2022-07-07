<?php
namespace App\Services;

use App\Repositories\BookRepository;

class BookService extends BaseService
{
    private BookRepository $_BookRepository;

    public function __construct(BookRepository $BookRepository){
        $this->_BookRepository = $BookRepository;
    }

    public function index($request){
        $perPage = $request->perPage ?? 15;  
        if ($request->category_id != null or $request->author_id != null or $request->ratingStarValue != null){
            return $this->filter($request,$perPage);
        }

        if($request->sortBy != null){
            return $this->sortBy($request,$perPage);
        }
        
        if($request->getTopBooks != null){
            return $this->getTopBooks($request->getTopBooks);
        }
        
        if($request->book_id != null){
            return $this->getById($request->book_id,$perPage);
        }
        
        if($request->getBookPopular != null){
            return $this->getBookPopulars($request->getBookPopular);
        }
        
        if($request->getBookRecommended != null){
            return $this->getBookRecommendeds($request->getBookRecommended);
        }

        if($request->all() == []){
            return $this->getAll($perPage);
        }

    }
    
    public function filter($request,$perPage)
    {
       $conditions = [
            'filterCategory' => explode(',',$request->category_id),
            'filterAuthor' => explode(',',$request->author_id),
            'filterRatingStar' => explode(',',$request->ratingStarValue),
        ];
        // return dd($conditions['filterCategory']);
        return $this->_BookRepository->filter($conditions,$perPage);
    }

    public function sortBy($request,$perPage)
    {
        $condition = $request->sortBy;

        return $this->_BookRepository->sortBy($condition,$perPage);
    }

    public function getAll($perPage){
        return $this->_BookRepository->getAll($perPage);
    }

    public function getById($request){
        return $this->_BookRepository->getById($request);
    }

    public function getTopBooks($numberOfBooks){
        return $this->_BookRepository->getTopBooks($numberOfBooks);
    }
    
    public function getBookRecommendeds($numberOfBooks){
        return $this->_BookRepository->getBookRecommendeds($numberOfBooks);
    }

    public function getBookPopulars($numberOfBooks){
        return $this->_BookRepository->getBookPopulars($numberOfBooks);
    }

    
    public function create($data)
    {
        //
    }
    public function update($data){
        //
    }
}

?>