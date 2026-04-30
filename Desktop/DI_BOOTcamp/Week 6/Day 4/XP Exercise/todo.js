// todo.js
export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            id: Date.now(),
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        });
        console.log(`✅ Task added: "${task}"`);
    }

    markComplete(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            console.log(`✅ Task completed: "${task.task}"`);
        }
    }

    listTasks() {
        console.log("\n📋 === MY TODO LIST ===\n");
        if (this.tasks.length === 0) {
            console.log("No tasks yet.");
            return;
        }
        this.tasks.forEach(t => {
            console.log(`[${t.completed ? '✓' : ' '}] ${t.task} (${t.date})`);
        });
    }
}