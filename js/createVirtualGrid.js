/**
 * 3x3
 * [
 * [0,0,0],//row/ligne
 * [0,0,0],//row/ligne
 * [0,0,0],//row/ligne
 * ]
 */

const createVirtualGrid = () => {
    const gridSize = 10;
    const grid = [];
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        const row = [];
        for ( let colIndex = 0; colIndex < gridSize; colIndex++) {
            row.push(0);
        }
        grid.push(row);
    }
    return grid;

};

export default createVirtualGrid;