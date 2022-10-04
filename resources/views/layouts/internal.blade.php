@extends('layouts.layout-client')

@section('main-content')
  @include('navbars.navbar-client')
      @yield('home')          
      @include('partials.footer-client')              
@endsection