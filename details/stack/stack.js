const stackinfo = [
  {
    title: "What is a Stack?",
    description: "A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. The last element inserted is the first one to be removed. Stacks are used in various applications including function call management, expression parsing, and undo mechanisms in editors."
  },
  {
    title: "Properties of a Stack",
    properties: [
      "Follows the LIFO (Last In, First Out) principle.",
      "Insertion and deletion take place from one end only (top of the stack).",
      "Stack operations are generally limited to a few standard methods: push, pop, peek/top, and isEmpty.",
      "It can be implemented using arrays or linked lists.",
      "Stacks are simple but very powerful in recursive or backtracking scenarios."
    ]
  },
  {
    title: "Time Complexities",
    complexities: [
      "Push: O(1) - Inserting an element at the top takes constant time.",
      "Pop: O(1) - Removing the top element also takes constant time.",
      "Peek/Top: O(1) - Accessing the top element does not require traversal.",
      "isEmpty: O(1) - Checking if the stack is empty is a constant-time operation."
    ]
  },
  {
    title: "Key Operations",
    functions: [
      "push(x) - Adds the element x to the top of the stack.",
      "pop() - Removes and returns the top element of the stack. Throws an error if the stack is empty.",
      "peek()/top() - Returns the top element without removing it.",
      "isEmpty() - Returns true if the stack has no elements.",
      "size() - Returns the number of elements currently in the stack."
    ]
  },
  {
    title: "Use Cases of Stack",
    useCases: [
      "Function call management (call stack).",
      "Expression evaluation and syntax parsing (e.g., infix to postfix conversion).",
      "Undo/Redo features in editors.",
      "Backtracking algorithms (e.g., maze solving, recursion).",
      "Parentheses matching and delimiter checking in compilers.",
      "Depth-First Search (DFS) in graph algorithms."
    ]
  },
  {
    title: "Best Practices",
    functions: [
      "Use STL stack (in C++) or built-in stack implementations in other languages for safe and optimized operations.",
      "Always check for underflow (popping from an empty stack) to avoid runtime errors.",
      "Avoid excessive memory usage by popping unused elements when done.",
      "Consider using linked list implementation if frequent dynamic resizing is needed without reallocation."
    ]
  },
  {
    title: "Stack Implementation Example (C++)",
    syntax: 
`#include <stack>
std::stack<int> s;

s.push(10);      // Push 10 to stack
s.push(20);
s.pop();         // Removes 20
int top = s.top(); // Access top element (10)
bool empty = s.empty(); // Check if stack is empty`
  },
  {
    title: "Stack Implementation (Using Array - JavaScript)",
    syntax: 
`class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack Underflow");
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}`
  }
];

// Rendering logic for Stack
const container = document.getElementById('stackinfo');
stackinfo.forEach(info => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.width = '100%';
  card.style.marginBottom = '2rem';

  let html = `<div class="card-title" style="font-size:1.3rem;">${info.title}</div>`;

  if (info.description) html += `<div class="card-desc">${info.description}</div>`;
  if (info.properties) html += `<ul class="card-desc">${info.properties.map(p => `<li>${p}</li>`).join('')}</ul>`;
  if (info.complexities) html += `<ul class="card-desc">${info.complexities.map(c => `<li>${c}</li>`).join('')}</ul>`;
  if (info.functions) html += `<ul class="card-desc">${info.functions.map(f => `<li>${f}</li>`).join('')}</ul>`;
  if (info.useCases) html += `<ul class="card-desc">${info.useCases.map(u => `<li>${u}</li>`).join('')}</ul>`;
  if (info.syntax) html += `<pre class="card-desc">${info.syntax}</pre>`;

  card.innerHTML = html;
  container.appendChild(card);
});
