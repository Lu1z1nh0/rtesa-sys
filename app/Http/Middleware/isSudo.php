<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class isSudo
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
          if(Auth::user()->rol_id==3){
                return $next($request); 
          }
        }
      return redirect('home'); //REVISAR
     }
}
