'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const DEFAULT_GRID_WIDTH = 16, MAX_GRID_WIDTH = 100;

    const CSS_SELECTOR_GRID = ".grid";
    const CSS_SELECTOR_TOGGLE_GRID_LINE = ".toggle-grid-lines";

    let gridWidth = DEFAULT_GRID_WIDTH;
    let showGridLines = true;

    function createGrid(width = DEFAULT_GRID_WIDTH) {
        const grid = document.querySelector(CSS_SELECTOR_GRID);
        const newGrid = grid.cloneNode(false);

        const CSS_CLASS_ROW = "row", CSS_CLASS_CELL = "cell";
        const CSS_CLASS_LINE_VISIBLE = "line-visible";

        for (let i = 1; i <= width; ++i) {
            const row = document.createElement("div");

            row.classList.add(CSS_CLASS_ROW);

            if (showGridLines) row.classList.add(CSS_CLASS_LINE_VISIBLE);

            for (let j = 1; j <= width; ++j) {
                const cell = document.createElement("div");

                cell.classList.add(CSS_CLASS_CELL);

                if (showGridLines) cell.classList.add(CSS_CLASS_LINE_VISIBLE);

                row.appendChild(cell);
            }

            newGrid.appendChild(row);
        }

        grid.replaceWith(newGrid.cloneNode(true));

        const gridSizeInfo = document.querySelector(".grid-size");

        gridSizeInfo.textContent = `${width} × ${width}`;

        gridWidth = width;
    } createGrid();

    function setGridLineToggleButtonText() {
        const button = document.querySelector(CSS_SELECTOR_TOGGLE_GRID_LINE);

        button.textContent = (showGridLines ? "Hide" : "Show");
        button.textContent += " Grid Lines";
    } setGridLineToggleButtonText();
})