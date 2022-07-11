<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'review';
        protected $filltable = [
        'book_id',
        'review_title',
        'rating_start',
        'review_details'
    ];
}
