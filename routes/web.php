<?php

use App\Http\Controllers\CreditController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Feature1Controller;
use App\Http\Controllers\Feature2Controller;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Routing\Events\Routing;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class,'index'])->name('home');

Route::post('/buy-credits/webhook', [CreditController::class, 'webhook'])->name('credit.webhook');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::controller(Feature1Controller::class)->group( function () {
        Route::get('/feature1', 'index')->name('feature1.index');
        Route::post('/feature1', 'calculate')->name('feature1.calculate');
    });

    Route::controller(Feature2Controller::class)->group( function () {
        Route::get('/feature2', 'index')->name('feature2.index');
        Route::post('/feature2', 'calculate')->name('feature2.calculate');
    });

    // Credits related routes here 
    Route::get('/buy-credits', [CreditController::class,'index'])->name('credit.index');
    Route::get('/buy-credits/success', [CreditController::class,'success'])->name('credit.success');
    Route::get('/buy-credits/cancel', [CreditController::class,'cancel'])->name('credit.cancel');
    Route::post('/buy-credits/{package}', [CreditController::class,'buyCredits'])->name('credit.buy');
});

require __DIR__ . '/auth.php';
