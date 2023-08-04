function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    // Base cases
    if (seen[curr]) {
        return false;
    }

    //#MISTAKE I was adding this after checking if it was equal to the needle,
    // so the path was not filled with the needle since we returned before
    path.push(curr);
    seen[curr] = true;

    if (curr === needle) {
        return true;
    }

    // Pre
    // Push the curr within the graph
    // Mark it always as seen

    // Recurse
    // Get the curr from graph
    const edges = graph[curr];

    // Get all its vertex.to and call this same function on it
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    // Post
    path.pop();
    return false;
}
export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    if (!path.length) {
        return null;
    }

    return path;
}

//
//
//
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function walk(
//     graph: WeightedAdjacencyList, // array of arrays with objects containing {to: where it points, weight: what does it cost to get to the edge}
//     currVertex: number, // the index from the array (or vertex if we are talking in graph terms)
//     needle: number, // to be found
//     seen: boolean[], // array of booleans marking the vertices
//     path: number[], // path were we will push and pop to mark how we got to the needle
// ): boolean {
//     // If the current vertex is true in the seen array
//     if (seen[currVertex]) {
//         return false;
//     }

//     // We always mark the current vertex as seen if it was not maked before
//     seen[currVertex] = true;
//     // Always add the vertex with its edges to the path
//     path.push(currVertex);

//     // prev
//     // If the currVertex (which is either the source or a vertex[edge].to) equals needle, stop stack with return true
//     if (currVertex == needle) {
//         return true;
//     }
//     //
//     // rec
//     // Get the array of objects from the graph pertaining the vertex representing the currVertex indice
//     // The vertex[edge].to is pointing towards a vertex, which is at the same time, an index within the
//     // upper array
//     const list = graph[currVertex];

//     // Iterate the objects
//     for (let i = 0; i < list.length; i++) {
//         const edge = list[i];
//         // Call this same function but for every edge.to within the edges array
//         if (walk(graph, edge.to, needle, seen, path)) {
//             // If the walk function returns true (meaning the needle was found by comparing it to any of the
//             //  edge.to) we also return true, unraleving the recursion and never popping anymore

//             return true;
//         }
//     }
//     //
//     // post
//     // If the source or any of the curr[edge].to found the needle, pop the current number and return false
//     path.pop();
//     return false;
// }

// // Each index within the array pertains to a vertex, which is represented as an array of edges
// // Each edge contains a to and a weight
// // graph = [[{to:1,weight:5}, {}], [], [{to:5, weight:1}, {...}]]

// export default function dfs(
//     graph: WeightedAdjacencyList,
//     source: number,
//     needle: number,
// ): number[] | null {
//     // Everytime walk is called with a diferent vertex,
//     // that vertex will be marked as true within the seen array
//     // The reason to keep track of this is bc we cannot keep track of seen
//     // vertex within the path array since we will popping on that array
//     // not having the entirety of the seen nodes at any moment

//     // Seen only represents the indices within the first array, the entire matrix does not need to be represented,
//     // since we do not care where each vertex is pointing to
//     const seen = new Array(graph.length).fill(false);

//     // This will end up being the path from the source to the needle
//     const path: number[] = [];

//     // We declare a function to be able to initialize variables which
//     // will get passed down on subsequent recursive calls
//     walk(graph, source, needle, seen, path);

//     // The signature wants us to return null if no path is filled
//     if (path.length == 0) {
//         return null;
//     }

//     return path;
// }
