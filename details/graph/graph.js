const graphInfo = [
  {
    title: "What is a Graph?",
    description: "A Graph is a non-linear data structure consisting of vertices (nodes) and edges that connect pairs of vertices. It can be directed or undirected, weighted or unweighted, cyclic or acyclic."
  },
  {
    title: "Syntax (C++)",
    syntax: `
// Using Adjacency List
int V = 5;
vector<int> adj[V];

void addEdge(int u, int v) {
  adj[u].push_back(v);
  adj[v].push_back(u); // remove for directed graph
}

// Using Adjacency Matrix
int graph[5][5] = {0};

// Weighted Graph using pairs
vector<pair<int, int>> adjW[V]; // (node, weight)
    `
  },
  {
    title: "Time Complexities",
    complexities: [
      "Adjacency List - Space: O(V + E)",
      "Adjacency Matrix - Space: O(V^2)",
      "Add Edge (List): O(1)",
      "Check Edge (Matrix): O(1)",
      "DFS/BFS Traversal: O(V + E)",
      "Dijkstra’s (Min-Heap): O((V + E) log V)"
    ]
  },
  {
    title: "Key Operations",
    functions: [
      "addEdge(u, v) - Add edge between u and v",
      "DFS(u) - Depth First Search from node u",
      "BFS(u) - Breadth First Search from node u",
      "isConnected() - Check if all nodes are reachable",
      "hasCycle() - Detect cycle in graph",
      "shortestPath(u, v) - Find shortest path between u and v",
      "topologicalSort() - Sort nodes in DAG",
      "MST() - Minimum Spanning Tree (Prim/Kruskal)"
    ]
  },
  {
    title: "Important Properties",
    functions: [
      "Graphs can be directed or undirected.",
      "Can have cycles (cyclic) or no cycles (acyclic).",
      "Supports various traversal techniques (DFS, BFS).",
      "Can be weighted for shortest/longest path problems.",
      "Represented using adjacency list or matrix."
    ]
  },
  {
    title: "Common Use Cases",
    useCases: [
      "Modeling networks (social, computer, road maps)",
      "Shortest path algorithms (GPS, Internet routing)",
      "Dependency resolution (build systems, package managers)",
      "Cycle detection in deadlock prevention",
      "Minimum Spanning Trees in network design",
      "Graph coloring and scheduling"
    ]
  },
  {
    title: "Best Practices",
    functions: [
      "Use adjacency list for sparse graphs and matrix for dense graphs.",
      "Mark visited nodes in traversals to avoid infinite loops.",
      "Choose appropriate algorithm based on graph type (DAG, weighted, etc.).",
      "Use STL structures (vector, queue, set, priority_queue) for clean implementation.",
      "Avoid unnecessary copying of adjacency structures for performance."
    ]
  }
];

const container = document.getElementById('graph-info');
graphInfo.forEach(info => {
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
