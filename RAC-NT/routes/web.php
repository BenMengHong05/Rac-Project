<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index.index');
})->name('index.index');
Route::get('/themepark',function(){
    return view('themepark.themepark');
})->name('index.themepark');
Route::get('/waterpark',function(){
    return view('waterpark.waterpark');
})->name('index.waterpark');
Route::get('/dinnercruise',function(){
    return view('dinnercruise.dinnercruise');
})->name('index.dinnercruise');
Route::get('/news',function(){
    return view('new.news');
})->name('index.news');
Route::get('/campground',function(){
    return view('campground.campground');
})->name('index.campground');
Route::get('/ticketpasses',function(){
    return view('ticketpasses.ticketpasses');
})->name('index.ticketpasses');


// Route::middleware(['conditions'])->group(function(){
//     Route::prefix('admin')->group(function(){
//         Route::get('/','admin')->name('admin.index');
//     });
//     Route::prefix('user')->group(function(){
//         Route::get('/','user')->name('user.index');
//     });
// });
// Route::controller(Controller::class)->group(function(){
//     Route::get('/','index')->name('index.index');
// });
