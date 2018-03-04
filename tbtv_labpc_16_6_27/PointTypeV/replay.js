document.body.appendChild(function(){
  sc = document.createElement("script");

var thread_id;
var ms;
var ms2;
//var id="sm26469989";
var id="sm9";
var nowURL=location.href;
var bar=nowURL.match(/(sm.+)/);
var urlT=nowURL.match(/\?url=(.*)/);
var exp="no";
var expM=nowURL.match(/.*(experiment).*/);
//var vposSend=1111111;
var vposSend=new Array();
var vposStartT=new Array();
var vposEndT=new Array();
var effect=new Array();
var startY=new Array();
var endY=new Array();
var effectT=new Array();
var countAjax=0;
//conso

if(bar!=null){
    id=bar[0];
}

if(expM!=null){
  exp=expM[1];
}

//var codeB ='function getTextFile(encd) {var myFile = document.getElementById("logFile").files[0];if (myFile.type.indexOf("text") == 0) {var reader = new FileReader();reader.onload = function(evt){var txt = evt.target.result; txt = txt.replace(/</g, "&lt;");txt = txt.replace(/>/g, "&gt;"); txt = "<p>MIME : " + myFile.type + "</p><pre>" + txt + "</pre>";document.getElementById("divAdd").innerHTML = txt;}reader.readAsText(myFile, encd);}}';
  var codeInitR="function initializeR(){canR=document.getElementById('canR');ctxR=canR.getContext('2d');try{player = document.getElementById('external_nicoplayer');}catch(e){}ww=window.innerWidth;wh=window.innerHeight;sw=window.screen.width;sh=window.screen.height;dateL=new Date();secondsL=dateL.getTime();spR1=new StarPre();spR2=new StarPre();spR3=new StarPre();spR4=new StarPre();spR5=new StarPre();spR6=new StarPre();spR7=new StarPre();spR8=new StarPre();spR9=new StarPre();spR10=new StarPre();spR11=new StarPre();spR12=new StarPre();spR13=new StarPre();spR14=new StarPre();spR15=new StarPre();spR16=new StarPre();spR17=new StarPre();spR18=new StarPre();spR19=new StarPre();spR20=new StarPre();canR.width=0;canR.height=0;}";
  var codeS="var StarPre=function(){this.x=Math.random()*400;this.y=Math.random()*400;this.vx=(Math.random()-0.5)*4;this.vy=(Math.random()-0.5)*4;this.w=Math.random()*150;this.h=Math.random()*150;this.r=Math.random()*30+25;this.angle2=Math.random()*10;if(Math.random()<0.5){this.speed=0.0628+(0.01)*Math.random();}else{this.speed=-(0.0628+(0.01)*Math.random());}\nfunction createStar(x,y,r,color){var c1 = createCordinate(r,-90);var c2 = createCordinate(r,-234);var c3 = createCordinate(r,-18);var c4 = createCordinate(r,-162);var c5 = createCordinate(r,-306);ctx.fillStyle = color;ctx.lineWidth = 0;ctx.beginPath();ctx.moveTo(x,y-r);ctx.lineTo(c1.x + x, c1.y + y);ctx.lineTo(c2.x + x, c2.y + y);ctx.lineTo(c3.x + x, c3.y + y);ctx.lineTo(c4.x + x, c4.y + y);ctx.lineTo(c5.x + x, c5.y + y);ctx.closePath();ctx.fill();\nfunction createCordinate(r,angle){var x = r * Math.cos(angle / 180 * Math.PI);var y = r * Math.sin(angle / 180 * Math.PI);return {'x' : x,'y' : y};}}\nStarPre.prototype.draw=function(){createStar(this.ix,this.iy,this.r,'yellow');}\nStarPre.prototype.move=function(){this.angle2 += this.speed;this.ix = cx + radius * Math.cos(this.angle2);this.iy = cy + radius * Math.sin(this.angle2);}}";
  var codeDist="function dist(x1,y1,x2,y2){var a,b,d;a=x1-x2;b=y1-y2;d=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));return d;};";
  //var codeB="function check(){var fileList = document.getElementById('logFile').files;var fileContents = new Array();for(var i=0; i<fileList.length; i++){if (fileList[i].type == 'text/plain'){var reader = new FileReader();reader.readAsText(fileList[i], 'utf-8');reader.onload = function(evt){var strRes=evt.target.result;var rep=(/\\r\\n\|\\n/g);arrRes=strRes.split(rep);document.getElementById('divAdd').innerHTML += arrRes[0] + '<hr>';alert('b');recordL();alert('a');}\nreader.onerror = function(evt){alert('エラー発生：'+evt.target.error.code);}\n}\n}\n}";
  var codeB="function check(){var fileList = document.getElementById('logFile').files;var fileContents = new Array();for(var i=0; i<fileList.length; i++){if (fileList[i].type == 'text/plain'){var reader = new FileReader();reader.readAsText(fileList[i], 'utf-8');reader.onload = function(evt){var strRes=evt.target.result;var rep=(/\\r\\n\|\\n/g);arrRes[arrRes.length]=strRes.split(rep);document.getElementById('divAdd').innerHTML += arrRes[arrRes.length-1][0] + '<hr>';alert('a');}\nreader.onerror = function(evt){alert('エラー発生：'+evt.target.error.code);}\n}\n}\n}";
  //var codeB="function check(){var fileList = document.getElementById('logFile').files;var fileContents = new Array();for(var i=0; i<fileList.length; i++){if (fileList[0][i].type == 'text/plain'){var reader = new FileReader();reader.readAsText(fileList[0][i], 'utf-8');reader.onload = function(evt){var strRes=evt.target.result;var rep=(/\\r\\n\|\\n/g);arrRes[arrRes.length]=strRes[arrRes.length].split(rep);document.getElementById('divAdd').innerHTML += arrRes[arrRes.length][0] + '<hr>';alert('a');}\nreader.onerror = function(evt){alert('エラー発生：'+evt.target.error.code);}\n}\n}\n}";
  

  var codeL = function(){

  canR=document.getElementById("canR");
  ctxR=canR.getContext("2d");
  try{
  player = document.getElementById('external_nicoplayer');
}catch(e){

}

    ww=window.innerWidth;
  wh=window.innerHeight;
  sw=window.screen.width;
  sh=window.screen.height;

  
  for(var i=0;i < 40;i++){
    // １次元配列の各番地に、配列を作成して格納する
    array[i] = new Array();
    for(var j=0;j < 20;j++){
      array[i][j] = 150;
    }
  }
for(var i=0;i<5;i++){
  arrx[i]=-1;
  arry[i]=-1;
}
  dateL=new Date();
  secondsL=dateL.getTime();

  spR1=new StarPre();
  spR2=new StarPre();
  spR3=new StarPre();
  spR4=new StarPre();
  spR5=new StarPre();
  spR6=new StarPre();
  spR7=new StarPre();
  spR8=new StarPre();
  spR9=new StarPre();
  spR10=new StarPre();
  spR11=new StarPre();
  spR12=new StarPre();
  spR13=new StarPre();
  spR14=new StarPre();
  spR15=new StarPre();
  spR16=new StarPre();
  spR17=new StarPre();
  spR18=new StarPre();
  spR19=new StarPre();
  spR20=new StarPre();
  /*/for(var i=0;i<10;i++){
    expArrcxR[i]=new Array();
    expArrcyR[i]=new Array();
    expArrTypeR="NULL";
    expArrcxR[i]=-50;
    expArrcyR[i]=-50;
  }
  /*/
  ready=1;
  //setInterval("recordL()",1000);
};


var codeMR = function recordL() {
  //console.log(JSON.parse(e.data));
  ctxR.clearRect(0,0,innerWidth,innerHeight);
  console.log("a");
  if(recordLT==0){
    if(expLog.length==0&&arrRes!=null){
      for(var j=0;j<arrRes.length;j++){
          expLog[j]=new Array();
          expLogRT[j]=new Array();
          expLogRTP[j]=new Array();
          //console.log(j);
        for(var i=0;i<(arrRes[j].length-2);i++){
          //console.log(i);
          expLog[j][i]=arrRes[j][i+1].split(/,/);
          expLogRT[j][i]=expLog[j][i][6].split(/-/);
          expLogRTP[j][i]=expLogRT[j][i][3]*60*60*1000+expLogRT[j][i][4]*60*1000+expLogRT[j][i][5]*1000+expLogRT[j][i][6]*1;
        }
        //expArrTypeR="NULL";
        expArrTypeR[j]=new Array(10);
        expArrcxR[j]=new Array(10);
        expArrcyR[j]=new Array(10);
        for(var i=0;i<10;i++){
          expArrTypeR[j][i]="NULL";
          expArrcxR[j][i]=-50;
          expArrcyR[j][i]=-50;
        }
      }
    }
    //alert("ログの再生を開始します");
    var DDR = new Date();
    var MR = DDR.getMinutes();
    var SR = DDR.getSeconds();
    var MSR = DDR.getMilliseconds();
    SMSS=MR*60*1000+SR*1000+MSR;
    console.log(SMSS);
  }
  if(canR==undefined){
    initializeR();
  }
  //console.log(typeR);
  for(var j=0;j<arrRes.length;j++){//tuika
    if(arrRes[j].length>2){
      //console.log(typeR);
      ctxR.fillStyle = "rgba(255,255,255,1)";
      ctxR.lineWidth=50;
      //ctx.fillRect (0, 0, window.innerWidth, window.innerHeight);
      //ctxR.clearRect(0,0,window.innerWidth,window.innerHeight);
      ctxR.fillStyle = "rgba(0,0,0,1)";
      recordLT++;
      if(exp=="no"){
        if(arrRes[j][recordLT]!=null){
          arrResSP[j]=arrRes[j][recordLT].split(/,/);
          if(arrRes[j][recordLT+1]!=null){
            arrResSPN[j]=arrRes[j][recordLT+1].split(/,/);
          }

          typeR[j]=arrResSP[j][1];
          cxR[j]=arrResSP[j][2];
          cyR[j]=arrResSP[j][3];
          //document.body.scrollLeft=arrResSP[4];
          //document.body.scrollTop=arrResSP[5];
          if(arrResSP[j][6]!=null){
          timeTemp[j]=arrResSP[j][6].split(/-/);
        }
        if(arrResSPN[j][6]!=null){
          timeTempN[j]=arrResSPN[j][6].split(/-/);
        }
        //console.log(timeTemp[6]);
        //console.log(timeTempN[6]);
        var now=Number(timeTempN[j][3])*60*60*1000+Number(timeTempN[j][4])*60*1000+Number(timeTempN[j][5])*1000+Number(timeTempN[j][6]);
        var next=Number(timeTemp[j][3])*60*60*1000+Number(timeTemp[j][4])*60*1000+Number(timeTemp[j][5])*1000+Number(timeTemp[j][6]);
        intervalT=now-next;
      }
    }else if(exp=="experiment"){
      outloop:for(var i=0;i<expLog[j].length;i++){
        if(Number(expLog[j][i][8])-Number(getCurrentVT())<0.5&&Number(expLog[j][i][8])-Number(getCurrentVT())>0){
          for(var k=0;k<10;k++){
            expArrTypeR[j][k]=expLog[j][i+k][1];
            expArrcxR[j][k]=expLog[j][i+k][2];
            expArrcyR[j][k]=expLog[j][i+k][3];
          }
          break outloop;
        }
      }
    }
    if(exp=="no"){
      if(vStatus!=arrResSP[j][7]&&arrResSP[j][7]!=null){
        if(vStatus=="paused"){
          player.ext_play(true);
          vStatus="playing";
        }else if(vStatus=="playing"){
          player.ext_play(false);
          vStatus="paused";
        }
      }
      if(vFS!=arrResSP[j][9]&&arrResSP[j][9]!=null){
        //console.log(vFS+","+arrResSP[j][9]);
        if(vFS=="normal"){
          player.ext_setVideoSize("fit");
          vFS="fit";
        }else if(vFS=="fit"){
          player.ext_setVideoSize("normal");
          vFS="normal";
        }
      }
    }
    if(canR.width<10){
      console.log("a");
      canR.width=ww-20;
      canR.height=document.body.clientHeight;
    }
    //console.log(SMSS);
    if(typeR==undefined){
        var DDRE = new Date();
        var MRE = DDRE.getMinutes();
        var SRE = DDRE.getSeconds();
        var MSRE = DDRE.getMilliseconds();
        var SMSSE=MRE*60*1000+SRE*1000+MSRE;

      alert(SMSSE+","+SMSS+"再生時間"+(SMSSE-SMSS)+"ミリ秒");
      alert("ログの再生を終了しました");
      //canR.width=0;
      canR.height=canR.height-50;
      recordL=0;
      //clearInterval(timerId);

    }
    for(var k=0;k<10;k++){
      if(expArrTypeR[j][k]=="NULL"){
        ctxR.beginPath();
        ctxR.fillStyle = "rgba(0,111,0,0.1)";
        ctxR.lineWidth=1;
        ctxR.arc(expArrcxR[j][k], expArrcyR[j][k], 50, 0, Math.PI*2, true);
        ctxR.fill();
      }else{
        ctxR.beginPath();
        ctxR.fillStyle = "rgba(111,0,0,0.1)";
        ctxR.lineWidth=1;
        ctxR.arc(expArrcxR[j][k], expArrcyR[j][k], 50, 0, Math.PI*2, true);
        ctxR.fill();
      }
    }
  }
}
 

}; 
//document.onmousedown = function (e){
  var codeMD = function (e){
    
        if(!e) e = window.event; // レガシー
        if(getCurrentPS()==5||getCurrentPS()==-1&&e.which==1&&sFlag!=0){
        //moviePlayer.playVideo();
        //Progress();
      }else if(getCurrentPS()==2&&arrRes.length!=0&&e.which==1&&sFlag!=0){
        //Progress();
        //recordL();
        //countLog++;
        //moviePlayer.pauseVideo();
      }
      //Progress();
          // 出力テスト
        //console.log(e.which);
        
  };
  var codeK =  function(evt){
    if(evt.which == 83){// S
      //type="Black";
      if(arrRes.length!=0){
        moviePlayer.playVideo();
        setInterval(recordL,100);

        sFlag=1;
      }
    }
  }; 
  //src = "onload=function(){alert('aiueo');}"+codeB.toString();
  src = "var ready=0;var canR;var ctxR;var recState='yes';var intervalT=20;var sFlag=0;var expLogRTP=new Array();var expLogRT=new Array();var expArrTypeR=new Array(10);var expArrcxR=new Array(10);var expArrcyR=new Array(10);var timeTemp;var countLog=0;var exp='"+exp+"';var expLog=new Array();var timeTempN;var arrLog=new Array();var cx=0;var cy=0;var SMSS;var timerId;var cxR=0;var cyR=0;var recordLT=0;var id='"+id+"';var arrRes=new Array();var arrResSP=new Array();var arrResSPN;var typeR='NULL';var recordFlag=0;var cxLog=0;var cyLog=0;var vStatus='paused';var vFS='normal';var recordPos=new Array();var sw=0;var sh=0;var arrx=new Array(5);var arry=new Array(5);var countMR=0;var alphaMR=0.2;var sp1;var sp2;var sp3;var sp4;var sp5;var sp6;var sp7;var sp8;var sp9;var sp10;var sp11;var sp12;var sp13;var sp14;var sp15;var sp16;var sp17;var sp18;var sp19;var sp20;var speed = Math.PI / 60;var radius = 140;var effectCount=0;var Change=0;var arrayOfStrings;var vposStartTArr;var vposEndTArr;var effectArr;var startYArr;var endYArr;var effectTArr;var player = document.getElementById('external_nicoplayer');var dateL;var secondsL;var dateR;var secondsR;var type='NULL';var ww;var wh;var array = new Array();var image=new Image();image.src='http://localhost/img/mist5.png';var fireBF=new Image();fireBF.src='http://localhost/img/BF2.png';var fireAF=new Image();fireAF.src='http://localhost/img/AF.png';var magicR=new Image();magicR.src='http://localhost/img/magicRing.png';var ws = new WebSocket('ws://localhost:6556');"+codeDist.toString()+"\n"+codeS.toString()+"\n"+codeInitR.toString()+"\n"+codeMR.toString()+"\n"+codeB.toString()+"\ndocument.onmousedown ="+codeMD.toString()+"\nonload ="+codeL.toString()+"\ndocument.onkeydown="+codeK.toString();

  sc.type="text/javascript";
  sc.text=src
  return sc;
}()
);