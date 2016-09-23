/*
 *  Marshall Taylor
 *  CIP 228
 *  Ct 6 P 1
 */

/*  There is not much logic here yet.  My first attempts to do
 *  anything hit a brick wall, so I started researching
 *  and doing some trial & error.  The following statement,
 *  taken right from the text, and identical to another
 *  student's (save the variable name), does not work:
 *
 *  var mainForm = document.getElementById("mainForm");
 *  
 *  His program returns an object (I think) and I get NULL.
 *  I tried it  on Safari, FireFox, FireFox Developer, Chrome,
 *  and Opera. I believe all are up to date.
 *  I tried literally dozens of variations of that stmt and
 *  this statment:
 *  
 *  var textTag = document.getElementsByTagName("input");
 */  

    // set empty backgrounds to red
    function RedBackground(e, f) {
        var backColor = "#800000";
        
        // temp variable value checking  WHY null?
        document.write("mainForm: " + e + " &nbsp textTag: " + f + " &nbsp f len: " + f.length);
        
        // step throught array of tags
        // f.length = 0  because of NULL
        // should not "f" / "textTag" not return an array
        // of f / textTag ie f[i] / textTag[i] ?
        for (i = 0; i <= f.lenght ; i++) {
            console.log (i = " textTag[" + i + "]: " + f[i]);
            f[i].style.backgroundcolor = backColor;
        }
    }

var backColor = "#800000";
var mainForm = document.getElementById("mainForm");
var textTag = document.getElementsByTagName("input");

RedBackground(mainForm, textTag);

    // another value check, getting desperate
    console.log("mainForm: " + mainForm + "  textTag: " + textTag);

/* testing 1 2 .. these were originally textTag.addE....
 * they / one would display but throw an error.??
 * Too many edits between then and now.
 */

//var textTag.addEventListener("click", alert('Hello There'));
//var textTag.addEventListener("mouseover", alert("Good-by"));

/*  Attemps include: (signs of desperation).
 *  These taken out of line, at one time or another, had varing
 *  degrees of success, but none operated in context error free
 *  most were executed with a MessageBox.Show()
 *  for these, varible names have changes textTag is now input
 *
 *  textTag.onclick = myEvent(textTag)
 *  textTag.style.color = "#800000";
 *  textTag.style.backgroundColor = "#800000";
 *
 *  document.getElementById("required").innerHTML = " background.Color = #800000";
 *
 *  var oldTag = textTag.innerHTML;
 *  required.innerHTML = oldTag + " background.Color = #800000";
 *
 *  textTag.style.backgroundColor = "#800000";
 *  
 */