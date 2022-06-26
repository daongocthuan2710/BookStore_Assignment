<?php
namespace App\Repositories;

use App\Models\Author;

class AuthorRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = Author::query();
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