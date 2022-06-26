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
        // if($conditions['with'] === 'author')
        $conditions['with'] = explode($conditions['with'], ',');
        if($conditions['with'].contains('author'))
        {   
            // $this->query->with('author');
            // $this->query->join(Category::getTableName());

        }
        return $this->query->where('id',2)->get();
        ///TO DO:  Implement filter() method
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