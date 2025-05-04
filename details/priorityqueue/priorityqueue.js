const priorityQueueInfo = [
    {
      title: "What is a Priority Queue?",
      description: "A Priority Queue is an abstract data structure similar to a regular queue or stack, but where each element is associated with a priority. Elements are dequeued in order of their priority — highest (or lowest) first, not necessarily the order in which they were inserted."
    },
    {
      title: "Syntax (C++)",
      syntax: `
  // Max-Heap (default)
  #include <queue>
  std::priority_queue<int> pq;
  
  // Min-Heap
  std::priority_queue<int, std::vector<int>, std::greater<int>> minPQ;
  
  // Custom Comparator
  struct Compare {
    bool operator()(const pair<int, int>& a, const pair<int, int>& b) {
      return a.second > b.second; // Min-Heap by second value
    }
  };
  std::priority_queue<pair<int, int>, std::vector<pair<int, int>>, Compare> customPQ;
      `
    },
    {
      title: "Time Complexities",
      complexities: [
        "Insertion (push): O(log n)",
        "Access Top (top): O(1)",
        "Remove Top (pop): O(log n)",
        "Size / Empty / Clear: O(1)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "push(x) - Insert element into queue based on priority",
        "top() - Access the highest priority element",
        "pop() - Remove the highest priority element",
        "empty() - Check if queue is empty",
        "size() - Number of elements in queue"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "Internally implemented as a binary heap.",
        "STL `priority_queue` is a Max-Heap by default.",
        "Min-Heap and custom comparators require explicit declaration.",
        "Elements are ordered dynamically based on priority, not insertion order.",
        "Does not allow random access to internal elements."
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Dijkstra's shortest path algorithm",
        "A* search algorithm (pathfinding)",
        "Task/job scheduling by priority",
        "Event-driven simulation systems",
        "Bandwidth and resource allocation",
        "Top K elements problems",
        "Huffman encoding"
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Use Min-Heap when lowest values are preferred as highest priority.",
        "Define custom comparators carefully (operator overloading or lambda).",
        "Reserve space if number of elements is known in advance.",
        "Avoid unnecessary push/pop inside loops to reduce overhead.",
        "Use make_heap and other heap STL algorithms for non-STL containers."
      ]
    }
  ];
  
  const container = document.getElementById('priorityqueue-info');
  priorityQueueInfo.forEach(info => {
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
  