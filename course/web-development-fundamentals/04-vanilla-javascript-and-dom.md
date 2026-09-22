# Web Dev Fundamentals: Module 4 - Vanilla JavaScript (ES6+) & DOM Interactivity

JavaScript is the programming language that powers interactivity, data handling, and dynamic behavior across the modern web.

---

## 1. JavaScript Engine & Runtime

JavaScript runs in a single-threaded runtime engine (like V8 in Chrome/Node). It executes synchronous code on a **Call Stack** and coordinates asynchronous callbacks using the **Event Loop** and **Task Queues**.

### Primitives vs. Reference Types
- **Primitives** (Stored by value on the stack): `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- **Reference Types** (Stored by reference on the heap): `Object`, `Array`, `Function`, `Date`.

```javascript
// Primitives: Copies the value
let a = 10;
let b = a;
b = 20; // 'a' is still 10

// Reference: Copies the memory address
const original = { title: "Web Dev" };
const copy = original;
copy.title = "Advanced Web Dev"; // 'original.title' also changed!
```

---

## 2. Modern ES6+ Features

```javascript
// 1. Block scoping: Always prefer 'const', use 'let' only when reassigning
const courseName = "Web Fundamentals";
let score = 95;

// 2. Arrow Functions
const calculateAverage = (a, b) => (a + b) / 2;

// 3. Template Literals
console.log(`Welcome to ${courseName}. Your grade: ${score}%`);

// 4. Object & Array Destructuring
const student = { name: "Alice", role: "Frontend Dev", cohort: 2026 };
const { name, role } = student;

// 5. Spread and Rest Operators
const baseSkills = ["HTML", "CSS"];
const fullStack = [...baseSkills, "JavaScript", "Node.js"];

// 6. Optional Chaining (?.) & Nullish Coalescing (??)
const userAddress = student.profile?.address?.city ?? "Default City";
```

---

## 3. Essential Array Methods

Never use manual `for` loops when modern declarative array methods are available:

```javascript
const assignments = [
  { title: "HTML Form", grade: 98, completed: true },
  { title: "CSS Flexbox", grade: 85, completed: true },
  { title: "JS Quiz", grade: 72, completed: false }
];

// 1. Filter: extract matching subset
const finished = assignments.filter(item => item.completed);

// 2. Map: transform each element into a new shape
const assignmentNames = assignments.map(item => item.title.toUpperCase());

// 3. Reduce: compute a single cumulative value
const totalScore = assignments.reduce((acc, curr) => acc + curr.grade, 0);
const averageGrade = totalScore / assignments.length;
```

---

## 4. DOM Manipulation: The Core APIs

The Document Object Model (DOM) is an object-oriented tree representation of the HTML document.

### Selecting Elements
```javascript
// Single element by CSS selector
const submitBtn = document.querySelector('#submit-btn');

// NodeList of multiple elements
const navLinks = document.querySelectorAll('.nav-link');
```

### Modifying Content & Classes
```javascript
const heading = document.querySelector('.hero-title');

// Safe text insertion (prevents XSS vulnerabilities)
heading.textContent = "Welcome New Developers!";

// Manipulating classes
heading.classList.add('highlight');
heading.classList.remove('dim');
heading.classList.toggle('active');
```

### Dynamic Element Creation
```javascript
function createCard(title, description) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
  `;
  document.querySelector('#projects-container').appendChild(card);
}
```

---

## 5. Event Handling & Event Delegation

### Standard Event Listener
```javascript
const themeButton = document.getElementById('theme-toggle');

themeButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.toggle('dark-mode');
});
```

### Event Delegation Pattern
Instead of adding 100 event listeners to 100 individual buttons, add **one listener** to their shared parent container and inspect `event.target`:

```javascript
const projectContainer = document.getElementById('projects-container');

projectContainer.addEventListener('click', (event) => {
  // Check if clicked element or its parent matches the delete button
  const deleteBtn = event.target.closest('.delete-btn');
  if (deleteBtn) {
    const card = deleteBtn.closest('.project-card');
    card.remove();
  }
});
```

---

## 6. Asynchronous JavaScript: Fetch & Async/Await

Modern web applications communicate with servers via asynchronous HTTP requests:

```javascript
async function loadCourseData() {
  const statusElement = document.getElementById('status');
  statusElement.textContent = "Loading curriculum...";

  try {
    const response = await fetch('https://api.example.com/curriculum');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Curriculum retrieved:", data);
    statusElement.textContent = "Curriculum loaded successfully!";
  } catch (error) {
    console.error("Failed to fetch curriculum:", error);
    statusElement.textContent = "Error loading data. Please try again.";
  }
}
```

---

## 7. Client-Side Web Storage (`localStorage`)

Persist key-value strings in the browser across page reloads:

```javascript
// Saving complex objects via JSON serialization
const userPreferences = { theme: 'dark', fontSize: '16px' };
localStorage.setItem('user-prefs', JSON.stringify(userPreferences));

// Retrieving and deserializing
const storedData = localStorage.getItem('user-prefs');
if (storedData) {
  const parsedPrefs = JSON.parse(storedData);
  console.log("User theme is:", parsedPrefs.theme);
}
```
