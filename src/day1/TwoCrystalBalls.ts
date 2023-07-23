// [f,f,f,t.... t,t,t]
export default function two_crystal_balls(breaks: boolean[]): number {
    // Solution with normal binary search and progressing with square root
    const jump = Math.floor(Math.sqrt(breaks.length));
    let i = jump;

    // Step the square root of n until the first ball breaks
    for (; i < breaks.length; i += jump) {
        if (breaks[i]) {
            break;
        }
    }

    // It broke, go back to the previous safe position
    i -= jump;

    //# This is just a normal loop but going step by step until either the j is too far or the i has surpassed the array length

    // Now with the second ball
    // J from 0, while J is lower than square root of length, each iteration increase by 1
    // I from the last safe position, while
    for (let j = 0; j < jump && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

// Solution with normal binary search
// let low = 0;
// let high = breaks.length;

// while (low < high) {
//     //#MISTAKE Here I did low - (high...)
//     let middle = Math.floor(low + (high - low) / 2);

//     let value = breaks[middle];
//     let prevValue = breaks[middle - 1];
//     // Trying to find the true that has a false right behind
//     if (value == true && prevValue == false) {
//         return middle;
//     } else if (value == true) {
//         high = middle;
//     } else if (value == false) {
//         low = middle + 1;
//     }
// }
