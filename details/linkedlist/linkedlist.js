const linkedListInfo = [
  {
    title: "What is a Linked List?",
    description: "A Linked List is a linear data structure in which elements (nodes) are stored in non-contiguous memory locations. Each node contains data and a reference (or pointer) to the next node. It enables efficient insertion and deletion without reallocating or reorganizing the entire structure."
  },
  {
    title: "Syntax (C++)",
    syntax: `
struct Node {
  int data;
  Node* next;

  Node(int val) {
    data = val;
    next = nullptr;
  }
};

// Example usage
Node* head = new Node(1);
head->next = new Node(2);
    `
  },
  {
    title: "Time Complexities",
    complexities: [
      "Access by Index: O(n)",
      "Search: O(n)",
      "Insert at Head: O(1)",
      "Insert at Tail: O(n) or O(1) with tail pointer",
      "Insert at Middle: O(n)",
      "Delete from Head: O(1)",
      "Delete from Tail: O(n)",
      "Delete from Middle: O(n)"
    ]
  },
  {
    title: "Key Operations",
    functions: [
      "insertAtHead(x) - Insert node at the beginning",
      "insertAtTail(x) - Insert node at the end",
      "insertAfter(node, x) - Insert after a given node",
      "deleteHead() - Remove the first node",
      "deleteTail() - Remove the last node",
      "deleteNode(x) - Delete a specific node by value",
      "search(x) - Find node with given value",
      "traverse() - Print all elements"
    ]
  },
  {
    title: "Important Properties",
    functions: [
      "Nodes are stored in scattered memory locations.",
      "Each node stores data and a pointer to the next node.",
      "Can grow dynamically — no predefined size needed.",
      "No random access; must traverse sequentially.",
      "Saves space compared to arrays when frequent insertions/deletions occur."
    ]
  },
  {
    title: "Variants",
    functions: [
      "Singly Linked List - One pointer per node (next).",
      "Doubly Linked List - Two pointers per node (prev, next).",
      "Circular Linked List - Last node points to the head.",
      "Circular Doubly Linked List - Bi-directional, circular traversal."
    ]
  },
  {
    title: "Common Use Cases",
    useCases: [
      "Implementing stacks, queues, and hash chains",
      "Undo/Redo functionality in applications",
      "Navigation (e.g., browser history)",
      "Dynamic memory allocation and garbage collection",
      "Efficient insert/delete in music/playlist apps"
    ]
  },
  {
    title: "Best Practices",
    functions: [
      "Always check for null pointers when traversing.",
      "Maintain a tail pointer if frequent tail insertion is required.",
      "Free memory of deleted nodes to avoid memory leaks.",
      "Use smart pointers in modern C++ for safety.",
      "Consider arrays or vectors for frequent indexed access."
    ]
  }
];

const container = document.getElementById('linkedlist-info');
linkedListInfo.forEach(info => {
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
