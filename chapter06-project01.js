
/*  Marshall Taylor
    CIP 228
    Chapter 6 Project 1
*/


document.getElementById("mainForm").onsubmit = function(e) {
var hiLite = document.getElementById("hiLite").value;
//  var rectangleHiLite = document.getElementById("rectangleHiLite").value;

    if ( (hiLite == null) || (hiLite == "") ) {
        e.preventDefault();
        alert ("You must enter Title, Description, & √ License agreement");

        var colorTag = document.getElementById("hiLite");
        colorTag.className = "red";
        
/*  none of these returns a value (except "hiLite")
 *  how do we terminate the "loop"
 *  also the rectangel refuses to edit
 */

/*
  console.log ('hiLite');
  console.log (colorTag);
  console.log (hiLite);
  console.log (hiLite.value);
  console.log (hiLite.Text);
  console.log (colorTag);
*/

    }

    document.getElementById("hiLite").onkeydown = function(e) {
        var colorTag = document.getElementById("hiLite");
        colorTag.className = "required";
        
    }

//  console.log (colorTag)

 }
 
/*
document.getElementById("mainForm").onsubmit = function(e) {
  var rectangleHiLite = document.getElementById("rectangleHiLite").value;

    if ( (rectangleHiLite == null) || (rectangleHiLite == "") ) {
        e.preventDefault();
        alert ("You must enter √ the License agreement");

        var rectangleColor = document.getElementById("rectangleHiLite");
        rectangleColor.className = "red";

    }

    document.getElementById("rectangleHiLite").onkeydown = function(e) {
        var rectangleColor = document.getElementById("rectangleHiLite");
        rectangleColor.className = "required";
    }

//  console.log (colorTag)

 }
*/
/*
console.log (mainForm);
console.log(typeof mainForm);
*/
