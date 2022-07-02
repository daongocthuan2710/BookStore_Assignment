<?php
namespace App\Services;

use App\Repositories\OrderRepository;

class OrderService 
{
    private OrderRepository $_OrderRepository;

    public function __construct(OrderRepository $OrderRepository){
        $this->_OrderRepository = $OrderRepository;
    }

    public function index($perPage)
    {
        $this->_OrderRepository->applyPagination($perPage);
    }

    public function sortBy($request)
    {

    }
    
}

?>