// KEYS {
//// Formula mid: low - ( high - low) / 2
//// Remember: high is exclusive, low is inclusive (so to modify the low, you exclude the mid)
// }

export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    // While the low and the high don't clash (this will only happen when 1 element exists)
    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2);
        const value = haystack[mid];

        if (value === needle) {
            return true;
            // Lower than the desired value
        } else if (value < needle) {
            // Search right, from mid onwards (excluding the already checked mid)

            low = mid + 1;
            // Higher than the desired value
        } else if (value > needle) {
            // Search left, from mid backwards

            high = mid;
        }
    }

    return false;
}

// Try 1

// const middleIndex = Math.floor(haystack.length / 2);

// for (let i = 0; i < haystack.length; i++) {
//     const middle = haystack[middleIndex];

//     if (middle == needle) {
//         return true;
//     }

//     if (middle > needle) {
//         let newArray = [];

//         for (let j = 0; j < middleIndex; j++) {
//             newArray[j] = haystack[j + 1];
//         }

//         bs_list(newArray, needle);
//     }

//     if (middle < needle) {
//         let newArray = [];

//         for (let j = 0; j < middleIndex; j++) {
//             newArray[j] = haystack[j + middleIndex];
//         }

//         bs_list(newArray, needle);
//     }
// }
