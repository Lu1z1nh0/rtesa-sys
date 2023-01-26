<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller {

    /**
     * Redirecciona al dashboard del admin y superAdmin
     *
     * 
     */
    public function index() {

        //return 'Admin';
        return view('admin');
    }
}
