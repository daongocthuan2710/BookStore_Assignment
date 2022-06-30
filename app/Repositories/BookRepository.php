<?php
namespace App\Repositories;
use App\Models\Book;

class BookRepository extends BaseRepository
{
    public function __construct()
    {
        $this->query = Book::query();
    }

    public function getById($id)
    {
        $this->query->with(['author','category']);
        return $this->query->find($id);
    }

    public function filter($conditions)
    {
        try {
            if ($conditions['filterCategory'] != [""]) {
                $this->query->whereIn('category_id',[1])
                ->orderBy('book_title', 'ASC');
            }

            if ($conditions['filterAuthor'] != [""]) {
                $this->query->whereIn('author_id', $conditions['filterAuthor'])
                ->orderBy('book_title', 'ASC');
            }

            if ($conditions->rating_star != null) {
                return $this->query
                ->select(Book::raw('book.id, book_price, book_title, avg(review.rating_start) as avr_review'))
                ->leftJoin('review', function ($join) {
                    $join->on('book.id', '=', 'review.book_id');
                })
                ->groupBy('book.id', 'book_price', 'book_title')
                ->having('avr_review', '>', $conditions->rating_star)
                ->orderBy('avr_review', 'ASC');
            }
            $this->applyPagination($conditions['perPage']);
            return $this->query->get();

        } catch (\Exception $e){
            return "Filter Fail";
        }
    }

    public function create($data)
    {
        ///TO DO:  Implement create() method
    }

    public function update($data)
    {
        ///TO DO:  Implement update() method
    }

    public function search($condition)
    {
        // try{
        //     dd($condition->keyWord);
        //     if($condition->keyWord != NULL){
        //         return $this->query->where('book_title','LIKE','%'.$condition->keyWord.'%');
        //     }
        // } catch (\Exception $e){
        //     return "Search Fail";
        // }

        dd($condition->keyWord);
        if($condition->keyWord != NULL){
            return $this->query->where('book_title','LIKE','%'.$condition->keyWord.'%');
        }
        
    }

    public function sortBy($condition)
    {
    
        switch($condition){
            case 'lowToHigh': 
                return $this->query
                ->select(Book::raw('book.id,coalesce(discount_price,book_price) as final_price'))
                ->groupBy('book.id')
                ->orderBy('final_price','asc');
                break;
            case 'highToLow':
                return $this->query
                ->select(Book::raw('book.id,coalesce(discount_price,book_price) as final_price'))
                ->groupBy('book.id')
                ->orderBy('final_price','desc');
                break;
            case 'onSale':
                return $this->query
                ->select(Book::raw('book.id,book_title,book_price,discount_price,discount_end_date,(book_price - coalesce(discount_price,book_price))'))
                ->leftJoin('discount', function($join){
                    $join->on('book.id', '=', 'discount.book_id');
                    })
                    ->groupBy('book.id','discount_price','discount_end_date')
                    ->orderByRaw(
                        "CASE WHEN (book_price - coalesce(discount_price,book_price)) > 0 and(discount_end_date >= CURRENT_DATE 
                            or discount_end_date is null) THEN (book_price - coalesce(discount_price,book_price)) END desc nulls last,
                        CASE WHEN discount_price is NULL or discount_end_date < CURRENT_DATE THEN book_price END asc;"
                    );
                break;
            case 'popularity':
                return $this->query
                    ->select(Book::raw('book.id,book.book_title,count(review.id) as reviews,(book_price - coalesce(discount_price,0)) as final_price'))
                    ->leftJoin('review', function($join){
                        $join->on('book.id', '=', 'review.book_id');
                        })
                    ->leftJoin('discount', function($join){
                        $join->on('book.id', '=', 'discount.book_id');
                        })
                    ->groupBy('book.id','discount_price')
                    ->orderBy('reviews', 'desc')
                    ->orderBy('final_price', 'asc');
                break;
                default:
                    break;
        }
    }

}
?>