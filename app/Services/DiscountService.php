<?php
namespace App\Services;

use App\Repositories\DiscountRepository;

class DiscountService 
{
    private DiscountRepository $_DiscountRepository;

    public function __construct(DiscountRepository $DiscountRepository){
        $this->_DiscountRepository = $DiscountRepository;
    }

    public function index($perPage)
    {
        $this->_DiscountRepository->applyPagination($perPage);
    }

    public function sortBy($request)
    {

    }
    
}

?>