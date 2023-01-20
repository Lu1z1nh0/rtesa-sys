<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rol;
use App\Models\User;

class SessionsController extends Controller
{

    public function __constructor()
    {
       $this->middleware('guest',['except' => 'destroy']);
    }

    /*
    |--------------------------------------------------------------------------
    | No tiene uso
    |--------------------------------------------------------------------------
    */
    public function index()
    {
        echo "<script>console.log('iniSesion');</script>";

        return view('login');
    }

    /*
    |--------------------------------------------------------------------------
    | Inicio de Sesión
    |--------------------------------------------------------------------------
    */
    public function iniSesion()
    {
        echo "<script>console.log('iniSesion');</script>";

        return view('login');
    }

    /*
    |--------------------------------------------------------------------------
    | Autenticación Usuario
    |--------------------------------------------------------------------------
    */

    /**
     * Store a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

       //dd($request);
       echo "<script>console.log('request: ".$request."');</script>";

       $correo = $request->input('correo');
       $pass = $request->input('password');

       echo "<script>console.log('correo, password: ".$correo.", ".$pass."');</script>";

       //$exist = User::where('correo','=',$request->correo)->where('delete','=',true)->get();

       /*
       if(count($exist))
           return back()->withErrors([
               'mensaje' => 'Credenciales incorrectas, favor verificar!'
           ]);

        if(!auth()->attempt(request(['correo','password']))){
            return back()->withErrors([
                'mensaje' => 'Credenciales incorrectas, favor verificar!'
            ]);
        }
        */

        //$result = (new BitacoraController)->guardarUsuarioEvento(1);
        return redirect()->route('dashboard.admin');
    }

    /*
    |--------------------------------------------------------------------------
    | Cerrar Sesión
    |--------------------------------------------------------------------------
    */
    public function cerrarSesion()
    {
        $result = (new BitacoraUsuarioController)->guardarUsuarioEvento(2);

        auth()->logout();

        return redirect()->route('welcome');
    }

    /*
    |--------------------------------------------------------------------------
    | Registro de Usuario
    |--------------------------------------------------------------------------
    */
    public function registrarse(Request $request)
    {
        $roles = Rol::all();
        $estados = EstadoUsuario::all();

        return view('usuario.registrarse',['roles'=>$roles,'estados'=>$estados]);
    }

    public function registrarseGuardar(Request $request)
    {
        $nombres = $request->nombres;
        $apellidos = $request->apellidos;
        $correo = $request->correo;
        $idRol = 1;
        //echo substr($correo, strpos($correo,'@'));
        if (substr($correo, strpos($correo,'@'))=='@ues.edu.sv') {
            $idEstado=1;
        }else{
            $idEstado=2;
        }

        $pass=bcrypt($request->password);
        // echo $nombres.$apellidos.$correo.$idRol.$idEstado;

        $cantidad = count(User::where('email', $request->correo)->get());

        if ($cantidad==0) {
            if ($request->password==$request->password2) {
                $user = new User;
                $user->nombre_usuario = $nombres;
                $user->apellido_usuario = $apellidos;
                $user->email = $correo;
                $user->rol_id = $idRol;
                $user->estado_id = $idEstado;
                $user->password = $pass;
                $resultado=$user->save();

                if ($resultado==1) {
                    return redirect('login');
                }else{
                    echo "<script>alert('Error al guardar los cambios.');</script>";
                    $roles = Rol::all();
                    $estados = EstadoUsuario::all();

                    return view('usuario.nuevoUsuario',['roles'=>$roles,'estados'=>$estados]);
                }
            }else{
                $msj="La contraseña actual o la nueva contraseña no coinciden.";
                return back()->withErrors([
                  'mensaje' => $msj
                ]);
            }
        }else{
            // echo "<script>alert('Ya existe un usuario con el correo $correo.');</script>";
            // $roles = Rol::all();
            // $estados = EstadoUsuario::all();

            // return view('usuario.nuevoUsuario',['roles'=>$roles,'estados'=>$estados]);
            $msj="Ya existe un usuario con el correo $correo.";
                return back()->withErrors([
                  'mensaje' => $msj
                ]);
        }
    }























}
