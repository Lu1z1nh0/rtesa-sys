<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    protected $table='rol';

    public function usuarios(){ return $this->hasMany('App\Models\User'); }
}
