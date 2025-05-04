const disjointsetInfo = [
    {
      title: "What is a Disjoint Set?",
      description: "A Disjoint Set (also known as Union-Find) is a data structure that keeps track of a partition of a set into disjoint (non-overlapping) subsets. It supports two primary operations: Find and Union."
    },
    {
      title: "Syntax (C++)",
      syntax: `
  int parent[N];
  
  // Initialize each node to be its own parent
  for (int i = 0; i < N; i++) {
    parent[i] = i;
  }
  
  // Find with path compression
  int find(int x) {
    if (parent[x] != x)
      parent[x] = find(parent[x]);
    return parent[x];
  }
  
  // Union by rank/size (optional optimization)
  void union_sets(int a, int b) {
    a = find(a);
    b = find(b);
    if (a != b)
      parent[b] = a;
  }
      `
    },
    {
      title: "Time Complexities",
      complexities: [
        "Find: O(α(n)) with path compression",
        "Union: O(α(n)) with union by rank/size",
        "Where α(n) is the inverse Ackermann function (very slow-growing)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "make_set(x) - Create a new set containing x",
        "find(x) - Return the representative of the set containing x",
        "union_sets(x, y) - Merge the sets containing x and y",
        "path compression - Flattens the structure for efficient find",
        "union by rank/size - Attach smaller tree under larger"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "Helps manage grouping of elements into disjoint subsets.",
        "Very efficient with path compression and union by rank.",
        "Does not support deletion of elements.",
        "Usually implemented with arrays and simple recursion."
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Kruskal’s algorithm (Minimum Spanning Tree)",
        "Cycle detection in undirected graphs",
        "Connected components in graphs",
        "Network connectivity",
        "Image processing (segmentation)"
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Always apply path compression in find() for efficiency.",
        "Use union by rank or size to reduce tree height.",
        "Initialize each element's parent to itself in make_set.",
        "Avoid recursive find() for very deep trees without compression."
      ]
    }
  ];
  
  const container = document.getElementById('disjointset-info');
  disjointsetInfo.forEach(info => {
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
  