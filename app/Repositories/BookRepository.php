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
            $this->query->where('author_id',$request->category);
        }
        if($request->author != NULL)
        {
            $this->query->where('author_id',$request->author);
        }
        if($request->keyword != NULL){
            $this->search($request);
        }
        if($request->sortBy != NULL && $request->orderBy != NULL)
        {
            $this->sortBy($request);
        }
        $this->applyPagination();
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
            return $this->query->orderBy($request->sortBy,$request->orderBy);
    }


}
?>