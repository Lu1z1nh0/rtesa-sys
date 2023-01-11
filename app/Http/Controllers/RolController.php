<?php
namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;


class RolController extends Controller
{
  public function __construct()
  {
      $this->middleware('guest');
  }

  public function obtenerRoles()
  {
    $roles = Rol::all()->toArray();
    return response()->json($roles, 200);
  }

}
