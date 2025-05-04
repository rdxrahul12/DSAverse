const segmenttreeinfo = [
    {
      title: "What is a Segment Tree?",
      description: "A Segment Tree is a binary tree data structure used for storing intervals or segments. It allows efficient querying and updating of intervals (ranges) in logarithmic time. Segment Trees are ideal for range queries like range sum, range minimum, and range maximum, especially in situations where the data set is static or undergoes frequent updates."
    },
    {
      title: "Properties of a Segment Tree",
      properties: [
        "A Segment Tree is a balanced binary tree where each node represents a segment (or range) of the array.",
        "Each leaf node represents a single element of the array, and internal nodes represent the union of the segments of their child nodes.",
        "Segment Trees are typically built to handle specific range queries like sum, minimum, or maximum, but can be generalized for any associative query.",
        "Each non-leaf node stores a value based on the range of its child nodes. For instance, in the case of a sum query, the node will store the sum of the range represented by that segment.",
        "A Segment Tree can be used for both static data (with no updates) or dynamic data (where updates can be made to the elements)."
      ]
    },
    {
      title: "Time Complexities",
      complexities: [
        "Query: O(log n) - Querying a range (like the sum of elements or the minimum value in a range) requires navigating through the tree in O(log n) time. This is because the segment tree has a height of log n.",
        "Update: O(log n) - Updating a value in the array involves traversing the tree and updating the relevant nodes in O(log n) time. After updating the leaf, the internal nodes are updated to maintain consistency.",
        "Building the Tree: O(n) - Building the segment tree from an array requires O(n) time, as each node must be computed from its children (bottom-up construction)."
      ]
    },
    {
      title: "Key Operations",
      functions: [
        "BuildTree(arr) - This function builds the segment tree from the input array. It recursively divides the array into smaller segments until each segment represents a single element, and then stores the result of the query (sum, minimum, etc.) at each internal node.",
        "Query(l, r) - This function is used to query the range [l, r]. It calculates the result for the range by traversing the segment tree and aggregating values in O(log n) time. Depending on the specific segment tree, this could return a sum, minimum, maximum, or other results for the range.",
        "Update(index, value) - This function updates the value at a specific index in the array. After updating the leaf node corresponding to the index, the tree is updated recursively upwards to maintain the consistency of the tree structure."
      ]
    },
    {
      title: "Building a Segment Tree",
      description: "To build a segment tree, the array is recursively divided into segments. Starting from the leaf nodes, which represent individual elements of the array, internal nodes are computed by combining the values of their children. For example, in the case of a sum segment tree, each internal node will store the sum of its two child nodes. The process of building the tree takes O(n) time, where n is the size of the array."
    },
    {
      title: "Segment Tree Applications",
      useCases: [
        "Range Sum Queries: Efficiently compute the sum of elements in a given range. This can be useful in applications such as calculating the total sales in a range of months.",
        "Range Minimum/Maximum Queries: Find the minimum or maximum element in a given range. This can be used for applications like finding the lowest temperature or the highest sales value in a range of days.",
        "Dynamic Range Queries: After updates to an element in the array (e.g., modifying the sales of a particular day), efficiently answer range queries after each update. This is commonly used in databases and real-time applications.",
        "Interval Merging: Segment Trees can be used to merge overlapping intervals or ranges, which is useful in various scheduling and resource allocation problems.",
        "Lazy Propagation: In advanced use cases, lazy propagation is used to efficiently handle range updates, such as updating all elements in a range, in logarithmic time."
      ]
    },
    {
      title: "Best Practices",
      functions: [
        "Always use Segment Trees when the problem requires efficient range queries and updates. Segment Trees are particularly useful when dealing with static or semi-dynamic datasets.",
        "For dynamic datasets, consider using Segment Trees with Lazy Propagation. Lazy Propagation ensures that range updates (like adding a value to all elements in a range) are performed efficiently, by delaying updates until necessary.",
        "Segment Trees are ideal for problems where frequent range queries are needed, such as in database indexing or competitive programming problems involving range queries.",
        "When dealing with large datasets, always try to minimize unnecessary updates. Keep the tree balanced and perform updates only when required to prevent redundant recalculations."
      ]
    },
    {
      title: "Segment Tree Example: Sum Query",
      description: "Suppose we want to calculate the sum of elements in the range [l, r]. A Segment Tree will store sum values in internal nodes. A query for the range [l, r] will traverse the tree from the root and check the segments that overlap with the range [l, r]. The sum of these segments is then aggregated to get the final result."
    },
    {
      title: "Segment Tree Example: Range Minimum Query",
      description: "For a range minimum query, the Segment Tree stores the minimum value of the range at each internal node. When querying for a range [l, r], the tree is traversed, and the minimum values of the intersecting segments are compared and returned."
    }
  ];
  
  // Rendering logic for Segment Tree
  const container = document.getElementById('segmenttreeinfo');
  segmenttreeinfo.forEach(info => {
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
  