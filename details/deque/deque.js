const dequeInfo = [
    {
      title: "What is a Deque?",
      description: "A Deque (Double-Ended Queue) is a linear data structure that allows insertion and deletion from both the front and rear ends. It can be used as both a queue and a stack."
    },
    {
      title: "Syntax (C++)",
      syntax: `
  #include <deque>
  std::deque<int> dq;
  
  // Insert at front
  dq.push_front(10);
  
  // Insert at back
  dq.push_back(20);
  
  // Remove from front
  dq.pop_front();
  
  // Remove from back
  dq.pop_back();
  
  // Access front and back
  int front = dq.front();
  int back = dq.back();
      `
    },
    {
      title: "Time Complexities",
      complexities: [
        "Access: O(1)",
        "Insertion at front: O(1)",
        "Insertion at back: O(1)",
        "Deletion from front: O(1)",
        "Deletion from back: O(1)",
        "Search: O(n)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "push_front(x) - Insert x at the front",
        "push_back(x) - Insert x at the back",
        "pop_front() - Remove element from front",
        "pop_back() - Remove element from back",
        "front() - Access front element",
        "back() - Access back element",
        "empty() - Check if deque is empty",
        "size() - Number of elements in deque",
        "clear() - Remove all elements"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "Supports constant time insertion and deletion from both ends.",
        "Implemented as a dynamic array of fixed-size arrays in STL.",
        "Can be used for both stack and queue operations.",
        "Efficient for sliding window problems."
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Sliding Window Maximum/Minimum problems",
        "Palindrome checking",
        "Undo/Redo functionality",
        "Scheduling problems",
        "Implementing caches (e.g., LRU Cache)"
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Prefer deque over vector when frequent front insertions/deletions are needed.",
        "Use STL’s deque to avoid manual memory handling.",
        "Avoid excessive random access; prefer front/back operations.",
        "Use clear() to deallocate memory when no longer needed."
      ]
    }
  ];
  
  const container = document.getElementById('deque-info');
  dequeInfo.forEach(info => {
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
  