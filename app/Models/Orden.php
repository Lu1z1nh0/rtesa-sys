<?php

namespace App\Models;

use App\Models\Cliente;

use Illuminate\Database\Eloquent\Model;

class Orden extends Model
{
  protected $table='orden';

  public function Cliente(){  return $this->belongsTo('App\Models\Cliente', 'cliente_id'); }
}
