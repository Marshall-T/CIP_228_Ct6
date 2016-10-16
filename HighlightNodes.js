/*  Marshall Taylor
    CIP 228
    Chapter 6 Project 1
*/

window.onload = function () {
    var txt = "";
    
    var aList = document.getElementsByTagName("*");
    
    var nodeArray = new Array();

    for (i = 0; i < aList.length; i++) {
        if (i > 4) {
                //  Add the node to an array and increment array offset
                nodeArray.push (aList[i].nodeName);
                if (aList[i].hasAttributes()) {
                    for (j = 0; j < aList[i].childNodes.length; j++) {
//                        if (aList[i].childNodes[j].nodeType === 3 ) {
  //                          console.log ('****');
    //                        console.log (aList[i].childNodes[j].nodeType);
      //                      console.log (aList[i].childNodes[j].nodeName);
        //                }
                    }
                }
//        txt = "Name " + i + " = " + aList[i].nodeName + " Type = " + aList[i].nodeType;
//        console.log (txt);
        }
    }

// Loop through node array and append the child node with the node type, document.createElement

    //  trying to find a node ?
    for (var i = 0; i < nodeArray.length; i++){
        //  trying to find a node ?
        txt = document.getElementsBytagName + " - " + nodeArray[i];
        console.log (txt);
//        document.getElementsByName.appendChild(nodeArray[i]);
    }
    
        console.log ('**X**');
        console.log (nodeArray);
}
// Loop through node array and append the child node with the node type, document.createElement
