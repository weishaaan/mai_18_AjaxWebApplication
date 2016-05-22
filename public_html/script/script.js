function loadTxtDoc() {
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("txt").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "script/ajax_info.txt", true);
    xhttp.send();
}

function loadXmlDoc() {
    var xhttp, xmlDoc, txt, x, i;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        xmlDoc = xhttp.responseXML;
        txt = "";
        x = xmlDoc.getElementsByTagName("ARTIST");
        for (i = 0; i < x.length; i++) {
          txt = txt + x[i].childNodes[0].nodeValue + "<br>";
        }
        document.getElementById("cd").innerHTML = txt;
      }
    };
    xhttp.open("GET", "xml/cd_catalog.xml", true);
    xhttp.send();
}

function listBatFile(){
    window.location.href="listXML.html";
}

         
function callWebService(){
    
}