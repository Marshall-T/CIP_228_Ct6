/*  Marshall Taylor
    CIP 228
    Chapter 6 Project 1
*/
var txt = "", txt2 = "";

var aList = document.getElementsByTagName("*");
var nodeArray = new Array();
var arrayOffset = 0;

for (i = 0; i < aList.length; i++) {
    if (i > 4) {
//        if (aList[i].nodeType === 3 ) {
            //  Add the node to an array and increment array offset
            nodeArray.push = aList[i].nodeName;
            arrayOffset++;
    txt = "Name = " + aList[i].nodeName + " Type = " + aList[i].nodeType;
    console.log (txt);
    txt2 = "Offset = " + arrayOffset + " Array = " + nodeArray[arrayOffset];
    console.log (txt2);
//    console.log (aList[i]);
//        }
    }
}
//Loop through node array and append the child node with the node type, document.createElement

/*
console.log ("* aList");
console.log (aList[5].innerHTML);
console.log (aList.length);
console.log (aList.item);
/*

*/