<?php

namespace App\Models;

use App\Models\Rol;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
  protected $table='cliente';

  public function Rol(){  return $this->belongsTo('App\Models\Rol', 'rol_id'); }
}
