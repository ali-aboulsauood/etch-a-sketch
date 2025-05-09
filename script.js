"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const DEFAULT_GRID_WIDTH = 16, MIN_GRID_WIDTH = 1, MAX_GRID_WIDTH = 100;

    const CSS_SELECTOR_GRID = ".grid";
    const CSS_SELECTOR_TOGGLE_GRID_LINE = ".toggle-grid-lines";

    const CSS_SELECTOR_GRID_SIZE = ".grid-size";

    const CSS_CLASS_ROW = "row", CSS_CLASS_CELL = "cell";
    const CSS_CLASS_LINE_VISIBLE = "line-visible";

    let cells = null;

    let gridWidth = DEFAULT_GRID_WIDTH;
    let showGridLines = true;

    let currentGrid = null;

    function createGrid(width = DEFAULT_GRID_WIDTH) {
        const grid = document.querySelector(CSS_SELECTOR_GRID);
        const newGrid = grid.cloneNode(false);

        for (let i = 1; i <= width; ++i) {
            const row = document.createElement("div");

            row.classList.add(CSS_CLASS_ROW);

            for (let j = 1; j <= width; ++j) {
                const cell = document.createElement("div");

                cell.classList.add(CSS_CLASS_CELL);

                if (showGridLines) cell.classList.add(CSS_CLASS_LINE_VISIBLE);

                row.appendChild(cell);
            }

            newGrid.appendChild(row);
        }

        grid.replaceWith(newGrid.cloneNode(true));

        const gridSizeInfo = document.querySelector(CSS_SELECTOR_GRID_SIZE);

        gridSizeInfo.textContent = `${width} × ${width}`;

        gridWidth = width;

        currentGrid = document.querySelector(CSS_SELECTOR_GRID);

        cells = document.querySelectorAll(`.${CSS_CLASS_CELL}`);
        cells.forEach(cell => cell.alpha = 1.0);

    } createGrid();

    const setGridSizeButton = document.querySelector(".set-grid-size");
    const toggleGridLineButton = document.querySelector(".toggle-grid-lines");
    
    function getGridWidth() {
        const gridSizeInfo = document.querySelector(CSS_SELECTOR_GRID_SIZE);
        const gridSizeInfoClone = gridSizeInfo.cloneNode(true);

        const gridSizeInput = document.createElement("input");

        gridSizeInput.type = "number";
        gridSizeInput.id = "grid-size-input";
        [gridSizeInput.min, gridSizeInput.max, gridSizeInput.value] = [MIN_GRID_WIDTH, MAX_GRID_WIDTH, DEFAULT_GRID_WIDTH];

        gridSizeInfo.replaceWith(gridSizeInput);

        function doAfterConfirm() {
            const newGridWidth = gridSizeInput.value;

            gridSizeInput.replaceWith(gridSizeInfoClone);

            const isAValidNumber = ( (newGridWidth !== "") && (!Number.isNaN(newGridWidth)) );
            const isNotDefaultWidth = (newGridWidth !== DEFAULT_GRID_WIDTH);
            const isInRange = ( (newGridWidth >= MIN_GRID_WIDTH) && (newGridWidth <= MAX_GRID_WIDTH) );

            if (isAValidNumber && isNotDefaultWidth && isInRange)
                createGrid(Number(newGridWidth));

            setGridSizeButton.onclick = getGridWidth;
        }

        setGridSizeButton.onclick = doAfterConfirm;

        gridSizeInput.addEventListener('keydown', (e) => {
            if (e.key === "Enter")
                doAfterConfirm();
        })
    } setGridSizeButton.onclick = getGridWidth;

    function setGridLineToggleButtonText() {
        const button = document.querySelector(CSS_SELECTOR_TOGGLE_GRID_LINE);

        button.textContent = (showGridLines ? "Hide" : "Show");
        button.textContent += " Grid Lines";
    } setGridLineToggleButtonText();

    function toggleGridLines() {
        const rows = document.querySelectorAll(`.${CSS_CLASS_ROW}`);

        if (showGridLines) {
            rows.forEach((row) => {
                row.classList.remove(CSS_CLASS_LINE_VISIBLE);
                    
                const cells = row.querySelectorAll(`.${CSS_CLASS_CELL}`);
                cells.forEach(cell => cell.classList.remove(CSS_CLASS_LINE_VISIBLE));
            });
        } else {
            rows.forEach((row) => {
                row.classList.add(CSS_CLASS_LINE_VISIBLE);

                const cells = row.querySelectorAll(`.${CSS_CLASS_CELL}`);
                cells.forEach(cell => cell.classList.add(CSS_CLASS_LINE_VISIBLE));
            })
        }

        showGridLines = !showGridLines;
        setGridLineToggleButtonText();
    } toggleGridLineButton.onclick = toggleGridLines;
})