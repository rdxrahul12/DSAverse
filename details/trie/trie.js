const trieinfo = [
    {
      title: "What is a Trie?",
      description: "A Trie (pronounced as 'try'), also known as a prefix tree, is a tree-like data structure used to store a dynamic set of strings where keys are usually strings. It is primarily used for retrieval operations, especially for searching prefixes, dictionary words, and autocomplete systems."
    },
    {
      title: "Key Properties of Trie",
      properties: [
        "Each node represents a character of the string.",
        "The root node is typically empty or represents the start.",
        "Each path from the root to a leaf represents a word or prefix.",
        "Nodes may have multiple children (one per possible character).",
        "Words are typically marked using a boolean flag (e.g., isEndOfWord)."
      ]
    },
    {
      title: "Time Complexities",
      complexities: [
        "Insertion: O(L) where L is the length of the word.",
        "Search: O(L) - Check each character one by one from root.",
        "Prefix Search: O(L) - Similar to full word search.",
        "Deletion: O(L) - Traverses the word and removes nodes if necessary."
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "insert(word) - Adds a word to the Trie.",
        "search(word) - Returns true if the word exists in the Trie.",
        "startsWith(prefix) - Returns true if any word in the Trie starts with the given prefix.",
        "delete(word) - Removes a word from the Trie if present.",
        "getAllWords() - Retrieves all words stored in the Trie.",
        "autoComplete(prefix) - Suggests words starting with the given prefix."
      ]
    },
    {
      title: "Use Cases",
      useCases: [
        "Autocomplete systems (e.g., Google search suggestions).",
        "Spell checkers and predictive text input.",
        "IP routing (Longest Prefix Matching).",
        "Storing and querying dictionaries efficiently.",
        "Pattern matching algorithms (Aho-Corasick algorithm).",
        "Bioinformatics (e.g., genome sequence matching)."
      ]
    },
    {
      title: "Trie Node Structure (C++)",
      syntax: 
  `struct TrieNode {
      TrieNode* children[26];
      bool isEndOfWord;
  
      TrieNode() {
          isEndOfWord = false;
          for (int i = 0; i < 26; i++)
              children[i] = nullptr;
      }
  };`
    },
    {
      title: "Best Practices",
      functions: [
        "Use hash maps instead of fixed-size arrays for large alphabets (e.g., Unicode).",
        "Avoid unnecessary node creation—only allocate when needed.",
        "Use compact Trie (radix tree) to save memory if needed.",
        "Mark end-of-word correctly to distinguish prefixes from complete words.",
        "Use recursion or loops carefully to navigate Trie nodes safely."
      ]
    }
  ];
  
  // Rendering logic for Trie
  const container = document.getElementById('trieinfo');
  trieinfo.forEach(info => {
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
  