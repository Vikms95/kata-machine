export default function in_order_search(head: BinaryNode<number>): number[] {
    return recurse(head);
}

function recurse(
    node: BinaryNode<number> | null,
    path: number[] = [],
): number[] {
    // Check if node passed (either head, left or right of prev node) exist
    if (!node) return path;

    // Apply same on left if exist
    recurse(node.left, path);

    // Add root inbetween
    path.push(node.value);

    // Apply same on right if exist
    recurse(node.right, path);

    // Return path always so pre_order_search can return the path
    return path;
}
