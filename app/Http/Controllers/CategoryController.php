<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Repositories\CategoryRepository;
use GuzzleHttp\Psr7\Response;

class CategoryController extends Controller
{
    private CategoryRepository $_categoryRespository;

    public function __construct(CategoryRepository $categoryRespository )
    {
        $this->_categoryRespository = $categoryRespository;
    }

    public function index(Request $request)
    {
        // return Category::all();
        // return response(new CategoryCollection(Category::paginate(5)));
        $conditions = $request->get('filters');
        return response($this->_categoryRespository->filter($conditions));
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
