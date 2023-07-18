export default function bs_list(haystack: number[], needle: number): boolean {
    const middleIndex = Math.floor(haystack.length / 2);

    for (let i = 0; i < haystack.length; i++) {
        const middle = haystack[middleIndex];

        if (middle == needle) {
            return true;
        }

        const newArray = [];

        // We have to look the left part of the array
        if (middle > needle) {
            // Starting from right, while j is lower than the middleIndex, increase that index
            for (let j = 0; j < middleIndex; j++) {
                // Assign to starting from 0, the value of haystack 0 and keep incrementing
                newArray[j] = haystack[j];
            }

            bs_list(newArray, needle);
        }

        // We have to look the right part of the array
        if (middle < needle) {
            // Starting from middle, up until j is the same as the length of the array, keep incrementing
            for (let j = middleIndex + 1; j < haystack.length; j++) {
                // Assign to j(which is middleIndex for 0) the value of j - middleIndex
                // The value of the array from the middle going to the right, so
                newArray[j - middleIndex + 1] = haystack[j];
            }

            bs_list(newArray, needle);
        }
    }

    return false;
}
