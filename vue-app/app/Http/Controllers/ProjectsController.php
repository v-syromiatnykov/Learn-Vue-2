<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    /**
     * Show the page to create a new project.
     */
    public function create()
    {
        return view('projects.create', [
            'projects' => Project::all()
        ]);
    }
    /**
     * Store a new project in the database.
     */
    public function store()
    {
        request()->validate([
            'name' => 'required',
            "description" => 'required'
        ]);

        Project::forceCreate([
            'name' => request('name'),
            'description' => request('description')
        ]);

        return ['message' => 'Project Created!'];
    }
}
