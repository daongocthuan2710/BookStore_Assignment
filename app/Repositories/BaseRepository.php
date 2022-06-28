<?php
namespace App\Repositories;

abstract class BaseRepository
{
    protected $query;
    public function applyPagination($perPage){
        $this->query->paginate($perPage);
    }
    public abstract function getById($id);
    public abstract function filter($conditions);
    public abstract function create($data);
    public abstract function update($data);
}
?>