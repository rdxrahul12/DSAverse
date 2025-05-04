const fenwicktreeInfo = [
    {
      title: "What is a Fenwick Tree (Binary Indexed Tree)?",
      description: "A Fenwick Tree, or Binary Indexed Tree (BIT), is a data structure that provides efficient methods for cumulative frequency queries and updates. It is particularly useful for range sum and prefix sum problems."
    },
    {
      title: "Syntax (C++)",
      syntax: `
  const int N = 1e5 + 5;
  int BIT[N];
  
  // Update index by adding value
  void update(int index, int value) {
    while (index < N) {
      BIT[index] += value;
      index += index & -index;
    }
  }
  
  // Query prefix sum from 1 to index
  int query(int index) {
    int sum = 0;
    while (index > 0) {
      sum += BIT[index];
      index -= index & -index;
    }
    return sum;
  }
  
  // Query range sum [l, r]
  int rangeQuery(int l, int r) {
    return query(r) - query(l - 1);
  }
      `
    },
    {
      title: "Time Complexities",
      complexities: [
        "Point Update: O(log n)",
        "Prefix Sum Query: O(log n)",
        "Range Sum Query: O(log n)",
        "Space: O(n)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "update(index, value) - Add value at index",
        "query(index) - Get sum from 1 to index",
        "rangeQuery(l, r) - Get sum from index l to r",
        "index & -index - Gets the last set bit (helps in navigating tree)"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "Stores cumulative frequency data in a compact form.",
        "Uses 1-based indexing convention.",
        "Operates in logarithmic time for both updates and queries.",
        "Only supports associative operations like sum, min, max, etc.",
        "Can be extended for 2D arrays as well."
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Range sum queries with point updates",
        "Inversion count in an array",
        "Frequency count in online algorithms",
        "Counting smaller elements after self",
        "2D prefix sums (advanced BIT)"
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Always use 1-based indexing for BIT logic.",
        "Pre-initialize tree with size n + 1 to avoid overflow.",
        "Use segment tree if more flexible range updates are needed.",
        "Carefully handle prefix queries at index 0 (usually invalid)."
      ]
    }
  ];
  
  const container = document.getElementById('fenwicktree-info');
  fenwicktreeInfo.forEach(info => {
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
  