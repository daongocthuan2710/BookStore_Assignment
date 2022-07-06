<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Repositories\CategoryRepository;
use GuzzleHttp\Psr7\Response;
use App\Services\CategoryService;
class CategoryController extends Controller
{
    private CategoryService $_categoryService;

    public function __construct(CategoryService $categoryService )
    {
        $this->_categoryService = $categoryService;
    }

    public function index(Request $request)
    {
        return Category::all();
        
    }

    public function store(Request $request)
    {
        
        return response($this->_categoryRespository->create($request->all()));
        // var_dump($request);die;
        // if($request->validate($request->rules()))
        // {
        //     return response($this->_categoryRespository->create($request->all()));
        // }
        // return response('Invalid Form Input', '422');
    }

    public function show($id)
    {
        return Category::find($id);
    }

    public function update(Request $request, $id)
    {
        // $post->update($request->all());
        // return $post;
    }

    public function destroy($id)
    {
        //
    }
}
