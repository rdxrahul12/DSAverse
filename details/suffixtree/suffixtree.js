const suffixtreeinfo = [
    {
      title: "What is a Suffix Tree?",
      description: "A Suffix Tree is a compressed trie containing all the suffixes of a given text. It is a powerful data structure used in string processing, allowing fast pattern matching, substring search, and many other operations. Suffix Trees are especially useful in bioinformatics, text editors, and search engines."
    },
    {
      title: "Properties of a Suffix Tree",
      properties: [
        "A Suffix Tree represents all suffixes of a string in a compressed form.",
        "It allows linear-time operations for many common string processing tasks.",
        "Each internal node (except the root) has at least two children.",
        "Each edge is labeled with a non-empty substring of the original string.",
        "No two edges starting from the same node can begin with the same character.",
        "The total number of nodes is linear in the length of the input string."
      ]
    },
    {
      title: "Time Complexities",
      complexities: [
        "Construction: O(n) - Using Ukkonen's algorithm, a suffix tree can be built in linear time for a string of length n.",
        "Substring Search: O(m) - Search for a substring of length m takes linear time with respect to m.",
        "Pattern Matching: O(m) - Checking if a pattern exists takes time proportional to the pattern length.",
        "Longest Repeated Substring: O(n) - Can be found efficiently using the tree structure.",
        "Longest Common Substring (for 2 strings): O(n + m) - Using Generalized Suffix Tree."
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "buildSuffixTree(str) - Constructs the suffix tree from a string.",
        "search(pattern) - Checks if the pattern exists in the input string.",
        "getAllSuffixes() - Lists all suffixes of the input string (mostly for visualization/debugging).",
        "longestRepeatedSubstring() - Finds the longest substring that appears more than once.",
        "longestCommonSubstring(str1, str2) - Computes the longest common substring between two strings using a Generalized Suffix Tree."
      ]
    },
    {
      title: "Use Cases of Suffix Tree",
      useCases: [
        "Fast substring and pattern matching in texts.",
        "Efficient implementation of string matching algorithms like Aho-Corasick.",
        "Bioinformatics: genome sequence analysis and matching.",
        "Finding longest repeated substrings or palindromes.",
        "Building full-text search engines and auto-complete engines.",
        "Data compression techniques (e.g., BWT - Burrows Wheeler Transform)."
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Use Ukkonen’s algorithm for efficient O(n) online construction.",
        "Use Suffix Arrays (space-optimized version) when memory is a concern.",
        "Suffix Trees are not space-efficient—use only when speed is critical.",
        "Choose Generalized Suffix Trees when dealing with multiple strings.",
        "Ensure edge labeling is implemented correctly for accurate traversal."
      ]
    },
    {
      title: "Suffix Tree Construction Example (Ukkonen's Algorithm Reference)",
      syntax:
  `// Pseudocode Idea:
  // 1. Add suffixes incrementally to the tree.
  // 2. Maintain suffix links to speed up processing.
  // 3. Avoid reprocessing characters by skipping/counting.
  
  // JavaScript Implementation would involve custom tree and node objects.
  // Full Ukkonen’s algorithm is complex and beyond beginner level,
  // but many simplified versions exist for fixed alphabets or smaller datasets.`
    }
  ];
  
  // Rendering logic for Suffix Tree
  const container = document.getElementById('suffixtreeinfo');
  suffixtreeinfo.forEach(info => {
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
  