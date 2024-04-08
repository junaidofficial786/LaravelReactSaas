<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function creating(User $user): void 
    {
        $user->available_credits = 10;
    }
}
