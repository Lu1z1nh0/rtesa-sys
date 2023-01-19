<?php
namespace App\Http\Controllers;

use App\Models\CMS;
use Illuminate\Http\Request;
//use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

/**
 * Class CMSController
 * @package App\Http\Controllers
 */
class CMSController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$cmsVars = DB::select('select * from cms');

        $cmsVars = DB::table('cms')->select('variable', 'parametro')->get()->toArray();

        return view('welcome',compact('cmsVars'));
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cmsVars = CMS::find($id);

        return view('welcome', compact('cmsVars'));
    }





}