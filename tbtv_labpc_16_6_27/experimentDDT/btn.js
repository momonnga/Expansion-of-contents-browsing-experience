document.body.appendChild(function(){
//var btn = document.createElement("BUTTON");        // Create a <button> element

var x = document.createElement("INPUT");
x.setAttribute("id","logFile");
x.setAttribute("type", "file");
x.setAttribute("onChange", "check()");
//x.setAttribute("onclick","alert('aiueo')");
var t = document.createTextNode("logFile");       // Create a text node
x.appendChild(t);                                // Append the text to <button>
document.body.appendChild(x);                    // Append <button> to <body>
  //src = "var ws = new WebSocket('ws://localhost:6556'); ws.onmessage ="+code.toString();

  return x;
}()
);