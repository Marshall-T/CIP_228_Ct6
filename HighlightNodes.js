/*  Marshall Taylor
    CIP 228
    Chapter 6 Project 1
*/
txt = "";

var aList = document.getElementsByTagName("*");

for (i = 0; i < aList.length; i++) {
    if (i > 4) {
        txt = "Name = " + aList[i].nodeName + " Type = " + aList.nodeType;
        console.log (txt);
        console.log (aList[i]);
    }
}


/*
console.log ("* aList");
console.log (aList[5].innerHTML);
console.log (aList.length);
console.log (aList.item);
/*

*/