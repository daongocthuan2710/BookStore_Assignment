<?php
namespace App\Repositories;

use App\Models\Review;

class ReviewRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = Review::query();
    }

    public function getAll($perPage)
    {
        $this->query->get();
        $this->applyPagination($perPage);
        return $this->query->get();
    }

    public function getById($id)
    {
        return $this->query->find($id);
    }

    public function getByBookId($bookId, $perPage)
    {
        $this->query->selectRaw('book.id, review_title, review_details, rating_start,review_date, count(book.id) as totals, avg(rating_start) as avgRatingStar')
        ->rightJoin('book', function ($join) {
            $join->on('book.id', '=', 'review.book_id');
        })
        ->where('book.id',$bookId)
        ->groupBy('book.id','review_title','review_details','rating_start', 'review_date');
        $this->query->get();
        return $this->query->paginate($perPage);
    }


    public function getByStar($bookId,$star, $perPage)
    {
        $this->query->selectRaw('book_id, count(rating_start) as totals')
        ->where('book_id',$bookId)
        ->groupBy('book_id','rating_start')
        ->having('rating_start',$star);
        $this->query->get();
        return $this->query->paginate($perPage);
    }
    
    public function filter($conditions, $perPage)
    {
    
    }
    
    public function sortBy($condition,$book_id,$perPage)
    {
        try{
            switch($condition){
                case 'newestToOldest': 
                    $this->query
                    ->selectRaw('book_title,book_price,rating_start, review_title, review_date ')
                        ->where('book_id' , $book_id)
                    ->orderByRaw('review_date desc nulls last'); 
                    break;
                case 'oldestToNewest':
                        $this->query
                        ->selectRaw('book_title,book_price,rating_start, review_title, review_date ')
                            ->where('book_id' , $book_id)
                        ->orderByRaw('review_date asc nulls last'); 
                        break;
                    default:
                        break;
            }
            $this->applyPagination(256);
            return $this->query->get();

        } catch (\Exception $e){
            return "Sort Fail";
        }
    }

    public function create($data)
    {
       
    }

    public function update($data)
    {
        ///TO DO:  Implement update() method
    }
}
?>