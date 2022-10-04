@extends('layouts.layout')

@section('main-content')
  @include('navbars.navbar-vertical')
  <div class="content">
      @include('navbars.navber-top-default')
      @yield('dashboard')         
      @include('partials.footer')              
  </div>
@endsection