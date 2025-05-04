const arrayInfo = [
    {
      title: "What is an Array?",
      description: "An array is a fixed-size, contiguous collection of elements of the same data type. It allows efficient random access through indexing. Arrays form the basis for more advanced structures like matrices, heaps, and hash tables."
    },
    {
      title: "Syntax (C++)",
      syntax: `
   Static Array Declaration
  int arr[5];
  
  Static Array Initialization
  int arr[] = {1, 2, 3, 4, 5};
  
  Dynamic Array Allocation (Heap Memory)
  int* arr = new int[5];
  
  2D Array Declaration
  int arr2D[3][4];
  
  STL Array (Fixed Size)
  #include <array>
  std::array<int, 5> arr = {1, 2, 3, 4, 5};
  
  Vector (Dynamic Size)
  #include <vector>
  std::vector<int> vec = {1, 2, 3, 4, 5};
      `
    },
    {
      title: "Time Complexities",
      complexities: [
        "Access: O(1)",
        "Search (unsorted): O(n)",
        "Search (sorted with binary search): O(log n)",
        "Insertion at End (static array): O(1) if space available",
        "Insertion at Middle: O(n)",
        "Deletion: O(n)"
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "arr[i] - Access element at index i",
        "sizeof(arr)/sizeof(arr[0]) - Size of C-style array",
        "arr.size() - Size of std::array or std::vector",
        "push_back(x) - Insert element at end (vector only)",
        "pop_back() - Remove last element (vector only)",
        "insert(pos, val) - Insert element at specific position (vector)",
        "erase(pos) - Erase element at specific position (vector)",
        "clear() - Remove all elements (vector)",
        "empty() - Check if array is empty",
        "front() - Access first element",
        "back() - Access last element",
        "begin(), end() - Access iterators for traversing",
        "sort(arr.begin(), arr.end()) - Sort elements (vector or std::array)"
      ]
    },
    {
      title: "Important Properties",
      functions: [
        "Elements are stored in contiguous memory locations.",
        "Array size is fixed after declaration (for static arrays).",
        "Indexing starts from 0.",
        "Random access is possible in O(1) time.",
        "Insertion or deletion (except at end) requires shifting elements."
      ]
    },
    {
      title: "Common Use Cases",
      useCases: [
        "Storing and accessing fixed-size data collections.",
        "Implementing matrices and multi-dimensional data structures.",
        "Building low-level data structures like heaps and hash tables.",
        "Dynamic Programming (DP) tables.",
        "Graph Representations (Adjacency Matrix).",
        "Temporary buffers during computations."
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Use std::vector for dynamic arrays instead of raw pointers.",
        "Avoid out-of-bounds access to prevent undefined behavior.",
        "Free dynamically allocated memory using delete[] for raw arrays.",
        "Use std::array for safer fixed-size arrays with STL features."
      ]
    }
  ];
  
  
  // Rendering logic
  const container = document.getElementById('array-info');
  arrayInfo.forEach(info => {
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