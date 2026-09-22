/**
 * Practical Example 04: Todo App Controller
 * Features:
 *  - Persistent CRUD state using localStorage
 *  - Event delegation for toggling & deletion
 *  - Filtering (All, Active, Completed)
 *  - Dynamic counters
 */

'use strict';

const STORAGE_KEY = 'webdev_course_todos';

// State
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  { id: 1, text: "Learn HTML5 semantic landmarks", completed: true },
  { id: 2, text: "Master CSS Flexbox & CSS Grid", completed: true },
  { id: 3, text: "Build Vanilla JavaScript DOM project", completed: false }
];

let currentFilter = 'all';

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const itemsLeftSpan = document.getElementById('items-left');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const clearAllBtn = document.getElementById('clear-all-btn');

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = '';

  const filtered = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true; // 'all'
  });

  if (filtered.length === 0) {
    todoList.innerHTML = `<li style="text-align:center; color:#94a3b8; padding:1.5rem 0;">No tasks in this view</li>`;
  } else {
    filtered.forEach(todo => {
      const li = document.createElement('li');
      li.className = `todo-item ${todo.completed ? 'is-completed' : ''}`;
      li.setAttribute('data-id', todo.id);

      li.innerHTML = `
        <div class="todo-left">
          <input 
            type="checkbox" 
            class="todo-checkbox" 
            ${todo.completed ? 'checked' : ''} 
            aria-label="Mark '${todo.text}' as completed"
          />
          <span class="todo-text">${escapeHtml(todo.text)}</span>
        </div>
        <button class="delete-btn" aria-label="Delete '${todo.text}'">&times;</button>
      `;

      todoList.appendChild(li);
    });
  }

  // Update counter
  const activeCount = todos.filter(t => !t.completed).length;
  itemsLeftSpan.textContent = `${activeCount} task${activeCount === 1 ? '' : 's'} pending`;
}

// Escape HTML utility to prevent XSS injection
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Add New Todo
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  };

  todos.unshift(newTodo);
  saveToLocalStorage();
  renderTodos();

  todoInput.value = '';
});

// Event Delegation for Checkbox Toggling & Deletion
todoList.addEventListener('click', (e) => {
  const itemElement = e.target.closest('.todo-item');
  if (!itemElement) return;

  const id = Number(itemElement.getAttribute('data-id'));

  // Toggle Completed
  if (e.target.classList.contains('todo-checkbox')) {
    todos = todos.map(t => t.id === id ? { ...t, completed: e.target.checked } : t);
    saveToLocalStorage();
    renderTodos();
  }

  // Delete Item
  if (e.target.classList.contains('delete-btn')) {
    todos = todos.filter(t => t.id !== id);
    saveToLocalStorage();
    renderTodos();
  }
});

// Filter Tabs
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    renderTodos();
  });
});

// Clear Completed
clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter(t => !t.completed);
  saveToLocalStorage();
  renderTodos();
});

// Reset All
clearAllBtn.addEventListener('click', () => {
  if (confirm("Reset and delete all tasks?")) {
    todos = [];
    saveToLocalStorage();
    renderTodos();
  }
});

// Initial Render
renderTodos();
