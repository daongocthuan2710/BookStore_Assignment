<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\ReviewController;
use App\Http\Middleware\FooCheck;
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

// API Book: index, store, update, delete, search, filter
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


// Route::get('/books/{bookId}/reviews', [BookController::class, 'showReviews']);




// Route::get('/foo', [BookController::class, 'foo'])->name('foo')->middleware('foo');
// Route::resource('books', BookController::class);
// Route::get('/foo', [BookController::class, 'foo'])->name('foo');




// Route::middleware([FooCheck::class])->group(function(){
//     // Route::get('/', function(){
//     //     //
//     // });
//     Route::get('/foo', [BookController::class, 'foo'])->name('foo');

//     Route::get('/profile', function(){
//         //
//     })->withoutMiddleware([FooCheck::class]);


// });

// Route::prefix('books')->group(function(){
//     Route::name('admin.')->group(function(){
//         Route::resource('books',BookController::class);
//     });
// });





// Route::resource('/books', BookController::class)->only('index', 'show');

