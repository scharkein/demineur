import createVirtualGrid from "./createVirtualGrid.js";
import addBugs from "./addBugs.js";
import scanArea from "./scanArea.js";
import createHTMLGrid from "./createHTMLGrid.js";
import addEventListeners from "./addEventListeners.js";

// 1- creer une grille (virtuelle) de jeu vide (avec 100 cases)
const grid = createVirtualGrid();

// 2- Ajouter les 9 mines dans la grille de maniere random
// // generer 9 mines
// // placer de maniere aléatoire
addBugs(grid);

// 3- scanner la zone (pour ajouter le nombre de mines autour d'une case)
scanArea(grid);
// 4- creer une grille html (celle qui sera visible sur la page)
createHTMLGrid(grid);
// 5- ajout des évenement de clics(pour ajouter un drapeau ou devoiler une case)
addEventListeners(grid);
console.table(grid);
