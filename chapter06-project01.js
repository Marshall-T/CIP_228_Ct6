
/*  Marshall Taylor
    CIP 228
    Chapter 6 Project 1
*/

window.onload = function () {
    //  cashe form status
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var aCkBox = document.getElementById("aCkBox");
    
    //  activated title box, clear it for typing
    title.onfocus = function() {
        removeRed(title.parentNode);
        }
    //  activated description box, clear it for typing
    description.onfocus = function(e) {
        removeRed(description.parentNode);
        }
    //  changed checkBox box, clear it
    aCkBox.onchange = function(e) {
        removeRed(aCkBox.parentNode);
        }

        //  this does all the clearing of the red
    var removeRed = function (element) {
        element.classList.remove("red");
    }

    //  this set background to red (called if empty)
    var applyRed = function (element) {
        element.classList.add ("red");
    }

//  the book shows not just the field but also the parent background as
//  red also needed to set the fields to transparent to get the red to
//  come through in a single step
    document.getElementById("mainForm").onsubmit = function() {
        var error = false;

        //  check for empty title field and red it
        if (title.value === null || title.value === "") {
            error = true;
            applyRed (title.parentNode);
        }
        //  check for empty description field and red it
        if (description.value === null || description.value.trim() === "") {
            error = true;
            applyRed (description.parentNode);
        }
        //  check for empty check box and red it
        if (aCkBox.checked === false) {
            error = true;
            applyRed (aCkBox.parentNode);
        }
        //  send results to html
        return !error;
    }
}


