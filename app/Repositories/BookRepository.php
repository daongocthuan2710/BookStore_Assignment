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
        return $this->query->find($id);
    }

    public function filter($conditions = [])
    {
        foreach(explode(',',$conditions['with']) as $with){     
            switch($with){
                case 'author':
                    $this->query->with(['author']);
                    break;
                case 'category':
                    $this->query->with(['category']);
                    break;
                default:
                    break;
            }
        }
        $this->query->where('id',2);
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
}
?>