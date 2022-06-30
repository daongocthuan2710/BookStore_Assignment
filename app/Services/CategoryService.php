<?php
namespace App\Services;

use App\Repositories\CategoryRepository;

class CategoryService
{
    private CategoryRepository $_CategoryRepository;

    public function __construct(CategoryRepository $CategoryRepository){
        $this->_CategoryRepository = $CategoryRepository;
    }

    public function index($perPage)
    {
        $this->_CategoryRepository->applyPagination($perPage);
    }

    public function sortBy($request)
    {

    }
    
}

?>