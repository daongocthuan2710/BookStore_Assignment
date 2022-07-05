<?php

namespace App\Repositories;

use App\Models\Book;

class BookRepository extends BaseRepository
{
    public function __construct()
    {
        $this->query = Book::query();
    }

    public function getAll($perPage)
    {
        $this->query->get();
        return $this->query->paginate($perPage);
    }

    public function getById($id)
    {
        $this->query->with(['author', 'category']);
        return $this->query->find($id);
    }

    public function filter($conditions, $perPage)
    {
        try {
            if ($conditions['filterCategory'] != [""]) {

                $this->query->whereIn('category_id', $conditions['filterCategory'])
                    ->orderBy('book_title', 'ASC');
            }

            if ($conditions['filterAuthor'] != [""]) {
                $this->query->whereIn('author_id', $conditions['filterAuthor'])
                    ->orderBy('book_title', 'ASC');
            }

            if ($conditions['filterRatingStar'] != [""]) {
                $this->query->selectRaw('book.id, book_price, book_title, avg(review.rating_start) as avgRating')
                    ->leftJoin('review', function ($join) {
                        $join->on('book.id', '=', 'review.book_id');
                    })
                    ->groupBy('book.id', 'book_price', 'book_title')
                    ->havingRaw('avg(review.rating_start) > 2.0')
                    ->orderByRaw('avgRating DESC NULLS LAST');
            }

            $this->query->get();
            return $this->query->paginate($perPage);
        } catch (\Exception $e) {
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
        if ($condition->keyWord != NULL) {
            return $this->query->where('book_title', 'LIKE', '%' . $condition->keyWord . '%');
        }
    }

    public function sortBy($condition, $perPage)
    {
        // try {
            switch ($condition) {
                case 'lowToHigh':
                    $this->query
                        ->selectRaw('book.id,book_title,book_price, book_cover_photo,discount_price,discount_end_date,
                                (case when (discount_end_date >= CURRENT_DATE or discount_end_date is null) 
                                THEN coalesce(discount_price,book_price) 
                                ELSE book_price END) as final_price')
                        ->leftJoin('discount', function ($join) {
                            $join->on('book.id', '=', 'discount.book_id');
                        })
                        ->orderBy('final_price', 'asc')
                        ->limit($perPage);
                    break;
                case 'highToLow':
                    $this->query
                        ->selectRaw('book.id,book_title,book_price, book_cover_photo,discount_price,discount_end_date,
                                (case when (discount_end_date >= CURRENT_DATE or discount_end_date is null) 
                                THEN coalesce(discount_price,book_price) 
                                ELSE book_price END) as final_price')
                        ->leftJoin('discount', function ($join) {
                            $join->on('book.id', '=', 'discount.book_id');
                        })
                        ->orderBy('final_price', 'desc')
                        ->limit($perPage);
                    break;
                case 'onSale':
                    $this->query
                        ->selectRaw('book.id,book_title,book_price, book_cover_photo,discount_price,discount_end_date,(book_price - coalesce(discount_price,book_price)) as onSale')
                        ->leftJoin('discount', function ($join) {
                            $join->on('book.id', '=', 'discount.book_id');
                        })
                        ->groupBy('book.id', 'discount_price', 'discount_end_date')
                        ->orderByRaw(
                            "CASE WHEN (book_price - coalesce(discount_price,book_price)) > 0 and(discount_end_date >= CURRENT_DATE 
                                or discount_end_date is null) THEN (book_price - coalesce(discount_price,book_price)) END desc nulls last,
                            CASE WHEN discount_price is NULL or discount_end_date < CURRENT_DATE THEN book_price END asc"
                        )
                        ->limit($perPage);
                    break;
                case 'popularity':
                    $this->query
                        ->selectRaw('book.id,book_title,book_price, book_cover_photo, discount_price, discount_end_date, count(review.id) as reviews,(book_price - coalesce(discount_price,book_price))')
                        ->leftJoin('review', function ($join) {
                            $join->on('book.id', '=', 'review.book_id');
                        })
                        ->leftJoin('discount', function ($join) {
                            $join->on('book.id', '=', 'discount.book_id');
                        })
                        ->groupBy('book.id', 'discount_price', 'book_price', 'discount_price', 'discount_end_date')
                        ->orderByRaw('reviews DESC NULLS last, 
                        CASE WHEN (book_price - coalesce(discount_price,book_price)) > 0 and(discount_end_date >= CURRENT_DATE or discount_end_date is null) 
                        THEN (book_price - coalesce(discount_price,book_price)) END asc nulls last,
                        CASE WHEN discount_price is NULL or discount_end_date < CURRENT_DATE 
                        THEN book_price END asc')
                        ->limit($perPage);
                    break;
                default:
                    break;
            }
            $this->query->get();
            return $this->query->paginate($perPage);
        // } catch (\Exception $e) {
        //     return "Sort Fail";
        // }
    }

    function getTopBooks($numberOfBooks)
    {
        $this->query
            ->selectRaw('book.id,book_title,book_price,book_cover_photo,author_name,discount_price,discount_end_date,(book_price - coalesce(discount_price,book_price)) as onSale')
            ->leftJoin('discount', function ($join) {
                $join->on('book.id', '=', 'discount.book_id');
            })
            ->leftJoin('author', function ($join) {
                $join->on('book.author_id', '=', 'author.id');
            })
            ->groupBy('book.id', 'discount_price', 'discount_end_date', 'author_name')
            ->orderByRaw(
                "CASE WHEN (book_price - coalesce(discount_price,book_price)) > 0 and(discount_end_date >= CURRENT_DATE 
                    or discount_end_date is null) THEN (book_price - coalesce(discount_price,book_price)) END desc nulls last,
                CASE WHEN discount_price is NULL or discount_end_date < CURRENT_DATE THEN book_price END asc"
            )
            ->limit($numberOfBooks);

        $this->query->paginate($numberOfBooks);
        return $this->query->get();
    }

    function getBookRecommendeds($numberOfBooks)
    {
        $this->query
        ->selectRaw('book.id, book_price,book_cover_photo, book_title,discount_price,discount_end_date, avg(rating_start)')
        ->leftJoin('discount', function ($join) {
            $join->on('book.id', '=', 'discount.book_id');
        })
        ->leftJoin('review', function ($join) {
            $join->on('book.id', '=', 'review.book_id');
        })
        ->groupBy('book.id','book_price', 'discount_price','book_title', 'discount_end_date')
        ->orderByRaw(
            "avg(rating_start) DESC NULLS last,
            CASE WHEN (book_price - coalesce(discount_price,book_price)) > 0 and(discount_end_date >= CURRENT_DATE 
                                    or discount_end_date is null) THEN (book_price - coalesce(discount_price,book_price)) END asc nulls last,
            CASE WHEN discount_price is NULL or discount_end_date < CURRENT_DATE THEN book_price END asc"
        )
        ->limit($numberOfBooks);

    $this->query->paginate($numberOfBooks);
    return $this->query->get();
    }
}
