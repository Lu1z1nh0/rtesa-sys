@extends('layouts.layout')

@section('main-content')
  @include('navbars.navbar-vertical')  
  <div class="content">
    @include('navbars.navbar-combo')  
    @yield('dashboard')      
    @include('partials.footer')              
  </div>
@endsection