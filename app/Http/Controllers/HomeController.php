<?php
namespace App\Http\Controllers;

use App\Models\CMS;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * Class HomeController
 * @package App\Http\Controllers
 */
class HomeController extends Controller
{

    public function create() {

        $cmsVars = CMS::get()->toArray();

        return view('welcome',compact('cmsVars'));
    }








    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function inexistentes()
    {
        return view('errors.404');
    }


}




