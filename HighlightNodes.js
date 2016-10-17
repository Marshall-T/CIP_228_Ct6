/*  Marshall Taylor
    CIP 228
    Chapter 6 Project 1
*/

window.onload = function () {
    
    var txt = "";    
    var nodeArray = new Array();

    //  load the array - finally figure the proper single step way to do this!
    for (i = 0; i < document.getElementsByTagName("*").length; i++) {
        if (i > 4) {
            //  Add the node to an array and increment array offset
            nodeArray.push (document.getElementsByTagName("*")[i].nodeName);
        }
    }

        console.log ('**X**');
        console.log (nodeArray);

        //  activate the style
    var showNode = function (element) {
        element.classList.add ("hoverNode");
    }

    //  de-activate the style
    var removeNode = function (element) {
        element.classList.remove("hoverNode");
    }

    //  THIS IS A MESS, APPEND IS NOT RIGHT BUT TRYING
// Loop through node array and append the child node with the node type, document.createElement

    document.getElementById("calendar").onmouseover = function() {
        var error = false;
            showNode (document.getElementsByTagName("*")[i].nodeName);
        return !error;
        }
        
    document.getElementById("calendar").onmouseout = function() {
        var error = false;
            removeNode (document.getElementsByTagName("*")[i].nodeName);
        return !error;
        }
        
    document.getElementById("form").onmouseover = function() {
        var error = false;
            showNode (document.getElementsByTagName("*")[i].nodeName);
        return !error;
        }
        
    document.getElementById("form").onmouseout = function() {
        var error = false;
            removeNode (document.getElementsByTagName("*")[i].nodeName);
        return !error;
        }
        
//---------------------------------------------------

    //  trying to find a node ?
    for (var i = 0; i < nodeArray.length; i++){
        var oldTag = document.getElementsByTagName("*")[i];
//        var oldTxt = oldTag.innerHTML;
        var newTxt = '<' + nodeArray[i] + ' class="hoverNode"></nodeArray[i]>';
 
    var node = document.createElement("nodeArray[i]");
    var textnode = document.createTextNode(' class="hoverNode"');
    node.appendChild(textnode);
    document.getElementsByTagName("*")[i].appendChild(node);
 
  }
}
// Loop through node array and append the child node with the node type, document.createElement

