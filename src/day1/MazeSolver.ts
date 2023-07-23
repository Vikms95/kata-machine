export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
    path: Point[] = [],
): Point[] {
    if (!path.length) {
        path.push(start);
        return solve(maze, "x", start, end, path);
    }
    if (start.x == end.x && start.y == end.y) {
        return path;
    }

    for (let index = 0; index < 4; index++) {
        const coords = { ...start };

        switch (index) {
            case 0:
                coords.x++;
                break;
            case 1:
                coords.y++;
                break;
            case 2:
                coords.x--;
                break;
            case 3:
                coords.y--;
                break;
        }

        const square = maze?.[coords.y]?.[coords.x];

        // wall,            // seen,           //out of bounds
        const isTouched = path.some(
            (idx) => idx.x == coords.x && idx.y == coords.y,
        );
        if (square == wall || isTouched || typeof square == "undefined") {
            continue;
        }

        path.push(coords);
        return solve(maze, "x", coords, end, path);
    }

    return solve(maze, "x", start, end, path);
}
