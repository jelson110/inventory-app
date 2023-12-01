<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::post('/users', function() {
    return response()->json([
        'users' => [
        ],
        'message'=> 'test'
    ]);
});
Route::post('/auth', function() {
    return response()->json([
        'you' => 'fuck you',
        'message'=> 'test'
    ]);
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


