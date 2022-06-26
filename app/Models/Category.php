<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_name',
        'category_desc'
    ];

    public $timestamps = false;

    protected $table = 'category';

    public function books(){
        return $this->hasMany(Book::class);
    }

    public function getTableName()
    {
        return 'category';
    }
}
