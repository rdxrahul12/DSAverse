const bstInfo = [
    {
      title: "What is a Binary Search Tree (BST)?",
      description: "A Binary Search Tree is a node-based binary tree data structure in which each node has at most two children, and for every node: the left child's key is less than the node's key, and the right child's key is greater."
    },
    {
      title: "Syntax (C++)",
      syntax: `
  #include <iostream>
  using namespace std;
  
  struct Node {
      int key;
      Node *left, *right;
      Node(int k) : key(k), left(nullptr), right(nullptr) {}
  };
  
  Node* insert(Node* root, int key) {
      if (!root) return new Node(key);
      if (key < root->key)
          root->left = insert(root->left, key);
      else if (key > root->key)
          root->right = insert(root->right, key);
      return root;
  }
  
  bool search(Node* root, int key) {
      if (!root) return false;
      if (key == root->key) return true;
      return key < root->key ? search(root->left, key) : search(root->right, key);
  }
  
  Node* minValueNode(Node* node) {
      Node* current = node;
      while (current && current->left) current = current->left;
      return current;
  }
  
  Node* deleteNode(Node* root, int key) {
      if (!root) return root;
      if (key < root->key) root->left = deleteNode(root->left, key);
      else if (key > root->key) root->right = deleteNode(root->right, key);
      else {
          if (!root->left) {
              Node* temp = root->right;
              delete root;
              return temp;
          } else if (!root->right) {
              Node* temp = root->left;
              delete root;
              return temp;
          }
          Node* temp = minValueNode(root->right);
          root->key = temp->key;
          root->right = deleteNode(root->right, temp->key);
      }
      return root;
  }
      `
    },
    {
      title: "Time Complexities",
      complexities: [
        "Search: O(log n) average, O(n) worst-case",
        "Insertion: O(log n) average, O(n) worst-case",
        "Deletion: O(log n) average, O(n) worst-case",
        "Space: O(n)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "insert(root, key) - Insert a node",
        "search(root, key) - Find a value",
        "deleteNode(root, key) - Remove a node",
        "minValueNode(node) - Get smallest value in right subtree"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "Left subtree contains values < node",
        "Right subtree contains values > node",
        "In-order traversal yields sorted order",
        "May become unbalanced (consider AVL/Red-Black for self-balancing)"
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Sorted data storage with efficient search",
        "Database indexing",
        "Hierarchical data models",
        "Symbol tables and expression parsing"
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Use recursion wisely, especially for large trees (avoid stack overflow)",
        "Consider balancing after many insertions/deletions",
        "Ensure unique values unless duplicates are explicitly handled",
        "Use in-order traversal to verify structure"
      ]
    }
  ];
  
  // Render logic
  const container = document.getElementById('bst-info');
  bstInfo.forEach(info => {
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
  