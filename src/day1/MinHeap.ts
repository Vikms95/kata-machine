export default class MinHeap {
    public length: number;
    public data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }
    // Recursive way
    insert(child: number) {
        this.data.push(child);
        this.length++;
        // Get the last index of the array and heapify up
        this.heapifyUp(this.length - 1);
    }

    private heapifyUp(idx: number) {
        // Last index on first call, parent on recursive calls
        const parent = this.parent(idx);
        // If we reach the top of the MinHeap
        if (parent < 0) return;

        // If parent index is higher than current index
        if (this.data[parent] > this.data[idx]) {
            // Swap
            const temp = this.data[parent];
            this.data[parent] = this.data[idx];
            this.data[idx] = temp;

            // Recurse
            this.heapifyUp(parent);
        }
    }

    delete(): number {
        // If no elements, nothing to delete, leave
        if (this.length == 0) return -1;

        // Get first element
        const out = this.data[0];
        this.length--;
        // If after decreasing length is 0, just do the simplemway
        if (this.length == 0) {
            this.data = [];
            return out;
        }

        // Give the first element the value from the last element
        // this.length instead of this.length -1 since we have already decreased the length here
        this.data[0] = this.data[this.length];

        // Heapify starting from top
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        // Get both children
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        // If idx is beyond the length or left child index is beyond the length, done
        if (idx >= this.length || lIdx >= this.length) return;

        // Get the values to compare
        const lValue = this.data[lIdx];
        const rValue = this.data[rIdx];
        const idxValue = this.data[idx];

        if (lValue > rValue && idxValue > rValue) {
            // If left and current are higher than right
            // Swap current and right to keep lowest on right
            this.data[idx] = rValue;
            this.data[rIdx] = idxValue;
            // Go down from the swapped value
            this.heapifyDown(rIdx);
        } else if (rValue > lValue && idxValue > lValue) {
            // If right and current are higher than left
            // Swap current and left to keep lowest on left
            this.data[idx] = lValue;
            this.data[lIdx] = idxValue;
            // Go down from the swapped value
            this.heapifyDown(lIdx);
        }
    }

    private parent(idx: number) {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number) {
        return 2 * idx + 1;
    }
    private rightChild(idx: number) {
        return 2 * idx + 2;
    }

    // Iterative way
    // insert(child: number): void {
    //     if (!this.data.length) {
    //         this.length++;
    //         this.data.push(child);
    //     } else {
    //         this.length++;
    //         this.data.push(child);

    //         let childIdx = this.data.length - 1;
    //         // (i - 1 / 2)
    //         let parentIdx = Math.floor((childIdx - 1) / 2);
    //         let parent = this.data[parentIdx];

    //         // We check if childIdx is higher than 0 to prevent from trying
    //         // to add pass the root of the Heap. If we were at the children of the root
    //         // ((i - 1) / 2) would give us a negative number, trying to add out of bounds of the array
    //         while (parent > child && childIdx > 0) {
    //             // swap parent with child value
    //             const temp = this.data[childIdx];
    //             this.data[childIdx] = this.data[parentIdx];
    //             this.data[parentIdx] = temp;

    //             // Update indices
    //             childIdx = parentIdx;
    //             parentIdx = Math.floor((childIdx - 1) / 2);
    //             parent = this.data[parentIdx];
    //         }
    //     }
    // }
    // delete(): number | undefined {
    //     if (!this.data.length) return;
    //     // Delete the root
    //     // this.unshift
    //     // Do iteratively
    // }
    // peek(): number | undefined {
    //     if (!this.data.length) return;
    //     return this.data[0];
    // }
}
