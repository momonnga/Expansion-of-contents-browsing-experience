document.body.appendChild(function(){
  canEx = document.createElement("canvas");

canEx.id="canex"; 
canEx.width=0;
canEx.height=0;
canEx.style.position="fixed";
canEx.style.left="0";
canEx.style.top="0";
  //src = "var ws = new WebSocket('ws://localhost:6556'); ws.onmessage ="+code.toString();
  return canEx;
}()
);