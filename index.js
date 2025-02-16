import './index.css';

import Alpine from 'alpinejs';
import AutoAnimate from '@marcreichel/alpine-auto-animate';

function app() {
    return {
        todos: [],
        newTodo: '',
        addTodo() {
            if (this.newTodo.trim() === '') return;
            this.todos.push({
                id: Date.now(),
                text: this.newTodo,
                completed: false,
            });
            this.newTodo = '';
        },
        removeTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
    };
}

window.app = app; // Ensure app is globally accessible

window.Alpine = Alpine;
Alpine.plugin(AutoAnimate);
Alpine.start();
