<?php
namespace App\Repositories;
use App\Models\Book;
use GuzzleHttp\Psr7\Request;

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

    public function filter($request)
    {
        if($request->category != NULL)
        {
            $this->query->where('category_id',$request->category);
        }
        if($request->author != NULL)
        {
            $this->query->where('author_id',$request->author);
        }
        if($request->keyword != NULL){
            $this->search($request);
        }
        if($request->sortBy != NULL)
        {
            $this->sortBy($request);
        }
        $this->applyPagination($request->perPage);
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

    public function search($request)
    {
        return $this->query->where('book_title','LIKE','%'.$request->keyword.'%');
        
    }

    public function sortBy($request)
    {
        
        switch($request->sortBy){
            case 'lowToHigh': 
                return $this->query->orderBy('book_price','asc');
                break;
            case 'highToLow':
                return $this->query->orderBy('book_price','desc'); 
                break;
            case 'onSale':
                return $this->query->leftJoin('discount', function($join){
                    $join->on('book.id', '=', 'discount.book_id');
                    })
                    ->orderByRaw(
                        "CASE WHEN discount.discount_price is not null and(discount.discount_end_date > CURRENT_DATE 
                        or discount.discount_end_date is null) THEN discount_price END DESC NULLS LAST,
                        CASE WHEN discount.discount_price is NULL or discount.discount_end_date < CURRENT_DATE THEN book.book_price END asc"
                    );
                break;
            case 'popularity':
                //
                break;
            default:
                break;
        }
    }

}
?>