import MinHeap from "@code/MinHeap";

test("min heap", function () {
    const heap = new MinHeap();

    expect(heap.length).toEqual(0);
    console.log(heap);

    heap.insert(5);
    console.log(heap);
    heap.insert(3);
    console.log(heap);
    heap.insert(69);
    console.log(heap);
    heap.insert(420);
    console.log(heap);
    heap.insert(4);
    console.log(heap);
    heap.insert(1);
    console.log(heap);
    heap.insert(8);
    console.log(heap);
    heap.insert(7);
    console.log(heap);

    expect(heap.length).toEqual(8);
    console.log(heap);
    expect(heap.delete()).toEqual(1);
    console.log(heap);
    expect(heap.delete()).toEqual(3);
    console.log(heap);
    expect(heap.delete()).toEqual(4);
    console.log(heap);
    expect(heap.delete()).toEqual(5);
    console.log(heap);

    expect(heap.length).toEqual(4);
    console.log(heap);

    expect(heap.delete()).toEqual(7);
    console.log(heap);
    expect(heap.delete()).toEqual(8);
    console.log(heap);
    expect(heap.delete()).toEqual(69);
    console.log(heap);
    expect(heap.delete()).toEqual(420);
    console.log(heap);
    expect(heap.length).toEqual(0);
    console.log(heap);
});
