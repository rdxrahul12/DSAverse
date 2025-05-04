const doublyLinkedListInfo = [
  {
    title: "What is a Doubly Linked List?",
    description: "A Doubly Linked List is a linear data structure where each node points to both its previous and next node. This allows traversal in both forward and backward directions."
  },
  {
    title: "Syntax (C++)",
    syntax: `
struct Node {
  int data;
  Node* prev;
  Node* next;

  Node(int val) {
    data = val;
    prev = nullptr;
    next = nullptr;
  }
};

// Example usage
Node* head = new Node(10);
Node* second = new Node(20);
head->next = second;
second->prev = head;
    `
  },
  {
    title: "Time Complexities",
    complexities: [
      "Access: O(n)",
      "Search: O(n)",
      "Insertion at head/tail: O(1)",
      "Deletion at head/tail: O(1)",
      "Insertion/deletion in middle: O(n)"
    ]
  },
  {
    title: "Key Operations",
    functions: [
      "insertFront(x) - Insert at beginning",
      "insertEnd(x) - Insert at end",
      "deleteFront() - Delete from beginning",
      "deleteEnd() - Delete from end",
      "forwardTraversal() - Traverse from head to tail",
      "backwardTraversal() - Traverse from tail to head",
      "insertAfter(node, x) - Insert after a specific node",
      "deleteNode(node) - Delete a specific node"
    ]
  },
  {
    title: "Important Properties",
    functions: [
      "Each node contains a data part, a pointer to the next node, and a pointer to the previous node.",
      "Allows bidirectional traversal.",
      "Requires extra memory for storing previous pointers.",
      "Efficient insertion and deletion from both ends."
    ]
  },
  {
    title: "Common Use Cases",
    useCases: [
      "Browser history (forward/backward navigation)",
      "Undo/Redo functionality in editors",
      "Implementation of LRU Cache",
      "Music/playlist navigation",
      "Deque implementation"
    ]
  },
  {
    title: "Best Practices",
    functions: [
      "Carefully update both next and prev pointers during insertion/deletion.",
      "Always check for null pointers before dereferencing.",
      "Use smart pointers in C++ to avoid memory leaks.",
      "Initialize head and tail properly to handle empty list cases."
    ]
  }
];

const container = document.getElementById('doublylinkedlist-info');
doublyLinkedListInfo.forEach(info => {
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
