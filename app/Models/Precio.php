<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Precio extends Model
{
    protected $table='precio';

    public function PrecioDetalle(){ return $this->hasOne('App\Models\PrecioDetalle', 'precio_id', 'id');}
}
