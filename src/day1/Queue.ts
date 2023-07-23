type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        // If no tail, we are on a 0 length Queue, so initialize tail and head

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        // Update the tail next
        this.tail.next = node;

        // Tell the queue that tail is now the node
        this.tail = node;

        // Now tail.next is undefined since it is now pointing to 'node'
        // instead of whatever was tail before assigning node to it
    }
    deque(): T | undefined {
        // If Queue has no head I cannot return a value
        if (!this.head) {
            return;
        }

        // Decrease length (this is done internally by arrays)
        this.length--;

        // Save the shifted value and assign the value of head.next on place of the shifted value
        const head = this.head;
        this.head = this.head?.next;

        // In C/C++, you would have to free the memory of head.next
        // head.next = undefined

        // Resets queue tail and head in case of length 0, otherwise enqueing func won't initialize the array
        // correctly if I enqueue again
        if (this.length == 0) {
            this.head = this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    peekTail(): T | undefined {
        return this.tail?.value;
    }
}

// Enqueueing from the front
// const temp = this.tail;
// this.head.value = item;
// this.head.next = temp;

// My approach on enqueue
// if (!this.head) {
//     this.length++;
//     this.head = { value: item, next: this.tail };
//     this.tail = { value: item, next: undefined };
//     return;
// } else {
//     if (!this.tail) {
//         return;
//     }

//     this.length++;
//     const temp = this.tail;
//     this.tail.value = item;
//     temp.next = this.tail;
// }
