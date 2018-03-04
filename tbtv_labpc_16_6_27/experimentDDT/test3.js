document.body.appendChild(function(){
  canRE = document.createElement("canvas");

canRE.id="canR"; 
canRE.width=0;
canRE.height=0;
canRE.style.position="fixed";
canRE.style.left="0";
canRE.style.top="0";
  //src = "var ws = new WebSocket('ws://localhost:6556'); ws.onmessage ="+code.toString();
  return canRE;
}()
);