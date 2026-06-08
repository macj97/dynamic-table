/**
 * File: script.css
 * GUI Assignment: HW3 - Creating an Interactive Dynamic Table
 * Description: JavaScript file for Assignment 3
 * Joe Plummer, UMass Lowell Computer Science, joseph_plummer@student.uml.edu
 * Copyright (c) 2026 by Joe Plummer. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
 */

console.log("Starting...");

// let elements;
let minColNum, maxColNum, minRowNum, maxRowNum;

// Event listener for when Submit button is pressed
document.getElementById("submit-btn").addEventListener('click', function() {
    console.log("Hello");

    // getting the values from the form
    minColNum = document.getElementById("mincolval").value;
    console.log(minColNum);
    maxColNum = document.getElementById("maxcolval").value;
    console.log(maxColNum);
    minRowNum = document.getElementById("minrowval").value;
    console.log(minRowNum);
    maxRowNum = document.getElementById("maxrowval").value;
    console.log(maxRowNum);
});


console.log("Ending...");