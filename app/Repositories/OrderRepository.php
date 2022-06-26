<?php
namespace App\Repositories;

use App\Models\Order;

class OrderRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = Order::query();
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