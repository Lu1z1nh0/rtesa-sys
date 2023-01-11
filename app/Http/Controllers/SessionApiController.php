<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SessionApiController extends Controller
{

    public function __construct(){

        $this->middleware('token',['except' => ['store']]);
      //  $this->middleware('iplog');


    }
    /**
     * Verificar si tiene sessión iniciada
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

         $token= $request->token;

          return response()->json(['flag' => true,'token' => $token, 'codigo' => 201],201);

    }

    /**
     * Inicio de Seesion desde el BackEnd
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $exist= User::where('correo','=',$request->correo)->get();

        if(!count($exist))
          return response()->json(['flag' => false,'mensaje' => 'Favor verificar usuario o contraseña, alguno no es válido.', 'codigo' => 201, 'semaforo' => 'warning'],201);

        $autenticate= auth()->attempt(request(['correo','password']),true);

        if($autenticate){
           return response()->json(['flag' => true,'User' => auth()->User()]);
        }else {
            return response()->json(['flag' => false,'mensaje' => 'Favor verificar usuario o contraseña, alguno no es válido.', 'codigo' => 201, 'semaforo' => 'warning'],201);
        }

    }

}
