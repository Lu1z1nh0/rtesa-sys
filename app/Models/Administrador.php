<?php

namespace App\Models;

use App\Models\Rol;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
  protected $table='administrador';

  public function Rol(){  return $this->belongsTo('App\Models\Rol', 'rol_id'); }
}
