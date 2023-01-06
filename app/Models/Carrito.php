<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Carrito extends Model
{
    protected $table='carrito';

    public function Cliente(){  return $this->belongsTo('App\Models\Cliente', 'cliente_id'); }
}
