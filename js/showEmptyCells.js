const showEmptyCells = (grid) =>{
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < grid.length; colIndex++) {
            if (grid[rowIndex][colIndex] === 0) {
                //cell-empty
                const el = document.querySelector(`.cell-row-${rowIndex}-col-${colIndex}`);
                el.classList.add('cell-empty');
                el.classList.remove('cell-hidden')
                
            }
            if (grid[rowIndex][colIndex] === 1){
                //cell-num
                const el = document.querySelector(`.cell-row-${rowIndex}-col-${colIndex}`);
                el.classList.add('cell-num','cell-num-1');
                el.textContent = "1";
            }

            if (grid[rowIndex][colIndex] === 2){
                //cell-num
                const el = document.querySelector(`.cell-row-${rowIndex}-col-${colIndex}`);
                el.classList.add('cell-num','cell-num-2');
                el.textContent = "2";
            }
        }
    }
}

export default showEmptyCells;