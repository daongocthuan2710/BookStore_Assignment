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
        $this->query->selectRaw('book.id,book_title, review_title, review_details, rating_start')
        ->rightJoin('book', function ($join) {
            $join->on('book.id', '=', 'review.book_id');
        })
        ->where('book.id',$bookId);
        $this->applyPagination($perPage);
        return $this->query->get();
    }

    public function filter($conditions, $perPage)
    {
    
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