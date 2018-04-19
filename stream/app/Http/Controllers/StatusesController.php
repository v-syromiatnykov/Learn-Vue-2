<?php

namespace App\Http\Controllers;

use App\Status;
use App\User;
use Illuminate\Http\Request;

class StatusesController extends Controller
{
    public function index()
    {
        return Status::with('user')->latest()->get();
    }

    public function store(Request $request)
    {
        $request->validate(['body' => 'required']);

        $status = User::find(1)->statuses()->create($request->only(['body']));

        return $status->load('user');
    }
}
