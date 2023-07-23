export default class ArrayList<T> {
    public length: number;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {
        if (idx > this.length) {
            throw new Error("Index out of length");
        }

        for (let i = 0; i < length; i++) {
            const element = array[i];
        }
    }
    removeAt(idx: number): T | undefined {}
}
