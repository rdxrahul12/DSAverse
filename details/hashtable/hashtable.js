const hashtableInfo = [
  {
    title: "What is a Hash Table?",
    description: "A Hash Table is a data structure that maps keys to values using a hash function. It allows for average-case constant time (O(1)) complexity for search, insert, and delete operations. Hash Tables are a fundamental building block for implementing dictionaries, sets, and associative arrays."
  },
  {
    title: "Syntax (C++)",
    syntax: `
// Using unordered_map from STL
#include <unordered_map>

std::unordered_map<std::string, int> hashMap;

// Insert
hashMap["apple"] = 5;

// Access
int val = hashMap["apple"];

// Check if key exists
if (hashMap.find("banana") != hashMap.end()) {
  // Key exists
}

// Erase
hashMap.erase("apple");

// Iterate
for (auto& pair : hashMap) {
  std::cout << pair.first << " -> " << pair.second << std::endl;
}
    `
  },
  {
    title: "Time Complexities",
    complexities: [
      "Search: O(1) average, O(n) worst-case (hash collisions)",
      "Insert: O(1) average, O(n) worst-case",
      "Delete: O(1) average, O(n) worst-case",
      "Space: O(n)"
    ]
  },
  {
    title: "Key Operations",
    functions: [
      "insert(key, value) - Insert or update a key-value pair",
      "find(key) - Check if a key exists",
      "erase(key) - Remove a key-value pair",
      "operator[] - Access or insert a value by key",
      "count(key) - Returns 1 if key exists, 0 otherwise",
      "size() - Number of key-value pairs in the table",
      "clear() - Remove all elements"
    ]
  },
  {
    title: "Important Properties",
    functions: [
      "Hash tables use a hash function to convert keys into array indices.",
      "Collisions are resolved using techniques like chaining or open addressing.",
      "Average-case constant time operations make hash tables very fast.",
      "STL's unordered_map uses chaining with buckets internally.",
      "Hash functions should distribute keys uniformly to minimize collisions."
    ]
  },
  {
    title: "Collision Resolution Techniques",
    functions: [
      "Chaining - Store a list of key-value pairs at each bucket.",
      "Open Addressing - Find next open slot using probing (linear, quadratic, double hashing).",
      "Linear Probing - Move sequentially to the next slot.",
      "Quadratic Probing - Use quadratic formula to find next index.",
      "Double Hashing - Use second hash function for offset."
    ]
  },
  {
    title: "Common Use Cases",
    useCases: [
      "Implementing dictionaries and symbol tables",
      "Counting frequencies of elements",
      "Checking duplicates in O(1) time",
      "Caching (e.g., LRU cache)",
      "Lookup tables (e.g., memoization in DP)",
      "Indexing in databases"
    ]
  },
  {
    title: "Best Practices",
    functions: [
      "Choose good hash functions to reduce collisions.",
      "Avoid modifying keys used in hash maps (mutable keys).",
      "Reserve expected size using reserve() to reduce rehashing.",
      "Use unordered_map unless you specifically need sorted keys (use map).",
      "In competitive programming, prefer custom hash for large inputs to avoid TLE due to collisions."
    ]
  }
];

const container = document.getElementById('hashtable-info');
hashtableInfo.forEach(info => {
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
