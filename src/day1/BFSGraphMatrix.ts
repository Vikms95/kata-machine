// Entire graph
// Index were we start from
// What we are looking for
// Return path
export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number, // index where we start from
    needle: number, // value that we are looking for
): number[] | null {
    // Setup
    // Whenever we traverse, we mark idx with true if the idx is not true
    const seen = new Array(graph.length).fill(false);
    // Each index in this represents a vertex, and the value that this index represents
    // the vertex that led to it during the BFS
    const parent = new Array(graph.length).fill(-1);

    // We start the queue with source and we will mark it as true right away
    const queue = [source];
    seen[source] = true;

    do {
        // We get the first element of the array and dequeue it
        // On first iteration it will be the source which we just added
        // But later on we will also have the edges here
        const curr = queue.shift() as number;
        seen[curr] = true;

        // Early break in case the first element in the queue was the needle
        if (curr == needle) {
            break;
        }

        // Grab the index from the graph matrix, which will contain [{to:where it points, weight: how much it costs to traverse}]
        const adjs = graph[curr];
        // i == any edges from curr
        for (let i = 0; i < adjs.length; i++) {
            // In a matrix, to represent that no connection is present, we mark the matrix index as 0
            // Or seen, pretty straight-forward
            if (adjs[i] === 0 || seen[i]) {
                continue;
            } else {
                // Mark it as seen, since it is not seen if we reach here

                // The vertex that led to this vertex was the parent vertex, so we mark the position of this same
                // vertex with the parent vertex position so we know were we came from
                parent[i] = curr;

                //Add the edges index to the queue
                queue.push(i);
            }
        }
    } while (queue.length);

    // If after pushing the array, we did not mark the needle position with its parent vertex,
    // needle is either not within the graph or we unsuccesfully failed the search
    if (parent[needle] == -1) {
        return null;
    }

    // We create a variable with the same value as the one we are looking for so we can traverse
    // the prev array backwards and untangle the recursion
    // We also create the out array which is where we will add the path backwards to later reverse it
    // Needle also corresponds to the index within the array
    let curr = needle;
    const out: number[] = [];

    // While we find a vertex that had a parent leading to it
    // (if we've done it right, it should be the source, which equals -1 bc we never set that position to any vertex)
    console.log(parent);

    while (parent[curr] !== -1) {
        console.log(curr);

        // We are basically looking for the index that led to this index
        // set 'curr' to its previous vertex
        curr = parent[curr];
    }

    return [source].concat(out.reverse());
}
