// DFS preserves shape, so use it, otherwise BFS won't work
export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    return recurse(a, b);
}

// My version
// function recurse(
//     a: BinaryNode<number> | null,
//     b: BinaryNode<number> | null,
// ): boolean {
//     if (a === null && b === null) return true;
//     if (a && b) {
//         const areValuesEqual = a.value === b.value;
//         const isLeftEqual = recurse(a.left, b.left);
//         const isRightEqual = recurse(a.right, b.right);

//         if (areValuesEqual && isLeftEqual && isRightEqual) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     return false;
// }

// Primes
function recurse(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // structural check
    // if first passes, second shows any flaw on the structure and
    // in case it triggers, it automatically invalidates the tree
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;

    //value check
    if (a?.value != b?.value) return false;

    return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}
