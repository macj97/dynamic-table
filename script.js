/**
 * File: script.css
 * GUI Assignment: HW3 - Creating an Interactive Dynamic Table
 * Description: JavaScript file for Assignment 3
 * Joe Plummer, UMass Lowell Computer Science, joseph_plummer@student.uml.edu
 * Copyright (c) 2026 by Joe Plummer. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
 */

/**
 * Still need to check if input is a number and not a string,
 * and need to check if min is less than max.
 * Need table to be scrollable if bigger than the screen,
 * with the first column and row fixed.
 */

console.log("Starting...");

// let elements;
let minColNum, maxColNum, minRowNum, maxRowNum;
let minColNum_e = false, maxColNum_e = false, 
    minRowNum_e = false, maxRowNum_e = false;
let table_container = document.getElementById("Table-container");

function withinBounds(x) {
    if (x < -50 || x > 50) {
        return false;
    }
    else {
        return true;
    }
}

function isMinLEMax(x, y) {
    if (x <= y) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * Function creates an element that shows an error message
 * @param   elem    element    element before the error element is being placed
 * @param   e       int        0-error message for bounds, 1-error message for min and max
 * @return  N/A
 */
function createErrorElement(elem, e) {
    const msg = document.createElement("p");
    msg.className = "error";
    switch (e) {
        case 0:
            msg.textContent = "Please enter a number between -50 and 50.";
            break;
        case 1:
            msg.textContent = "Minimum value has to be less than Maximum value.";
            break;
    }
    elem.after(msg);
}


function turnOffErrorMessages() {
    // turn all error messages off
    errors = document.getElementsByClassName("error");
    console.log(errors);
    if (errors.length >= 1) {
        for (let k = 0; k < errors.length; k++) {
            errors[k].style.display = "none";
        }
    }
}

// Event listener for when Submit button is pressed
document.getElementById("submit-btn").addEventListener('click', function() {
    console.log("Hello");

    // getting the values from the form (with error handling)
    minColNum = document.getElementById("mincolval").value;
    console.log(minColNum);
    if (!withinBounds(minColNum)) { // if not within bounds
        // if (!minColNum_e) { 
        //     createErrorElement(document.getElementById("mincolval"), 0);
        //     minColNum_e = true;
        // }
        turnOffErrorMessages();
        createErrorElement(document.getElementById("mincolval"), 0);
        return;
    }

    maxColNum = document.getElementById("maxcolval").value;
    console.log(maxColNum);
    if (!withinBounds(maxColNum)) { // if not within bounds
        // if (!maxColNum_e) {
        //     createErrorElement(document.getElementById("maxcolval"), 0);
        //     maxColNum_e = true;
        // }
        turnOffErrorMessages();
        createErrorElement(document.getElementById("maxcolval"), 0);
        return;
    }
    // if (!isMinLEMax(minColNum, maxColNum)) { // if min is not less than max
    //     createErrorElement(document.getElementById("maxcolval"), 1);
    //     maxColNum_e = true;
    //     return;
    // }

    minRowNum = document.getElementById("minrowval").value;
    console.log(minRowNum);
    if (!withinBounds(minRowNum)) {
        // if (!minRowNum_e) {
        //     createErrorElement(document.getElementById("minrowval"));
        //     minRowNum_e = true;
        // }
        turnOffErrorMessages();
        createErrorElement(document.getElementById("minrowval"), 0);
        return;
    }

    maxRowNum = document.getElementById("maxrowval").value;
    console.log(maxRowNum);
    if (!withinBounds(maxRowNum)) {
        // if (!maxRowNum_e) {
        //     createErrorElement(document.getElementById("maxrowval"));
        //     maxRowNum_e = true;
        // }
        turnOffErrorMessages();
        createErrorElement(document.getElementById("maxrowval"), 0);
        return;
    }

    

    // building the table
    console.log(table_container);
    table_container.innerHTML = ""
    const dTable = document.createElement("table");

    // first row:
    const headerRow = document.createElement("tr");
    const hiddenCell = document.createElement("th");
    hiddenCell.className = "hide-cell";
    headerRow.appendChild(hiddenCell);

    let i = minColNum;
    let j = minRowNum;
    for (i; i <= maxColNum; i++) {
        const headerCell = document.createElement("th");
        headerCell.textContent = i;
        headerRow.appendChild(headerCell);
    }
    dTable.appendChild(headerRow);

    // subsequent rows:
    for (j; j <= maxRowNum; j++) {
        const dRow = document.createElement("tr");
        const hCell = document.createElement("th");
        hCell.textContent = j;
        dRow.appendChild(hCell);
        for (i = minColNum; i <= maxColNum; i++) {
            const dCell = document.createElement("td");
            dCell.textContent = j * i;
            dRow.appendChild(dCell);
        }
        dTable.appendChild(dRow);
    }
    table_container.appendChild(dTable);
});


console.log(table);
console.log("Ending...");