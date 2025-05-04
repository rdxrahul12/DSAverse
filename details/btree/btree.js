const btreeInfo = [
    {
      title: "What is a B-Tree?",
      description: "A B-Tree is a self-balancing search tree that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is optimized for systems that read and write large blocks of data."
    },
    {
      title: "Syntax (C++)",
      syntax: `
  class BTreeNode {
    int *keys;
    int t;  // Minimum degree
    BTreeNode **C;
    int n;
    bool leaf;
  
  public:
    BTreeNode(int _t, bool _leaf);
    void traverse();
    BTreeNode *search(int k);
    // Other B-Tree node methods
  };
      `
    },
    {
      title: "Time Complexities",
      complexities: [
        "Search: O(log n)",
        "Insertion: O(log n)",
        "Deletion: O(log n)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "Search for a key",
        "Insert a key",
        "Delete a key",
        "Traverse the tree (in-order or level-order)",
        "Split child nodes when full",
        "Merge nodes during deletion"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "Each node can contain multiple keys.",
        "All leaves are at the same level.",
        "A B-Tree of order m can have at most m children.",
        "Used to minimize disk reads/writes.",
        "Balances itself after insertions and deletions."
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Database indexing (MySQL, PostgreSQL)",
        "File systems (NTFS, HFS+)",
        "Multilevel indexing",
        "Searching large sorted datasets on disk",
        "Avoiding rebalancing overhead of binary trees"
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Choose an appropriate order (degree) based on disk block size.",
        "Use B+ Tree if range queries are common.",
        "Avoid unnecessary restructuring by maintaining balance.",
        "Use memory pools or pre-allocation for efficiency in large systems."
      ]
    }
  ];
  
  const container = document.getElementById('btree-info');
  btreeInfo.forEach(info => {
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
  