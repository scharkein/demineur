const createHTMLGrid = (grid) => {
    const html = [];

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < grid.length; colIndex++) {
            const divEl = document.createElement('div');
            divEl.classList.add("cell","cell-hidden",`cell-row-${rowIndex}-col-${colIndex}`);
            divEl.dataset.rowIndex = rowIndex;
            divEl.dataset.colIndex = colIndex;
            //divEl.textContent = grid[rowIndex][colIndex]; /* mettre numero dans les case en html*/
            html.push(divEl);


        }
    }

    document.querySelector('.grid').append(...html); /* .append(divEl1,divEL2,divEl3)  => .append(...html) */
};

export default createHTMLGrid;