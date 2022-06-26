<?php
namespace App\Repositories;

use App\Models\Review;

class ReviewRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = Review::query();
    }

    public function getById($id)
    {
        return $this->query->find($id);
    }

    public function filter($conditions = [])
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