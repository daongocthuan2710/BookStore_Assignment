<?php
namespace App\Services;

use App\Repositories\AuthorRepository;

class AuthorService
{
    private AuthorRepository $_AuthorRepository;

    public function __construct(AuthorRepository $AuthorRepository){
        $this->_AuthorRepository = $AuthorRepository;
    }

    public function index($perPage)
    {
        $this->_AuthorRepository->applyPagination($perPage);
    }

    public function sortBy($request)
    {

    }
    
}

?>