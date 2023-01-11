<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class IsClient
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

       if(Auth::check()){
          if(Auth::user()->rol_id==2){
            return $next($request);      
          }
        }

      return redirect('home'); //REVISAR

     }
}
