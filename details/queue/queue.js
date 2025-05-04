const queueInfo = [
  {
    title: "What is a Queue?",
    description: "A Queue is a linear data structure that follows the First In First Out (FIFO) principle, where elements are inserted at the rear (back) and removed from the front. It is used in situations where order matters, like task scheduling and buffering."
  },
  {
    title: "Syntax (C++)",
    syntax: `
// Using STL queue
#include <queue>
std::queue<int> q;

// Insertion (enqueue)
q.push(10);

// Removal (dequeue)
q.pop();

// Access front element
int front = q.front();

// Check if empty
if (q.empty()) {
  // Queue is empty
}

// Get size
int size = q.size();
    `
  },
  {
    title: "Time Complexities",
    complexities: [
      "Enqueue (push): O(1)",
      "Dequeue (pop): O(1)",
      "Access front/back: O(1)",
      "Search: O(n)",
      "Size/Empty: O(1)"
    ]
  },
  {
    title: "Key Operations",
    functions: [
      "push(x) - Add element to the rear",
      "pop() - Remove element from the front",
      "front() - Access the front element",
      "back() - Access the last element",
      "empty() - Check if queue is empty",
      "size() - Return the number of elements"
    ]
  },
  {
    title: "Important Properties",
    functions: [
      "Follows FIFO: first inserted, first removed.",
      "Insertion happens at the back, removal at the front.",
      "STL queue is built on deque by default.",
      "No iteration or random access support directly in STL queue.",
      "Can be implemented using arrays, linked lists, or deques."
    ]
  },
  {
    title: "Variants",
    functions: [
      "Circular Queue - Connects rear to front, avoids wasted space.",
      "Priority Queue - Orders by priority instead of insertion.",
      "Double-Ended Queue (Deque) - Allows insert/delete from both ends.",
      "Blocking Queue - Used in concurrency/multithreading.",
      "Queue of Queues - Hierarchical queueing for complex scheduling."
    ]
  },
  {
    title: "Common Use Cases",
    useCases: [
      "Job/task scheduling in OS",
      "Breadth-First Search (BFS) in graphs",
      "Print queues, CPU scheduling",
      "Call center systems (first-come-first-serve)",
      "Buffering and streaming data",
      "Simulation of checkout lines"
    ]
  },
  {
    title: "Best Practices",
    functions: [
      "Use STL queue unless specific behavior (e.g., priority) is needed.",
      "Use circular queue to optimize space in fixed-size scenarios.",
      "Clear queue before reuse if reused multiple times.",
      "Use queue with custom structs using `std::pair`, `std::tuple` if needed.",
      "Don't use queue for random-access or direct searching."
    ]
  }
];

const container = document.getElementById('queue-info');
queueInfo.forEach(info => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.width = '100%';
  card.style.marginBottom = '2rem';

  let html = `<div class="card-title" style="font-size:1.3rem;">${info.title}</div>`;

  if (info.description) html += `<div class="card-desc">${info.description}</div>`;
  if (info.syntax) html += `<pre class="card-desc" style="">${info.syntax}</pre>`;
  if (info.complexities) html += `<ul class="card-desc">${info.complexities.map(c => `<li>${c}</li>`).join('')}</ul>`;
  if (info.functions) html += `<ul class="card-desc">${info.functions.map(f => `<li>${f}</li>`).join('')}</ul>`;
  if (info.useCases) html += `<ul class="card-desc">${info.useCases.map(u => `<li>${u}</li>`).join('')}</ul>`;

  card.innerHTML = html;
  container.appendChild(card);
});
