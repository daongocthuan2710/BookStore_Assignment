<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// API Book
Route::resource('books', BookController::class);

//API Category
Route::resource('categorys', CategoryController::class);

//API Author
Route::resource('authors', AuthorController::class);

//API Order
Route::resource('orders', OrderController::class);

// API OrderItem
Route::resource('orderItems', OrderItemController::class);

// API Review
Route::resource('reviews', ReviewController::class);

// API Discount
Route::resource('discounts', DiscountController::class);

// API User
Route::resource('users', UserController::class);


