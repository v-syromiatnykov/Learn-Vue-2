Vue.component('task-list', {
    template: `
    <ul>
        <task v-for="task in tasks" :key="task.id">{{ task.description }}</task>
    </ul>
    `,

    data() {
        return {
            tasks: [
                { description: 'Task 1', completed: true },
                { description: 'Task 2', completed: false },
                { description: 'Task 3', completed: true },
                { description: 'Task 4', completed: false },
                { description: 'Task 5', completed: false },
                { description: 'Task 6', completed: true }
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});