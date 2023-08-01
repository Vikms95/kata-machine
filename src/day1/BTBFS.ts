// Check if needle exists within the head
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // look at root of three
    const queue = [head];

    while (queue.length) {
        // remove head from queue and look head.value
        const toCheck = queue.shift();

        if (toCheck?.value == needle) {
            return true;
        }

        // if not what I'm looking for, add this head.children to the queue
        if (toCheck?.left) {
            queue.push(toCheck?.left);
        }
        if (toCheck?.right) {
            queue.push(toCheck?.right);
        }
    }

    return false;
}
