<?php
use App\Http\Controllers\BookController;
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

Route::get('/greeting',function(){
    return "Helloooo";
});
// Route::get('/foo', [BookController::class, 'foo'])->name('foo')->middleware('foo');
Route::resource('books', BookController::class);

Route::middleware([FooCheck::class])->group(function(){
    // Route::get('/', function(){
    //     //
    // });
    Route::get('/foo', [BookController::class, 'foo'])->name('foo');

    Route::get('/profile', function(){
        //
    })->withoutMiddleware([FooCheck::class]);


});



// Route::get('/books', [BookController::class, 'danh']);
// Route::get('/books/{$id?}', [BookController::class, 'index']);
// Route::get('/book s/{id?}', [BookController::class, 'index']);

// Route::get('/user/{id}/profile', function($id){
//     //
// })->name('profile');

// $url = route('profile', ['id'=> 1, 'photos'=>'yes']);
//user/1/profile?photos=yes


// Route::resource('/books', BookController::class)->only('index', 'show');

// Route::prefix('admin')->group(function(){
//     Route::name('admin.')->group(function(){
//         Route::resource('books',BookController::class);
//     });
// });
