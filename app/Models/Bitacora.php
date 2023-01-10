<?php

namespace App\Models;

use App\Models\Evento;
use App\Models\Administrador;
use App\Models\Cliente;

use Illuminate\Database\Eloquent\Model;

class Bitacora extends Model
{
    protected $table='bitacora';

    public function Evento(){  return $this->belongsTo('App\Models\Evento', 'evento_id'); }
    public function Administrador(){  return $this->belongsTo('App\Models\Administrador', 'administrador_id'); }
    public function Cliente(){  return $this->belongsTo('App\Models\Cliente', 'cliente_id'); }
}
