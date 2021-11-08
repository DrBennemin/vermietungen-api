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

Route::view('/', 'home')
    ->name('Startseite');

// Catch all for my SPA <3
Route::get('/{any}', function() {
    return view('home');
});
// Route::middleware()->group(function () {
//     Route::view('/', 'app')->name('home');
//     Route::view('/{any}', 'app')->where('any', '.*');
// });


