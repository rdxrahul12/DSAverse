const binarytreeInfo = [
    {
      title: "What is a Binary Tree?",
      description: "A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child."
    },
    {
      title: "Syntax (C++)",
      syntax: `
  struct Node {
    int data;
    Node* left;
    Node* right;
    
    Node(int val) {
      data = val;
      left = right = nullptr;
    }
  };
      `
    },
    {
      title: "Time Complexities (Average Case)",
      complexities: [
        "Access/Search: O(log n)",
        "Insertion: O(log n)",
        "Deletion: O(log n)"
      ]
    },
    {
      title: "Time Complexities (Worst Case - Unbalanced)",
      complexities: [
        "Access/Search: O(n)",
        "Insertion: O(n)",
        "Deletion: O(n)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "Insert a node",
        "Delete a node",
        "Inorder traversal (LNR)",
        "Preorder traversal (NLR)",
        "Postorder traversal (LRN)",
        "Level order traversal (BFS)",
        "Height of tree",
        "Check if tree is balanced"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "The maximum number of nodes at level ‘l’ is 2^l.",
        "A binary tree with height h has at most 2^(h+1) - 1 nodes.",
        "In a binary tree, number of leaf nodes is n and total nodes is 2n - 1.",
        "Perfect binary tree: all internal nodes have two children and all leaves are at same level.",
        "Complete binary tree: all levels are filled except possibly the last."
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Expression trees (parsing expressions)",
        "Binary Search Trees (BSTs)",
        "Heaps (priority queues)",
        "Syntax trees in compilers",
        "Indexing in databases",
        "Huffman Encoding Trees"
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Use recursion wisely and avoid stack overflow in deep trees.",
        "Use iterative traversal when recursion depth may be high.",
        "Use balanced trees (like AVL or Red-Black) for efficiency.",
        "Avoid unnecessary copying of nodes/subtrees."
      ]
    }
  ];
  
  const container = document.getElementById('binarytree-info');
  binarytreeInfo.forEach(info => {
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
  