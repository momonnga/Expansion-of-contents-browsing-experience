document.body.appendChild(function(){
  canE = document.createElement("canvas");

canE.id="can"; 
canE.width=0;
canE.height=0;
canE.style.position="fixed";
canE.style.left="0";
canE.style.top="0";
  //src = "var ws = new WebSocket('ws://localhost:6556'); ws.onmessage ="+code.toString();
  return canE;
}()
);