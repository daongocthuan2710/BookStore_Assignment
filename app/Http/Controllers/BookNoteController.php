<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;
use App\Http\Resources\BookResource;
// use App\Responsitory\BookResponsitory;
use Illuminate\Support\Facades\DB;

class BookNoteController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    // protected $book;
    //  function __construct(BookResponsitory $book){
    //     $this->book = $book;
    //  }
     
    public function foo(Request $request){
        // dd($request->all());
       //         throw new ApiStatusException('Resoure not found', 404);
       // \request()->get('id');
       // return 'aaaa'.\request()->get('id');;
    }

   public function index()
   {
       // return view('book.index',[
       //     'books' => Book::orderBy('id','desc')->get()
       // ]);
       // return Book:all();
       // return $this->book->getAll();
       // $query = Book::clas;
       // return Book::all();
    //    $collection = new BookCollection(Book::paginate(5));
        return response(new BookCollection(Book::paginate(5)));
       // $collection->collection->filter()
   }

   // public function product($id){
   //     // $product = Author::find($id);
   //     return null;
   //     // return response([
   //     //     'data' => $product,
   //     //     'status_code' =>200,
   //     //     'message' =>'ok'
   //     // ]);
   // }

   public function eloquent_demo(){

    //    $expectedBooks = ['',''];
    //    $book = Book::where('book_price','<',100)->where('book_title','like','E%')->get();
    //    $book = Book::where('book_price','<',100)->where('book_title','like','E%')
    //    //orWhere()
    //    // whereIn('book_title',$expectedBooks)
    //    ->get();
    //    // $book = Book::orderby('book_title;,'asc')->limit(2)->pluck('book_title')->get();
    //    return view('test', compact('books')); 

    //    // $book->category->category_name //set relationship

    //    $book = Book::with(['category'])->orderBy('book_title','asc')->get(); 
   }

       public function debugging_demo(){
        //    DB::enableQueryLog();
        //    $book = Book::with(['category'])->orderBy('book_title','asc')->get();
        //    Book::find(12);
        //    dd(DB::getQueryLog());

        //    return view('test', compact('books'));

        //    $book = Book::with(['category'])->orderBy('book_title','asc')->dd(); // xem debug của 1 câu query

           //Common mistake: nhiều câu query, nhiều data
           //Solve
           // $book = Book::with(['author:authorname'],['category:category_name'])->get();
           // $authors = Author::withCount(['book'])->get(); // Attribute : ->book_count()


       }

       public function transaction_demo(){

    //    DB::transaction(function(){
    //        $categoryAttributes = ['category_name' => 'danh', 'category_desc' => 'desc'];
    //        $bookAttributes = ['book_title'=>'thuan','book_summary'=>'desc','book_price'=>12.4,'book_cover_photo'=>'test.png'];
   
    //        $category = Category::create($categoryAttributes);
    //        $book = Book::create($bookAttributes);
    //        throw new \Exception("tesst00");
    //        // $book->category()->associate($category);
    //    });
    //    dd(true);

   }
   public function create(){
    //    $categoryAttributes = ['category_name' => 'danh', 'category_desc' => 'desc'];
    //     $category = new Category($categoryAttributes);
    //     $category->save();
    //     dd($category->id);
    //    // $category = Category::create($categoryAttributes); 
       
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
   public function store(Book $book, Request $request)
   {
    //    $request->validate([
    //        'id' => 'required',
    //        'category_id' => 'required',
    //        'author_id'=> 'required',
    //        'book_title'=> 'required',
    //        'book_summary'=> 'required',
    //        'book_price'=> 'required',
    //        'book_cover_photo'=> 'required'
    //    ]);

    //    $book = Book::create($request->all());
    //    return new BookResource($book);
   }

   /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function show(Book $book)
   {
    //    return new BookResource($book);
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function update(Request $request, $id)
   {
       //
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function destroy($id)
   {
    //    $category = Category::find($id); 
    //    $category->delete();
    //    dd(123);
   }
}
