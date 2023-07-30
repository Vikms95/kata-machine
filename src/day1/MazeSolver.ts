const dir = [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
];

//  My attempt (passed but not using prev and next of recursive stack)
// export default function solve(
//     maze: string[],
//     wall: string,
//     start: Point,
//     end: Point,
//     path: Point[] = [],
// ): Point[] {
//     // recursive case
//     if (!path.length) {
//         path.push(start);
//         return solve(maze, "x", start, end, path);
//         // base case
//     } else if (start.x == end.x && start.y == end.y) {
//         return path;
//     }

//     for (let index = 0; index < dir.length; index++) {
//         const coords = { ...start };
//         const x = coords.x + dir[index].x;
//         const y = coords.y + dir[index].y;

//         const square = maze?.[y]?.[x];
//         const isTouched = path.some((point) => point.x == x && point.y == y);

//         // wall            // already walked // out of bounds
//         if (square == wall || isTouched || typeof square == "undefined") {
//             continue;
//         }

//         path.push({ x, y });
//         return solve(maze, "x", { x, y }, end, path);
//     }

//     return path;
// }

// Prime solution using a recursive stack
function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Check out of bounds
    // Assuming cuboid maze
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // Hit wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // Found end
    if (curr.x == end.x && curr.y == end.y) {
        path.push(end);
        return true;
    }

    // Already seen
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // We mark it as seen
    seen[curr.y][curr.x] = true;

    // Add current to the stack
    path.push(curr);

    for (let index = 0; index < dir.length; index++) {
        // Check for each direction and return true
        // If any of the nested walks returns false, the stack will unwrap and go check the next
        // position after the one it was checked on that precise walk call
        if (
            walk(
                maze,
                wall,
                { x: curr.x + dir[index].x, y: curr.y + dir[index].y },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
) {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    // Initialize virtual scenery
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
