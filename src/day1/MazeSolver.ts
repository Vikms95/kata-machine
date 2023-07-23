const;
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
    path: Point[] = [],
): Point[] {
    if (!path.length) {
        path.push(start);
    }
    if (start.x == end.x && start.y == end.y) {
        return path;
    }

    for (let index = 0; index < 4; index++) {
        // Depending on index increase a value of start
        let { x, y } = { ...start };

        switch (index) {
            case 0:
                x++;
            case 1:
                y++;
            case 2:
                x--;
            case 3:
                y--;
        }

        // wall, seen, out of bounds
        if (
            maze?.[x]?.[y] == wall ||
            maze?.[x]?.[y] == "*" ||
            typeof maze?.[x]?.[y] == "undefined"
        ) {
            continue;
        } else {
            path.push({ x, y });
            return solve(maze, "x", { x, y }, end, path);
        }
    }

    return path;
    // base case
    // 2. the next coords equal those of a wall
    // 3. the next coords are already marked
    // 4. the next coords are out of bounds
}
