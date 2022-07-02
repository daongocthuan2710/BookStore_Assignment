<?php
namespace App\Services;

abstract class BaseService
{
    public abstract function getAll($perPage);
    public abstract function getById($id);
    public abstract function filter($conditions,$perPage);
    public abstract function sortBy($id,$perPage);
    public abstract function create($data);
    public abstract function update($data);
}
?>