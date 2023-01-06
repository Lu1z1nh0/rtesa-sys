<?php

namespace App\Models;

use App\Models\Rol;


use Illuminate\Database\Eloquent\Model;

class Permiso extends Model
{
  protected $table='permiso';

  public function Rol(){  return $this->belongsTo('App\Models\Rol', 'rol_id'); }
}
