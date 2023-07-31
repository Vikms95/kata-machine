export type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

// order is
// G > A

// Attach the new node, then break the links
// Order is from left to right, start with incoming

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        // If no head, give head to item right away
        const node = { value: item } as Node<T>;

        // I forgot to increase the length

        if (this.length == 0) {
            this.length++;
            this.head = this.tail = node;
            return;
        }
        this.length++;

        // Assign next to the incoming head
        node.next = this.head;
        // Assign prev to the current head
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        // By prime
        if (this.length == 0 || idx == 0) {
            this.prepend(item);
            return;
        } else if (idx == this.length) {
            this.append(item);
            return;
        } else if (idx > this.length) {
            throw new Error("Specified index does not exist.");
        }

        // For loop until desired node
        const nodeToInsertBefore = { value: item } as Node<T>;
        let nodeToReplace = this.head;
        //              By prime
        for (let i = 0; nodeToReplace && i < idx; i++) {
            if (nodeToReplace?.next) {
                nodeToReplace = nodeToReplace.next;
            }
        }

        if (!nodeToReplace) return;

        // Link the to insert
        nodeToInsertBefore.next = nodeToReplace;
        nodeToInsertBefore.prev = nodeToReplace.prev;
        nodeToReplace.prev = nodeToInsertBefore;
        if (nodeToInsertBefore.prev) {
            nodeToInsertBefore.prev.next = nodeToInsertBefore;
        }
    }
    append(item: T): void {
        const nodeToAdd = { value: item } as Node<T>;

        if (this.length == 0) {
            this.length++;
            this.head = this.tail = nodeToAdd;
            return;
        }

        this.length++;

        if (this.tail) {
            nodeToAdd.prev = this.tail;
            this.tail.next = nodeToAdd;
            this.tail = nodeToAdd;
        }
    }
    remove(item: T): T | undefined {
        if (!item || this.length === 0) throw new Error("No items to remove.");

        // find idx.value that == item
        let curr = this.head;
        while (curr && curr.value !== item) {
            curr = curr.next;
        }

        if (!curr) return undefined;

        // Don't forget to decrement the list length
        this.length--;

        if (this.length == 0) {
            const val = this.head?.value;
            this.head = this.tail = undefined;
            return val;
        }

        // Adjust links for surrounding nodes

        // this is how I did it
        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        // node was the head
        if (curr == this.head) {
            this.head = curr.next;
        }

        // node was the tail
        if (curr == this.tail) {
            this.tail = curr.prev;
        }
        // This is how prime does it, it was wrong
        // if (curr.prev) {
        //     curr.prev = curr.next;
        // }
        // if (curr.next) {
        //     curr.next = curr.prev;
        // }

        // Unlink node
        curr.next = curr.prev = undefined;

        return curr.value;
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            throw new Error("Invalid index.");
        } else if (this.length == 0) {
            throw new Error("No items to get.");
        }

        let node = this.head as Node<T>;
        //#mistake here I was checking until this.length - 1
        for (let i = 0; i < idx; i++) {
            if (node?.next) {
                node = node.next;
            }
        }
        if (node?.value) {
            return node.value;
        }

        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (this.length === 0) throw new Error("No items to remove.");
        if (idx < 0 || idx > this.length - 1) {
            throw new Error("Index is out of array bounds.");
        }

        let node = this.head;
        for (let i = 0; i < idx; i++) {
            node = node?.next;
        }

        if (this.length - 1 == 0) {
            const val = this.head?.value;
            this.length--;
            this.head = this.tail = undefined;
            return val;
        }

        if (!node) return;

        this.length--;
        // Adjust links for surrounding nodes
        // this is how I did it
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        // node was the head
        if (node == this.head) {
            this.head = node.next;
        }

        // node was the tail
        if (node == this.tail) {
            this.tail = node.prev;
        }

        // Unlink node
        node.next = node.prev = undefined;

        return node.value;
    }
}

// lil fn i made
// insertAfterAt(item: T, idx: number): void {
//     // By prime
//     if (this.length == 0) {
//         this.prepend(item);
//         return;
//     } else if (idx == this.length) {
//         this.append(item);
//         return;
//     } else if (idx > this.length) {
//         throw new Error("Specified index does not exist.");
//     }

//     // For loop until desired node
//     const node = { value: item } as Node<T>;
//     let curr = this.head;
//     //              By prime
//     for (let i = 0; curr && i < idx; i++) {
//         if (curr?.next) {
//             curr = curr.next;
//         }
//     }

//     if (curr) {
//         this.length++;

//         let toReplaceNextTemp = curr.next;
//         // Attach the node prev and next
//         node.prev = curr;

//         if (toReplaceNextTemp) {
//             node.next = toReplaceNextTemp;
//         }

//         // Attach the moved node next to be the new node
//         curr.next = node;

//         // Attach the reference.next.prev to be the node
//         // I initially checked if 'newNode.next?.prev'
//         // But prev does not have to exist for this to move forward, since
//         // the value might not have a 'prev' before
//         if (toReplaceNextTemp) {
//             toReplaceNextTemp.prev = node;
//         }
//     }
// }
