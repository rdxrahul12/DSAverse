const avlTreeInfo = [
    {
      title: "What is an AVL Tree?",
      description: "An AVL tree is a self-balancing Binary Search Tree (BST) where the difference between the heights of left and right subtrees cannot be more than one for all nodes. It guarantees O(log n) time complexity for insertion, deletion, and lookup."
    },
    {
      title: "Syntax (C++)",
      syntax: `
  #include <iostream>
  using namespace std;
  
  struct Node {
      int key, height;
      Node *left, *right;
  
      Node(int k) : key(k), height(1), left(nullptr), right(nullptr) {}
  };
  
  int height(Node* N) {
      return N ? N->height : 0;
  }
  
  int getBalance(Node* N) {
      return N ? height(N->left) - height(N->right) : 0;
  }
  
  Node* rightRotate(Node* y) {
      Node* x = y->left;
      Node* T2 = x->right;
      x->right = y;
      y->left = T2;
      y->height = max(height(y->left), height(y->right)) + 1;
      x->height = max(height(x->left), height(x->right)) + 1;
      return x;
  }
  
  Node* leftRotate(Node* x) {
      Node* y = x->right;
      Node* T2 = y->left;
      y->left = x;
      x->right = T2;
      x->height = max(height(x->left), height(x->right)) + 1;
      y->height = max(height(y->left), height(y->right)) + 1;
      return y;
  }
  
  Node* insert(Node* node, int key) {
      if (!node) return new Node(key);
      if (key < node->key) node->left = insert(node->left, key);
      else if (key > node->key) node->right = insert(node->right, key);
      else return node;
  
      node->height = 1 + max(height(node->left), height(node->right));
      int balance = getBalance(node);
  
      // Balancing
      if (balance > 1 && key < node->left->key) return rightRotate(node);
      if (balance < -1 && key > node->right->key) return leftRotate(node);
      if (balance > 1 && key > node->left->key) {
          node->left = leftRotate(node->left);
          return rightRotate(node);
      }
      if (balance < -1 && key < node->right->key) {
          node->right = rightRotate(node->right);
          return leftRotate(node);
      }
  
      return node;
  }
      `
    },
    {
      title: "Time Complexities",
      complexities: [
        "Search: O(log n)",
        "Insertion: O(log n)",
        "Deletion: O(log n)",
        "Space: O(n)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "insert(node, key) - Insert key maintaining balance",
        "delete(node, key) - Remove key and re-balance",
        "leftRotate(x), rightRotate(y) - Balance using rotations",
        "getBalance(node) - Calculate balance factor",
        "height(node) - Return node height"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "Height-balanced binary search tree.",
        "Balance factor must be -1, 0, or +1.",
        "Ensures O(log n) height at all times.",
        "Rotation operations keep it balanced."
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Efficient dynamic sets or maps.",
        "Databases and memory indexing.",
        "Real-time systems requiring balanced trees.",
        "Applications needing guaranteed log time operations."
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Always update node height after modifications.",
        "Check and balance every ancestor node after insertion/deletion.",
        "Avoid unnecessary rotations if already balanced.",
        "Keep base cases simple and recursive logic clean."
      ]
    }
  ];
  
  // Render logic
  const container = document.getElementById('avl-tree-info');
  avlTreeInfo.forEach(info => {
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
    container.appendChild(card);
  });
  