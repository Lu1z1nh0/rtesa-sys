<?php

namespace App\Models;

use App\Models\Orden;
use App\Models\Producto;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table='producto';

    public function Orden(){  return $this->belongsTo('App\Models\Orden', 'orden_id'); }
    public function Producto(){  return $this->belongsTo('App\Models\Producto', 'producto_id'); }
}
