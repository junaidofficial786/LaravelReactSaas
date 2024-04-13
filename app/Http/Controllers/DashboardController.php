<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsedFeatureResource;
use App\Models\UsedFeature;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $usedFeatures = UsedFeature::query()
            ->with(['feature'])
            ->where("user_id", auth()->id())
            ->latest()
            ->paginate(3)
            ->onEachSide(1);

        return inertia("Dashboard", [
            'usedFeatures' => UsedFeatureResource::collection($usedFeatures),
        ]);
    }
}
