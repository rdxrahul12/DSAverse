const heapInfo = [
    {
      title: "What is a Heap?",
      description: "A Heap is a specialized tree-based data structure that satisfies the heap property. In a Max-Heap, the parent is greater than or equal to its children; in a Min-Heap, the parent is less than or equal to its children. Heaps are commonly used to implement priority queues."
    },
    {
      title: "Syntax (C++)",
      syntax: `
  // Max-Heap using STL
  #include <queue>
  std::priority_queue<int> maxHeap;
  
  // Min-Heap using STL
  std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
  
  // Custom comparator
  struct Compare {
    bool operator()(int a, int b) {
      return a > b; // Min-Heap
    }
  };
  std::priority_queue<int, std::vector<int>, Compare> customHeap;
      `
    },
    {
      title: "Time Complexities",
      complexities: [
        "Insertion: O(log n)",
        "Get Min/Max: O(1)",
        "Delete Min/Max: O(log n)",
        "Build Heap: O(n)",
        "Heap Sort: O(n log n)",
        "Search (unsorted): O(n)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "push(x) - Insert element into heap",
        "top() - Access the root element (min or max)",
        "pop() - Remove the root element",
        "make_heap() - Convert a range into a heap",
        "push_heap() - Push new element into heap",
        "pop_heap() - Pop root and move to end of range",
        "sort_heap() - Sort the heap range in ascending order"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "A heap is always a complete binary tree.",
        "Implemented using arrays (0- or 1-based indexing).",
        "Parent of i = (i-1)/2, Left child = 2*i+1, Right child = 2*i+2 (0-based)",
        "Heap only guarantees max/min at root, not full sorting.",
        "Heapify is used to maintain the heap property after modifications."
      ]
    },
    {
      title: "Heap Variants",
      functions: [
        "Binary Heap - Most common (Min/Max)",
        "Fibonacci Heap - Faster amortized operations, used in advanced graph algorithms",
        "Binomial Heap - Useful in functional programming contexts",
        "Pairing Heap - Good for practical implementations of meldable heaps",
        "D-ary Heap - Like binary heap but with D children per node (e.g., Ternary Heap)"
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Priority queues (e.g., task scheduling, bandwidth management)",
        "Dijkstra's shortest path algorithm",
        "Heap Sort",
        "Median Maintenance (two heaps)",
        "Top K elements problems",
        "Real-time streaming statistics",
        "Event-driven simulations"
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Use STL priority_queue for ease of use and performance.",
        "Use a Min-Heap for smallest elements, Max-Heap for largest.",
        "Use custom comparators for heap of objects or specific rules.",
        "Avoid unnecessary re-heapification in large loops.",
        "Reserve memory for performance if heap size is known in advance.",
        "For sorting: use make_heap, push_heap, pop_heap, and sort_heap for full control."
      ]
    }
  ];
  
  const container = document.getElementById('heap-info');
  heapInfo.forEach(info => {
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
  