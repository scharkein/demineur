/**
 * [
 *  {col :3, row : 5},
 *  {col :1, row : 0},
 *  .....(x9)
 * ]
 * 
 */

const addBugs = (grid) => {
    const maxBugs = 15;

    const bugCoords = [];

    while(bugCoords.length < maxBugs) {
        const coord = getRandomCord(grid);
        bugCoords.push(coord);
    }

    for (const coord of bugCoords) {
        grid[coord.col][coord.row] = "B"
    }

    console.table(bugCoords);
};

const getRandomCord = (grid) => {
    const col = Math.floor(Math.random() * grid.length);
    const row = Math.floor(Math.random() * grid.length);

    return {col, row};
}

export default addBugs;