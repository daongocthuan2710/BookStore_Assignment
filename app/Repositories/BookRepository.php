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
            ->selectRaw('book.id,book_title,book_price,book_cover_photo,author_name,discount_price,discount_end_date,
                    CASE
                        WHEN discount_end_date > CURRENT_DATE THEN discount_price
                        WHEN discount_end_date < CURRENT_DATE THEN book_price
                        WHEN discount_price is not null and discount_end_date is null THEN discount_price
                        ELSE book_price
                    end as final_price,
                    CASE
                        WHEN discount_end_date > CURRENT_DATE THEN (book_price - discount_price)
                        WHEN discount_end_date < CURRENT_DATE THEN 0
                        WHEN discount_price is not null and discount_end_date is null THEN (book_price - discount_price)
                        ELSE 0
                    end as onSale')
            ->leftJoin('discount', function ($join) {
                $join->on('book.id', '=', 'discount.book_id');
            })
            ->leftJoin('author', function ($join) {
                $join->on('book.author_id', '=', 'author.id');
            })
            ->groupBy('book.id', 'discount_price', 'discount_end_date', 'author_name')
            ->orderByRaw('onSale desc, final_price asc')
            ->limit($numberOfBooks);

        $this->query->paginate($numberOfBooks);
        return $this->query->get();
    }

    function getBookRecommendeds($numberOfBooks)
    {
        $this->query
            ->selectRaw('book.id, book_price, book_title,book_cover_photo,author_name,discount_price,discount_end_date, avg(rating_start) as avgRatingStar, 
                CASE
                    WHEN discount_end_date > CURRENT_DATE THEN discount_price
                    WHEN discount_end_date < CURRENT_DATE THEN book_price
                    WHEN discount_price is not null and discount_end_date is null THEN discount_price
                    ELSE book_price
                end as final_price')
            ->leftJoin('discount', function ($join) {
                $join->on('book.id', '=', 'discount.book_id');
            })
            ->leftJoin('review', function ($join) {
                $join->on('book.id', '=', 'review.book_id');
            })
            ->leftJoin('author', function ($join) {
                $join->on('book.author_id', '=', 'author.id');
            })
            ->groupBy('book.id', 'book_price', 'discount_price', 'book_title', 'author_name', 'discount_end_date')
            ->orderByRaw('avgRatingStar DESC NULLS last, final_price asc')
            ->limit($numberOfBooks);

        $this->query->paginate($numberOfBooks);
        return $this->query->get();
    }

    function getBookPopulars($numberOfBooks)
    {
        $this->query
            ->selectRaw('book.id, book_price, book_title,book_cover_photo,author_name,discount_price,discount_end_date, count(review.id) as reviews, 
                CASE
                    WHEN discount_end_date > CURRENT_DATE THEN discount_price
                    WHEN discount_end_date < CURRENT_DATE THEN book_price
                    WHEN discount_price is not null and discount_end_date is null THEN discount_price
                    ELSE book_price
                end as final_price')
            ->leftJoin('discount', function ($join) {
                $join->on('book.id', '=', 'discount.book_id');
            })
            ->leftJoin('review', function ($join) {
                $join->on('book.id', '=', 'review.book_id');
            })
            ->leftJoin('author', function ($join) {
                $join->on('book.author_id', '=', 'author.id');
            })
            ->groupBy('book.id', 'book_price', 'discount_price', 'book_title', 'author_name', 'discount_end_date')
            ->orderByRaw('reviews DESC NULLS last, final_price asc')
            ->limit($numberOfBooks);

        $this->query->paginate($numberOfBooks);
        return $this->query->get();
    }

    public function create($data)
    {
        ///TO DO:  Implement create() method
    }

    public function update($data)
    {
        ///TO DO:  Implement update() method
    }
}
