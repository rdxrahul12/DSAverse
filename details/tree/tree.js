const treeinfo = [
  {
    title: "What is a Tree (in Data Structures)?",
    description: "A Tree is a hierarchical data structure consisting of nodes, with a unique root node and subtrees of children with a parent node. It is a non-linear data structure used to represent data with a parent-child relationship. Trees are widely used in organizing data, file systems, parsers, and various algorithms."
  },
  {
    title: "Basic Terminology",
    properties: [
      "Root: The topmost node in a tree.",
      "Child: A node that descends from another node.",
      "Parent: The node from which a child node descends.",
      "Leaf: A node with no children.",
      "Internal Node: A node with at least one child.",
      "Subtree: A tree formed by a node and its descendants.",
      "Height: The length of the longest path from the root to a leaf.",
      "Depth: The length of the path from the root to a specific node."
    ]
  },
  {
    title: "Types of Trees",
    functions: [
      "Binary Tree - Each node has at most two children (left and right).",
      "Binary Search Tree (BST) - A binary tree with left < root < right property.",
      "Balanced Trees - Trees like AVL and Red-Black Tree keep height balanced.",
      "Full Binary Tree - Every node has 0 or 2 children.",
      "Complete Binary Tree - All levels are completely filled except possibly the last.",
      "Perfect Binary Tree - All internal nodes have two children and all leaves are at the same level.",
      "N-ary Tree - A tree where nodes can have at most N children.",
      "Trie (Prefix Tree) - Specialized tree used for string retrieval.",
      "Segment Tree - Tree data structure used for range queries."
    ]
  },
  {
    title: "Time Complexities (for Binary Search Tree)",
    complexities: [
      "Search: O(h) where h is the height of the tree (O(log n) for balanced BST).",
      "Insertion: O(h) - Inserts a node while maintaining BST properties.",
      "Deletion: O(h) - Removes a node and rebalances if necessary.",
      "Traversal (Inorder, Preorder, Postorder): O(n) - All nodes are visited."
    ]
  },
  {
    title: "Key Operations",
    functions: [
      "insert(value) - Inserts a new node into the tree.",
      "delete(value) - Removes a node from the tree.",
      "search(value) - Finds a node with the given value.",
      "traverseInOrder() - Traverses the tree in LNR order.",
      "traversePreOrder() - Traverses in NLR order.",
      "traversePostOrder() - Traverses in LRN order.",
      "findMin()/findMax() - Retrieves the minimum or maximum value.",
      "getHeight() - Returns the height of the tree."
    ]
  },
  {
    title: "Common Use Cases",
    useCases: [
      "Hierarchical data representation (organization charts, XML/HTML DOM).",
      "Binary Search Trees for efficient searching and sorting.",
      "Tries for autocomplete and dictionary word storage.",
      "Expression trees in compilers.",
      "File system and directory structure representation.",
      "AI game engines (e.g., minimax trees).",
      "Network routing protocols and data compression."
    ]
  },
  {
    title: "Best Practices",
    functions: [
      "Use self-balancing trees like AVL or Red-Black Tree to maintain efficiency.",
      "Avoid unbalanced growth in BSTs to prevent degeneration into linked lists.",
      "Choose the tree type based on application needs (Trie for strings, Segment Tree for range queries).",
      "Visualize or log traversals to debug tree logic.",
      "Always test with edge cases like empty trees, skewed trees, and duplicates."
    ]
  },
  {
    title: "Tree Traversal Example (Inorder in C++)",
    syntax:
`void inorder(Node* root) {
    if (root == nullptr) return;
    inorder(root->left);
    cout << root->value << " ";
    inorder(root->right);
}`
  }
];

// Rendering logic for Tree
const container = document.getElementById('treeinfo');
treeinfo.forEach(info => {
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
