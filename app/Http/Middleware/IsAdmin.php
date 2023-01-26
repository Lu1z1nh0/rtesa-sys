<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Rol;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        if(auth()->check()){
            if(auth()->user()->rol_id == 1 || auth()->user()->rol_id == 3) {
                return $next($request);
            }
        }
        return redirect()->to('/');
    }




        /*
        return redirect()->to('/');
        $token = $request->token;

        $User= User::where('remember_token','=',$token)->first();

        if ($User->rol_id==1)
            {
                    return response()->json(['flag' => false,'mensaje' => 'No tiene permisos para realizar esta acción', 'codigo' => 201],201);
            };

        return $next($request);
        */


}




        


