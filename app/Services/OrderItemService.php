<?php
namespace App\Services;

use App\Repositories\OrderItemRepository;
 
class OrderItemService
{
    private OrderItemRepository $_OrderItemRepository;

    public function __construct(OrderItemRepository $OrderItemRepository){
        $this->_OrderItemRepository = $OrderItemRepository;
    }

    public function index($perPage)
    {
        $this->_OrderItemRepository->applyPagination($perPage);
    }

    public function sortBy($request)
    {

    }
    
}

?>