// Implement quick_sort, qs and partition all by yourself, start with pseudocode
// qs takes the array that needs to be sorted

// Initiate recursion
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
export function qs(arr: number[], lo: number, hi: number): void {
    // If two elements are left int he arr, lo and hi will cross, return
    if (lo > hi) return;

    // What am I missing here

    let newPivot = partition(arr, lo, hi);

    // Right
    qs(arr, newPivot + 1, hi);

    // Left
    qs(arr, 0, newPivot - 1);
}
export function partition(arr: number[], lo: number, hi: number): number {
    // value to compare
    const pivot = arr[hi];

    // Where to start to count the next new pivot
    let newPivot = lo - 1;

    // Starting from lo in the array, get to the hi index
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            // Increase the pivot to start with, since we start out of the bounds of the arr
            newPivot++;

            // Exchange arr[hi] with the value in arr[newPivot]
            // Temporarely store the value to use it later where arr[newPivot] was
            const temp = arr[i];
            // Add arr[newPivot] to arr[hi]
            arr[i] = arr[newPivot];
            arr[newPivot] = temp;
        }
    }

    // Now all elements to the left of arr[newPivot] are lower than pivot
    // Move the newPivot sorted element to the first not sorted element (will be higher than pivot)
    newPivot++;
    // We exhange arr[newPivot] with arr[hi]
    arr[hi] = arr[newPivot];
    // And we move pivot where arr[newPivot] was
    arr[newPivot] = pivot;

    // Now all the elements to the left of pivot are lower and to the right are higher
    // Now return the value in which to dissect this
    return newPivot;
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
//
//
//
//
//
//
// //
//
//
//
//
//
//
// //
//
//
//
//
//
//
// //
//
//
//
//
//
//
// //
//
//
//
//
//
//
// //
//
//
//
//
//
//
// //
//
//
//
//
//
//
//
// export default function quick_sort(arr: number[]): void {
//     // Start the recursion with calling the function with the whole array
//     qs(arr, 0, arr.length - 1);
// }

// function qs(arr: number[], lo: number, hi: number) {
//     // Base case on which I will be returning from the recursion
//     // This when we reach the leaves of the recursion, when the array reaches 2 indices
//     // and there is nothing to return
//     if (lo > hi) return;

//     const indexToPartition = partition(arr, lo, hi);
//     qs(arr, lo, indexToPartition - 1);
//     qs(arr, indexToPartition + 1, hi);
// }

// function partition(arr: number[], lo: number, hi: number) {
//     const pivot = arr[hi];
//     let indexToPartition = lo - 1;

//     for (let i = lo; i < hi; i++) {
//         // If an index of an array is lower than pivot, move it
//         // You are getting confused thinking that all the elements on the array that are lower are on the left.
//         // This is just making sure that if the arr[i] is lower or equal to the pivot, put it always to the left! (the lower
//         // elements on the left of the pivot do not have to be sorted)
//         if (arr[i] <= pivot) {
//             indexToPartition++;
//             // Swap the arr[i] with the arr[indexToPartition]
//             const temp = arr[i];
//             arr[i] = arr[indexToPartition];
//             arr[indexToPartition] = temp;
//         }
//     }
//     // Now the pivot element, which was initially the arr[hi] (so it is the last element) is placed inbetween all
//     // all its lowest elements and all its highest elements. low elements are on the left (they are all the ones are on the left)
//     // of the indexToPartition and the other ones are to the left. The element on indexToPartition has to be higher since it was not sorted
//     // so it is placed where the high was.

//     // Here we asume that indexToPartition is one of the sorted elements after the for loop. So we need to increase it once more.
//     // Then we swap that number than is higher than pivot with the pivot itself, which is still equal to arr[hi], the last index.
//     indexToPartition++;
//     arr[hi] = arr[indexToPartition];
//     arr[indexToPartition] = pivot;
//     return indexToPartition;
// }

//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// What is 'idxToPartition' and what is 'i' troughout the iteration?
// idxToPartition =  the index where the next set of 2 arrays will be splitted to, this will be increased each time i finds a number lower than pivot
// pivot = previous idxToPartition index for first qs and hi for second qs. This one will be static throughout all the iteration
// i = the index iterating once on the array that will try to find numbers

//Rule: everything to the left of the pivot needs to be lower or equal to pivot, to the right has to be higher

// function qs(arr: number[], lo: number, hi: number): void {
//     // If this happens, we can stop recursing
//     if (lo >= hi) {
//         return;
//     }

//     // Else
//     // Get the pivot index
//     // This is going to do the weak sort, position the pivot in the right spot, then return the pivot's index
//     const pivotIdx = partition(arr, lo, hi);

//     // Execute recursively
//     // Weak sort on left side
//     qs(arr, lo, pivotIdx - 1);
//     // Weak sort on right side
//     qs(arr, pivotIdx + 1, hi);
// }

// This just executes a weak sort (one passing) and return the correct index (which will be used as pivot)
// The idxToPartition is the lo + the amount of numbers that were ordered within the for loop in this function
// It will indicate to the following 2 qs functions which is the middle in which you have to start either left or right of the array
// function partition(arr: number[], lo: number, hi: number): number {
//     // Pivot in this example is always the highest element in the array
//     // This is the element that we'll be comparing against
//     const pivot = arr[hi];

//     // We index the value of low as an initiator, acocunting for the lo position on the current splitted array
//     // this will later be used to tell qs function where the pivot index for each quick_sort is
//     let idxToPartition = lo - 1;
//     //

//     // We need to walk from the low to the high, but not including the high since that is the pivot
//     // Effectively, each time an element is found, we change the element where it will be put to lo + idx and index
//     // will increase on each positioning until idx
//     for (let i = lo; i < hi; i++) {
//         // If i is lower or equal than pivot
//         if (arr[i] <= pivot) {
//             // idx is only increased whenever we find an element lower than pivot
//             // hence idx will only increase on each element found which is lower than pivot
//              this is actually moving items to the right of the array!!!!
//             idxToPartition++;

//             // swap the found element with the idx which increases on each element found
//             const tmp = arr[i];
//             arr[i] = arr[idxToPartition];
//             arr[idxToPartition] = tmp;
//         }
//     }

//     // after one for loop, increment idx once more
//     idxToPartition++;
//     // and assign to pivot where the idx was after the for loop + extra incrementing
//     arr[hi] = arr[idxToPartition];
//     // and assign to idx to the pivot
//     arr[idxToPartition] = pivot;

//     return idxToPartition;
// }

// My attempt xdd
//     // Get random pivot within the array
// ? Why is the pivot assumed to be sorted?(primeagen says so) i dont understand
// Create two arrays from left and right of the pivot
// ? How do I recursively call these 2 arrays? while loop of 2?
// If elements in current array are sorted return

// Get random index from within the array length range
// const length = arr.length;
// const pivot = arr[Math.floor(Math.random() * length)];
// // Create first array
// const newArr = [];
// const left = [];
// const right = [];

// for (let i = 0; i < pivot; i++) {
//     left.push(arr[i]);
// }
// for (let i = pivot + 1; i < length; i++) {
//     right.push(arr[i]);
// }
// newArr.push(left, right);

// for (let i = 0; i < newArr.length; i++) {
//     quick_sort(newArr);
//     // do the sort

//     for (let j = 0; j < newArr[i]; j++) {
//         if (newArr[i][j] > newArr[i + 1][j]) {
//             const temp = newArr[i][j];
//             newArr[i] = newArr[i + 1];
//             newArr[i + 1] = temp;
//         }
//     }
// }
