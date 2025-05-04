const circularLinkedListInfo = [
  {
    title: "What is a Circular Linked List?",
    description:
      "A Circular Linked List is a variation of a linked list where the last node's next pointer points back to the first node, forming a loop. It can be singly or doubly linked and is useful when cyclic traversal is required."
  },
  {
    title: "Syntax (C++)",
    syntax: `
Singly Circular Linked List
struct Node {
    int data;
    Node* next;
};
Node* head = nullptr;

// Insert example
void insertAtEnd(Node*& head, int value) {
    Node* newNode = new Node{value, nullptr};
    if (!head) {
        head = newNode;
        newNode->next = head;
        return;
    }
    Node* temp = head;
    while (temp->next != head) temp = temp->next;
    temp->next = newNode;
    newNode->next = head;
}

Doubly Circular Linked List
struct DNode {
    int data;
    DNode* next;
    DNode* prev;
};
DNode* head = nullptr;
    `
  },
  {
    title: "Time Complexities",
    complexities: [
      "Access: O(n)",
      "Search: O(n)",
      "Insertion at Head: O(1)",
      "Insertion at Tail: O(n) (O(1) if tail pointer is maintained)",
      "Deletion at Head: O(1)",
      "Deletion at Tail: O(n)",
    ]
  },
  {
    title: "Key Operations",
    functions: [
      "Insert at head: Adds a node and points new node's next to head; update tail to point to new head.",
      "Insert at tail: Traverse to tail, insert node, point it to head.",
      "Delete at head: Point tail's next to head->next and delete head.",
      "Delete at tail: Traverse to second-last node, update its next to head.",
      "Traverse: Use a do-while loop to print or process nodes until back to head.",
      "Search: Loop through nodes comparing values until found or back at head."
    ]
  },
  {
    title: "Important Properties",
    functions: [
      "The last node points back to the first node, making traversal circular.",
      "Traversal should be done with care to avoid infinite loops.",
      "Useful when the entire list needs to be repeatedly cycled through.",
      "Circular structure makes it efficient for round-robin implementations."
    ]
  },
  {
    title: "Common Use Cases",
    useCases: [
      "Round-robin schedulers (CPU time sharing).",
      "Music or image carousels (looped playback).",
      "Gaming (turn-based systems).",
      "Circular buffers or queues.",
      "Token passing in network topologies like rings."
    ]
  },
  {
    title: "Best Practices",
    functions: [
      "Always check for null pointers when inserting or deleting.",
      "Use a tail pointer to optimize insertions and deletions at the end.",
      "Use a do-while loop for traversal to ensure the head is processed correctly.",
      "Ensure proper memory management using delete to avoid leaks.",
      "For doubly circular lists, update both next and prev pointers carefully."
    ]
  }
];
const circularLinkedListInfoSection = document.getElementById('circularlinkedlist-info');
circularLinkedListInfo.forEach(info => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.width = '100%';
  card.style.marginBottom = '2rem';

  let html = `<div class="card-title" style="font-size:1.3rem;">${info.title}</div>`;

  if (info.description) html += `<div class="card-desc">${info.description}</div>`;
  if (info.syntax) html += `<pre class="card-desc">${info.syntax}</pre>`;
  if (info.complexities) html += `<ul class="card-desc">${info.complexities.map(c => `<li>${c}</li>`).join('')}</ul>`;
  if (info.functions) html += `<ul class="card-desc">${info.functions.map(f => `<li>${f}</li>`).join('')}</ul>`;
  if (info.useCases) html += `<ul class="card-desc">${info.useCases.map(u => `<li>${u}</li>`).join('')}</ul>`;

  card.innerHTML = html;
  circularLinkedListInfoSection.appendChild(card);
});
