<?php
namespace App\Repositories;

use App\Models\Author;
use App\Models\Category;

class CategoryRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = Category::query();
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
                    $this->query->with($with);
                    break;
                case 'category':
                    $this->query->with($with);
                    break;
                default:
                    break;
            }
        }
        return $this->query->where('id',2)->get();
    }

    public function create($data)
    {
        return Category::create($data);
    }

    public function update($data)
    {
        ///TO DO:  Implement update() method
    }
}
?>