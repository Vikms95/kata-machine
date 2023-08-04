// Entire graph
// Index were we start from
// What we are looking for
// Return path
export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number, // where we start from
    needle: number, // what are we looking for
): number[] | null {
    // Setup
    // Whenever we traverse, we mark idx with true if the idx is not true
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    // We start the queue with source and we will mark it as true right away
    const queue = [source];
    seen[source] = true;

    // We need to get the first element of the array and dequeue it
    do {
        // get first element from queue
        const curr = queue.shift() as number;
        if (curr == needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            // i == any children from curr
            // NU
            if (adjs[i] === 0 || seen[i]) {
                continue;
            } else {
                seen[i] = true;
                // Now we know who brought us into this search (the 'parent' vertex)
                // So we can have our path backwards to our search
                // NU
                prev[i] = curr;
                queue.push(i);
            }
        }
    } while (queue.length);

    // If the needle position is -1 within the prev array, it means we never reached it
    if (prev[needle] == -1) {
        return null;
    }

    let curr = needle;
    const out: number[] = [];

    // NU
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}
