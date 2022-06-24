<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{
    use HasFactory, SoftDeletes;

    public $timestamps = false;
    protected $table = 'book';
   
    public function getShortTitleAttribute():string
    {
        return strlen($this->book_title) > 10
        ?substr($this->book_title,0,10)."..." : $this->book_title;
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }

    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
