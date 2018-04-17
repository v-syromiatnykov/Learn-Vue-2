@if (count($projects))
    <h1 class="title is-3">My Projects</h1>

    <ul>
        @foreach ($projects as $project)
            <li>
                <a href="#">{{ $project->name }}</a>
                <p><em>{{ $project->description }}</em></p>
            </li>
        @endforeach
    </ul>

    <hr>
@endif