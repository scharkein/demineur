const scanArea = (grid) => {
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < grid.length; colIndex++) {
            if (grid[rowIndex][colIndex] === "B") {
                // en haut
                if (typeof grid[rowIndex-1]?.[colIndex] === "number") { /* gerer les bordure (haut) si existe pas return pas def */
                    grid[rowIndex-1][colIndex]++; /* ajouter 1 au dessus de B */
                }
                //en haut a droite
                if (typeof grid[rowIndex-1]?.[colIndex+1] === "number") { 
                    grid[rowIndex-1][colIndex+1]++;  
                }
                // a droite
                if (typeof grid[rowIndex]?.[colIndex+1] === "number") {  
                    grid[rowIndex][colIndex+1]++;  
                }
                //en bas a droite
                if (typeof grid[rowIndex+1]?.[colIndex+1] === "number") {  
                    grid[rowIndex+1][colIndex+1]++;  
                }
                //en bas
                if (typeof grid[rowIndex+1]?.[colIndex] === "number") {  
                    grid[rowIndex+1][colIndex]++;  
                }
                //en bas a gauche
                if (typeof grid[rowIndex+1]?.[colIndex-1] === "number") {  
                    grid[rowIndex+1][colIndex-1]++;  
                }
                // a gauche
                if (typeof grid[rowIndex]?.[colIndex-1] === "number") {  
                    grid[rowIndex][colIndex-1]++;  
                }
                //en haut a gauche
                if (typeof grid[rowIndex-1]?.[colIndex-1] === "number") {  
                    grid[rowIndex-1][colIndex-1]++;  
                }
                
            }
        }
    }
}

export default scanArea;
