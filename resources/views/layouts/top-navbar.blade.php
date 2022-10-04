@extends('layouts.layout')

@section('main-content')
  @include('navbars.navbar-top-menu')
  <div class="content">
      @yield('dashboard')          
      @include('partials.footer')              
  </div>
@endsection