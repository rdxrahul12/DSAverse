const redblacktreeinfo = [
    {
      title: "What is a Red-Black Tree?",
      description: "A Red-Black Tree is a self-balancing binary search tree where each node contains an extra bit for storing the color (red or black) of the node. These trees provide O(log n) time complexity for search, insertion, and deletion operations."
    },
    {
      title: "Properties of a Red-Black Tree",
      properties: [
        "Each node is either red or black.",
        "The root is always black.",
        "All leaves (NIL nodes) are black.",
        "If a red node has children, then the children must be black (no two red nodes can be adjacent).",
        "Every path from a node to its descendant leaves must have the same number of black nodes (this ensures balance)."
      ]
    },
    {
      title: "Time Complexities",
      complexities: [
        "Search: O(log n) - Since the tree is balanced, the height of the tree is guaranteed to be logarithmic, ensuring efficient searches.",
        "Insertion: O(log n) - Insertions maintain balance through rotations and color flips, ensuring logarithmic time complexity.",
        "Deletion: O(log n) - Deletion may require rebalancing via rotations and color changes, keeping the operation logarithmic."
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "Insert(x) - Insert a node with value x into the Red-Black Tree. The node is initially red, and the tree is balanced if necessary.",
        "Delete(x) - Remove the node with value x from the Red-Black Tree. After deletion, the tree may require balancing using rotations and color changes.",
        "Search(x) - Search for the node with value x. Since the tree is balanced, the search operation takes O(log n) time.",
        "Left Rotate(x) - Perform a left rotation on node x. This is used to balance the tree during insertions and deletions.",
        "Right Rotate(x) - Perform a right rotation on node x. This operation helps with balancing the tree and maintaining Red-Black properties."
      ]
    },
    {
      title: "Insertion Process",
      description: "When inserting a node, it is initially colored red. After the insertion, we may need to perform rotations and color flips to maintain the Red-Black Tree properties. The insertion ensures that the tree remains balanced with each operation."
    },
    {
      title: "Rotations",
      description: "Rotations are used to restore the Red-Black Tree properties during insertions and deletions. There are two types of rotations: left rotation and right rotation. These operations adjust the tree's structure without violating the binary search tree properties."
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Efficient associative containers in C++ (std::map, std::set), where elements need to be stored in a balanced tree structure.",
        "Used in applications that require dynamic insertion and deletion of elements, while keeping search operations fast.",
        "Implementing balanced search trees for databases, caching, and indexing systems.",
        "Red-Black trees are useful in environments where performance is critical, and fast lookups, insertions, and deletions are needed."
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Always perform balancing after each insertion or deletion to ensure the Red-Black properties are maintained.",
        "When deleting, ensure the tree is properly balanced by adjusting node colors and performing rotations.",
        "Red-Black Trees are ideal for situations requiring dynamic sets of elements with frequent insertions and deletions, such as in database indexing or dynamic memory management."
      ]
    }
  ];
  
  // Rendering logic for Red-Black Tree
  const container = document.getElementById('redblacktreeinfo');
  redblacktreeinfo.forEach(info => {
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
  
    card.innerHTML = html;
    container.appendChild(card);
  });
  