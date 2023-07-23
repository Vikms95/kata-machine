type Node<T> = {
    value: T;
    // This can either be next or prev, whatever is easier to understand for the programmer. Stacks are singly linked list
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        // if length 0
        const node = { value: item, next: undefined } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) {
            return;
        }

        this.length--;
        // Prime does it like this to avoid negative length
        // this.length = Math.max(0, this.length - 1);

        const poppedValue = this.head.value;
        this.head = this.head.next;

        return poppedValue;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
