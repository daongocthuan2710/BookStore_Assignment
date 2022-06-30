<?php
namespace App\Services;

use App\Repositories\BookRepository;

class BookService
{
    private BookRepository $_BookRepository;

    public function __construct(BookRepository $BookRepository){
        $this->_BookRepository = $BookRepository;
    }

    public function filter($request)
    {
       $conditions = [
            'filterCategory' => explode(',',$request->category_id),
            'filterAuthor' => explode(',',$request->author_id),
            'filterRatingStar' => explode(',',$request->ratingStarValue),
            'perPage' =>$request->perPage
        ];
        return $this->_BookRepository->filter($conditions);
    }

    public function sortBy($request)
    {
        $condition = $request->sortBy;

        return $this->_BookRepository->sortBy($condition);
    }
    
    public function search($request)
    {
        $condition = $request->keyWord;
        dd( $request->keyWord);
        // return $this->_BookRepository->search($request);
        
    }
}

?>