const ds = [

    
       
          {
        logo: "arr [ ]",
        name: "Array",
        desc: "A collection of items stored at contiguous memory locations.",
        link: "details/array/array.html"
      },
      {
        logo: "Vec",
        name: "Vector",
        desc: "A dynamic array that can grow or shrink in size, offering random access.",
        link: "details/vector/vector.html"
      },
      {
        logo: "🔗 L.L.",
        name: "Linked List",
        desc: "A linear data structure where elements point to the next.",
        link: "details/linkedlist/linkedlist.html"
      },
      {
        logo: "🔗 D.L.L.",
        name: "Doubly Linked List",
        desc: "A linked list where each node points to both its previous and next node.",
        link: "details/doublylinkedlist/doublylinkedlist.html"
      },
      {
        logo: "🪢 C.L.L.",
        name: "Circular Linked List",
        desc: "A linked list where the last node points back to the head.",
        link: "details/circularlinkedlist/circularlinkedlist.html"
      },
      {
        logo: "🌀 D.C.L.L.",
        name: "Doubly Circular Linked List",
        desc: "A doubly linked list where the last node connects back to the head and vice versa.",
        link: "details/doublycircularlinkedlist/doublycircularlinkedlist.html"
      },
      {
        logo: "ST",
        name: "Stack",
        desc: "A linear data structure following LIFO (Last In First Out) principle.",
        link: "details/stack/stack.html"
      },
      {
        logo: "📚 Que",
        name: "Queue",
        desc: "A linear data structure following FIFO (First In First Out) principle.",
        link: "details/queue/queue.html"
      },
      {
        logo: "🎲 Deque",
        name: "Deque (Double Ended Queue)",
        desc: "A linear data structure where insertion and deletion can occur at both ends.",
        link: "details/deque/deque.html"
      },
      {
        logo: "🔀 Priority Q",
        name: "Priority Queue",
        desc: "A special queue where each element has a priority, and elements are dequeued based on priority.",
        link: "details/priorityqueue/priorityqueue.html"
      },
      
     
      {
        logo: "📖 HT",
        name: "Hash Table",
        desc: "A data structure that maps keys to values for efficient lookup.",
        link: "details/hashtable/hashtable.html"
      },
      {
        logo: "🌳 Tree",
        name: "Tree",
        desc: "A hierarchical data structure with a root node and children nodes forming a parent-child relationship.",
        link: "details/tree/tree.html"
      },
      {
        logo: "🌳 BT",
        name: "Binary Tree",
        desc: "A tree data structure in which each node has at most two children.",
        link: "details/binarytree/binarytree.html"
      },
      {
        logo: "📈 BST",
        name: "Binary Search Tree",
        desc: "A binary tree where each node follows BST property (left < node < right).",
        link: "details/binarysearchtree/binarysearchtree.html"
      },
      {
        logo: "🏰 H",
        name: "Heap",
        desc: "A special tree-based structure satisfying the heap property (Min-Heap/Max-Heap).",
        link: "details/heap/heap.html"
      },
      {
        logo: "⚖️ Bal.T",
        name: "Balanced Tree",
        desc: "A tree where the height difference between left and right subtrees is minimal.",
        link: "details/balancedtree/balancedtree.html"
      },
      {
        logo: "📚 AVL",
        name: "AVL Tree",
        desc: "A self-balancing binary search tree where the height difference between left and right child is at most one.",
        link: "details/avltree/avl-tree.html"
      },
    
      {
        logo: "🗃️ B-T",
        name: "B-Tree",
        desc: "A self-balancing tree data structure that maintains sorted data and allows searches, insertions, and deletions in logarithmic time.",
        link: "details/btree/btree.html"
      },
      {
        logo: "📂 B+ T",
        name: "B+ Tree",
        desc: "An advanced version of B-Tree where all records are stored at the leaf nodes only.",
        link: "details/bplustree/bplustree.html"
      },
      {
        logo: "🟥 R-B T",
        name: "Red-Black Tree",
        desc: "A self-balancing binary search tree with red and black nodes maintaining balance rules.",
        link: "details/redblacktree/redblacktree.html"
      },
      {
        logo: "🕸️ G",
        name: "Graph",
        desc: "A non-linear data structure consisting of nodes and edges, representing relationships.",
        link: "details/graph/graph.html"
      },
      {
        logo: "🧩 DSU",
        name: "Disjoint Set (Union Find)",
        desc: "A data structure that keeps track of elements partitioned into disjoint (non-overlapping) sets.",
        link: "details/disjointset/disjointset.html"
      },
      {
        logo: "📚 Set",
        name: "Set",
        desc: "An ordered collection of unique elements.",
        link: "details/set/set.html"
      },
      {
        logo: "📚 MultiSet",
        name: "Multiset",
        desc: "An ordered collection where duplicate elements are allowed.",
        link: "details/multiset/multiset.html"
      },
      {
        logo: "📦 UnOSet",
        name: "Unordered Set",
        desc: "A collection of unique elements with no guaranteed order, offering average O(1) lookup.",
        link: "details/unorderedset/unorderedset.html",
      },
      {
        logo: "🗺️ Map",
        name: "Map",
        desc: "An ordered collection of key-value pairs, with unique keys.",
        link: "details/map/map.html",
      },
      {
        logo: "🗺️ MultiMap",
        name: "Multimap",
        desc: "An ordered collection of key-value pairs allowing duplicate keys.",
        link: "details/multimap/multimap.html",
      },
      {
        logo: "🗃️ UnOMap",
        name: "Unordered Map",
        desc: "A collection of key-value pairs with no guaranteed order, offering average O(1) lookup.",
        link: "details/unorderedmap/unorderedmap.html",
      },
      {
        logo: "🗃️ UnMultiMap",
        name: "Unordered Multimap",
        desc: "A hash table-based collection allowing duplicate keys with no order.",
        link: "details/unorderedmultimap/unorderedmultimap.html",
      },
      {
        logo: "🌲 T",
        name: "Trie",
        desc: "A tree-like data structure used for efficient retrieval of a key in a large dataset of strings.",
        link: "details/trie/trie.html"
      },
  
    
      {
        logo: "🎯 F-T",
        name: "Fenwick Tree",
        desc: "A data structure providing efficient methods for calculation and manipulation of prefix sums.",
        link: "details/fenwicktree/fenwicktree.html"
      },
      {
        logo: "🎛️ S-T",
        name: "Segment Tree",
        desc: "A tree used for storing information about intervals or segments for efficient range queries.",
        link: "details/segmenttree/segmenttree.html"
      },
      {
        logo: "🧵 Suff. T",
        name: "Suffix Tree",
        desc: "A compressed trie used to represent all suffixes of a given string.",
        link: "details/suffixtree/suffixtree.html"
      },
     
    
      
];

const algo = [
    {
        logo: "🔍",
        name: "Binary Search",
        desc: "An efficient algorithm for finding an item from a sorted list.",
        link: "details/binary-search.html"
      },
      {
        logo: "🌀",
        name: "Merge Sort",
        desc: "A divide and conquer sorting algorithm with O(n log n) complexity.",
        link: "details/merge-sort.html"
      },
      {
        logo: "↔️",
        name: "Two Pointer",
        desc: "A technique for solving problems involving arrays/lists efficiently using two indexes.",
        link: "details/two-pointer.html"
      },
      {
        logo: "🔗",
        name: "Recursion",
        desc: "A method where the solution depends on solving smaller instances of the same problem.",
        link: "details/recursion.html"
      },
      {
        logo: "🔄",
        name: "Backtracking",
        desc: "An algorithmic technique for solving problems recursively by trying to build a solution incrementally.",
        link: "details/backtracking.html"
      },
      {
        logo: "🏃",
        name: "Sliding Window",
        desc: "A technique for problems dealing with subarrays or substrings, optimizing naive solutions.",
        link: "details/sliding-window.html"
      },
      {
        logo: "📐",
        name: "Divide and Conquer",
        desc: "A paradigm of solving problems by dividing them into subproblems and combining results.",
        link: "details/divide-and-conquer.html"
      },
      {
        logo: "🎯",
        name: "Dynamic Programming",
        desc: "An optimization technique for solving complex problems by breaking them down into simpler subproblems.",
        link: "details/dynamic-programming.html"
      },
      {
        logo: "🔀",
        name: "Greedy Algorithms",
        desc: "An approach where the best immediate choice is picked at each step hoping for a global optimum.",
        link: "details/greedy.html"
      },
      {
        logo: "🧩",
        name: "Bit Manipulation",
        desc: "Algorithms that directly operate on bits and perform operations faster and efficiently.",
        link: "details/bit-manipulation.html"
      },
      {
        logo: "📊",
        name: "Counting Sort",
        desc: "A non-comparison based sorting algorithm suitable when the range of input is limited.",
        link: "details/counting-sort.html"
      },
      {
        logo: "🌪️",
        name: "Quick Sort",
        desc: "A highly efficient divide and conquer sorting algorithm using partitioning.",
        link: "details/quick-sort.html"
      },
      {
        logo: "🎢",
        name: "Depth First Search (DFS)",
        desc: "A graph traversal algorithm that explores as far as possible along branches before backtracking.",
        link: "details/dfs.html"
      },
      {
        logo: "🚶",
        name: "Breadth First Search (BFS)",
        desc: "A graph traversal algorithm that explores neighbors level by level.",
        link: "details/bfs.html"
      },
      {
        logo: "🛤️",
        name: "Dijkstra's Algorithm",
        desc: "An algorithm to find the shortest path between nodes in a graph.",
        link: "details/dijkstra.html"
      },
      {
        logo: "🚂",
        name: "Bellman-Ford Algorithm",
        desc: "An algorithm for finding shortest paths in graphs with negative weight edges.",
        link: "details/bellman-ford.html"
      },
      {
        logo: "🗺️",
        name: "Floyd Warshall Algorithm",
        desc: "An algorithm for finding shortest paths between all pairs of vertices in a weighted graph.",
        link: "details/floyd-warshall.html"
      },
      {
        logo: "🛡️",
        name: "Kruskal's Algorithm",
        desc: "An algorithm to find the minimum spanning tree of a graph.",
        link: "details/kruskal.html"
      },
      {
        logo: "🛠️",
        name: "Prim's Algorithm",
        desc: "Another algorithm for finding the minimum spanning tree for a weighted undirected graph.",
        link: "details/prim.html"
      },
      {
        logo: "🏗️",
        name: "Topological Sort",
        desc: "An algorithm for ordering vertices in a Directed Acyclic Graph (DAG).",
        link: "details/topological-sort.html"
      },
      {
        logo: "🧹",
        name: "KMP Algorithm",
        desc: "An efficient string matching algorithm (Knuth-Morris-Pratt).",
        link: "details/kmp.html"
      },
      {
        logo: "⚡",
        name: "Rabin Karp Algorithm",
        desc: "A string searching algorithm using hashing for pattern matching.",
        link: "details/rabin-karp.html"
      },
      {
        logo: "🧵",
        name: "Z Algorithm",
        desc: "An algorithm for pattern matching using preprocessing of the pattern.",
        link: "details/z-algorithm.html"
      },
      
]

const dsbtn = document.getElementById("ds");
const algobtn = document.getElementById("algo");
const cardGrid = document.querySelector(".card-grid");

function renderCards(category){
    cardGrid.innerHTML = "";
    const items = category === "ds" ? ds :  algo;
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML =`
        <div class="card-logo"> ${item.logo}</div>
        <div class="card-title"> ${item.name}</div>
        <div class="card-desc"> ${item.desc}</div>

        `;
        card.addEventListener('click',()=>{
            window.location.href = item.link;
        });
        cardGrid.appendChild(card);
    });
}

dsbtn.addEventListener('click' , ()=>{
    dsbtn.classList.add('tgbtn-active');
    algobtn.classList.remove('tgbtn-active');
    dsbtn.classList.remove('tgbtn');
    algobtn.classList.add('tgbtn');
    renderCards('ds');
});
algobtn.addEventListener('click', () => {
    algobtn.classList.add('tgbtn-active');
    dsbtn.classList.remove('tgbtn-active');
    algobtn.classList.remove('tgbtn');
    dsbtn.classList.add('tgbtn');
    renderCards('algo');
  });
  
  // Initial render
  renderCards('ds');