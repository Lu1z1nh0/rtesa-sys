<?php
namespace App\Http\Middleware;

use Closure;
use App\Models\User;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token= $request->token;

        $User= User::where('remember_token','=',$token)->first();

        if ($User->rol_id==1)
            {
                    return response()->json(['flag' => false,'mensaje' => 'No tiene permisos para realizar esta acción', 'codigo' => 201],201);
            };

        return $next($request);
    }
}
