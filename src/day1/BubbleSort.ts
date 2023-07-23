// improve this :)))
// Note: the first iteration will always bring the largest item in the last spot, the second will always bring
// the second last item sorted, and so on and so on...
// https://frontendmasters.com/courses/algorithms/bubble-sort/
export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
// Solution after watching pseudo

// let pointer = 0;
// let isSorted = false;
// let portionSorted = 0;
// let length = arr.length;
// let unsortedArrayLength = length - portionSorted;

// console.time("sort");
// while (!isSorted) {
//     if (pointer == unsortedArrayLength - 1) {
//         pointer = 0;
//         portionSorted++;
//     } else if (arr[pointer + 1] > arr[pointer]) {
//         pointer++;
//     } else {
//         const valueToPush = arr[pointer];
//         arr[pointer] = arr[pointer + 1];
//         arr[pointer + 1] = valueToPush;
//         pointer++;
//     }

//     for (let i = 0; i < unsortedArrayLength; i++) {
//         if (i == unsortedArrayLength - 1) {
//             isSorted = true;
//         } else if (arr[i] > arr[i + 1]) {
//             break;
//         }
//     }
// }
// console.timeEnd("sort");

// Second try
// let pointer = 0;
// let isSorted = false;
// let portionSorted = 0;
// let length = arr.length;
// let unsortedArrayLength = length - portionSorted;

// while (!isSorted) {
//     if (pointer == unsortedArrayLength - 1) {
//         pointer = 0;
//         portionSorted++;
//     } else if (arr[pointer + 1] > arr[pointer]) {
//         pointer++;
//     } else {
//         const valueToPush = arr[pointer];
//         arr[pointer] = arr[pointer + 1];
//         arr[pointer + 1] = valueToPush;
//         pointer++;
//     }

//     for (let i = 0; i < unsortedArrayLength; i++) {
//         if (i == unsortedArrayLength - 1) {
//             isSorted = true;
//         } else if (arr[i] > arr[i + 1]) {
//             break;
//         }
//     }
// }

// First try
// let pointer = 0;
// let isSorted = false;

// while (!isSorted) {
//     if (pointer == arr.length - 1) {
//         pointer = 0;
//     } else if (arr[pointer] < arr[pointer + 1]) {
//         pointer++;
//     } else {
//         const valToAdvance = arr[pointer];
//         arr[pointer] = arr[pointer + 1];
//         arr[pointer + 1] = valToAdvance;
//         pointer++;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 break;
//             }
//             if (i == arr.length - 1) {
//                 isSorted = true;
//             }
//         }
//     }
// }
