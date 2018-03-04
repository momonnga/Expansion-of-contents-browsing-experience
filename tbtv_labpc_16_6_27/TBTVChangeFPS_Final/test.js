document.body.appendChild(function(){
  sc = document.createElement("script");


var thread_id;
var ms;
var ms2;
//var id="sm26469989";
var id="sm9";
var nowURL=location.href;
var bar=nowURL.match(/\/(sm.+)/);
var youId="nothing";
var youIdM=nowURL.match(/watch\?v=(.*)/);
var urlT=nowURL.match(/\?url=(.*)/);
var exp="no";
var expM=nowURL.match(/.*(experiment)YNPC.*/);
//var vposSend=1111111;
var vposSend=new Array();
var vposStartT=new Array();
var vposEndT=new Array();
var effect=new Array();
var startY=new Array();
var endY=new Array();
var effectT=new Array();
var countAjax=0;
//console.log(bar[0]);
if(bar!=null){
    id=bar[1];
}
if(youIdM!=null){
  youId=youIdM[0];
}
if(expM!=null){
  exp=expM[1];
}

        if(id!="sm9"){
          var targetURL2="https://localhost/effect/AnalyzeContentMPN.php?sm="+id;
$.ajax({
    url: targetURL2,
    dataType: 'json',
    async: false,
}).done(function(data){//成功した時
}).fail(function(data){//失敗した時
 //alert("MySQL動いてる？");
});

           var targetURL="https://localhost/effect/AnalyzeEffectM.php?id="+id;
        
$.ajax({
    url: targetURL,
    dataType: 'json',
    async: false,
}).done(function(data){
    for(var i=0;i<data.length;i++){
      alert(data[i].effect);
              effect[i]=data[i].effect;
              vposStartT[i]=data[i].startT;
              vposEndT[i]=data[i].endT;
    }
}).fail(function(data){
    //location.href="http://masayuki.nkmr.io/contentAna/index.php?url="+nowURL;
    //alert("動画用");
    //location.href="http://localhost/effect/AnalyzeContentM.php?sm="+id;
});

      }else{

        var targetURL2="https://localhost/effect/AnalyzeContentTPN.php?url="+nowURL;
        
$.ajax({
    url: targetURL2,
    dataType: 'json',
    async: false,
}).done(function(data){
}).fail(function(data){
  //alert("MySQL動いてる？");
});

var targetURL="https://localhost/effect/AnalyzeEffectT.php?url="+nowURL;
$.ajax({
    url: targetURL,
    dataType: 'json',
    async: false,
}).done(function(data){
    for(var i=0;i<data.length;i++){
      //alert(data[i].effect);
              effectT[i]=data[i].effect;
              startY[i]=data[i].startY;
              endY[i]=data[i].endY;
    }
    //if(effectT[0]==undefined){
      //alert("問題発生");
    //  location.href="http://localhost/effect/AnalyzeContentT.php?url="+nowURL;
    //}
}).fail(function(data){
  //alert("テキスト用");
  //location.href="http://localhost/effect/AnalyzeContentT.php?url="+nowURL;
    //location.href="http://masayuki.nkmr.io/contentAna/index.php?url="+nowURL;
});

  }
  var codeS="var StarPre=function(){this.x=Math.random()*400;this.y=Math.random()*400;this.vx=(Math.random()-0.5)*4;this.vy=(Math.random()-0.5)*4;this.w=Math.random()*150;this.h=Math.random()*150;this.r=Math.random()*30+25;this.angle2=Math.random()*10;if(Math.random()<0.5){this.speed=0.0628+(0.01)*Math.random();}else{this.speed=-(0.0628+(0.01)*Math.random());}\nfunction createStar(x,y,r,color){var c1 = createCordinate(r,-90);var c2 = createCordinate(r,-234);var c3 = createCordinate(r,-18);var c4 = createCordinate(r,-162);var c5 = createCordinate(r,-306);ctx.fillStyle = color;ctx.lineWidth = 0;ctx.beginPath();ctx.moveTo(x,y-r);ctx.lineTo(c1.x + x, c1.y + y);ctx.lineTo(c2.x + x, c2.y + y);ctx.lineTo(c3.x + x, c3.y + y);ctx.lineTo(c4.x + x, c4.y + y);ctx.lineTo(c5.x + x, c5.y + y);ctx.closePath();ctx.fill();\nfunction createCordinate(r,angle){var x = r * Math.cos(angle / 180 * Math.PI);var y = r * Math.sin(angle / 180 * Math.PI);return {'x' : x,'y' : y};}}\nStarPre.prototype.draw=function(){createStar(this.ix,this.iy,this.r,'yellow');}\nStarPre.prototype.move=function(){this.angle2 += this.speed;this.ix = cx + radius * Math.cos(this.angle2);this.iy = cy + radius * Math.sin(this.angle2);}}";
  var codeDist="function dist(x1,y1,x2,y2){var a,b,d;a=x1-x2;b=y1-y2;d=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));return d;};";
  var codeInit="function initialize(){can=document.getElementById('can');ctx=can.getContext('2d');try{player = document.getElementById('external_nicoplayer');}catch(e){}try{playerY = document.getElementById('movie_player');}catch(e){}effectArr=effect.split(',');vposStartTArr=vposStartT.split(',');vposEndTArr=vposEndT.split(',');effectTArr=effectT.split(',');startYArr=startY.split(',');endYArr=endY.split(',');ww=window.innerWidth;wh=window.innerHeight;sw=window.screen.width;sh=window.screen.height;if(effectTArr.length>0&&effectTArr[0]!=''){type=effectTArr[0];can.width=ww;can.height=wh;}else{}for(var i=0;i < 40;i++){array[i] = new Array();for(var j=0;j < 20;j++){array[i][j] = 150;}}for(var i=0;i<5;i++){arrx[i]=-1;arry[i]=-1;}dateL=new Date();secondsL=dateL.getTime();sp1=new StarPre();sp2=new StarPre();sp3=new StarPre();sp4=new StarPre();sp5=new StarPre();sp6=new StarPre();sp7=new StarPre();sp8=new StarPre();sp9=new StarPre();sp10=new StarPre();sp11=new StarPre();sp12=new StarPre();sp13=new StarPre();sp14=new StarPre();sp15=new StarPre();sp16=new StarPre();sp17=new StarPre();sp18=new StarPre();sp19=new StarPre();sp20=new StarPre();ready=1;can.width=0;can.height=0;}";
  var codeInitR="function initializeR(){canR=document.getElementById('canR');ctxR=canR.getContext('2d');try{player = document.getElementById('external_nicoplayer');}catch(e){}try{playerY = document.getElementById('movie_player');}catch(e){}effectArr=effect.split(',');vposStartTArr=vposStartT.split(',');vposEndTArr=vposEndT.split(',');effectTArr=effectT.split(',');startYArr=startY.split(',');endYArr=endY.split(',');ww=window.innerWidth;wh=window.innerHeight;sw=window.screen.width;sh=window.screen.height;if(effectTArr.length>0&&effectTArr[0]!=''){type=effectTArr[0];canR.width=ww;canR.height=wh;}else{}for(var i=0;i < 40;i++){array[i] = new Array();for(var j=0;j < 20;j++){array[i][j] = 150;}}for(var i=0;i<5;i++){arrx[i]=-1;arry[i]=-1;}dateL=new Date();secondsL=dateL.getTime();spR1=new StarPre();spR2=new StarPre();spR3=new StarPre();spR4=new StarPre();spR5=new StarPre();spR6=new StarPre();spR7=new StarPre();spR8=new StarPre();spR9=new StarPre();spR10=new StarPre();spR11=new StarPre();spR12=new StarPre();spR13=new StarPre();spR14=new StarPre();spR15=new StarPre();spR16=new StarPre();spR17=new StarPre();spR18=new StarPre();spR19=new StarPre();spR20=new StarPre();canR.width=0;canR.height=0;}";
  var codeB="function check(){var fileList = document.getElementById('logFile').files;var fileContents = '';for(var i=0; i<fileList.length; i++){if (fileList[i].type == 'text/plain'){var reader = new FileReader();reader.readAsText(fileList[i], 'utf-8');reader.onload = function(evt){var strRes=evt.target.result;var rep=(/\\r\\n\|\\n/g);arrRes=strRes.split(rep);document.getElementById('divAdd').innerHTML += arrRes[0] + '<hr>';recordL();}\nreader.onerror = function(evt){alert('エラー発生：'+evt.target.error.code);}\n}\n}\n}";
  var codeSleep="function sleep(time) {var d1 = new Date().getTime();var d2 = d1;while (d2 < d1 + time) {d2 = new Date().getTime();}return;}";
  var codeM = function(e) {
    if(can==undefined){
      initialize();
    }
    if(ready==1){
      arJSON=JSON.parse(e.data);
    }
    if(countM==0){
      setTimeout(listenTobii,100);
      countM++; 
    }
    console.log(arJSON);
  };
  var codeTobii=function listenTobii(){
  //console.log(JSON.parse(e.data));
  console.log("a");
  if(can==undefined){
    initialize();
  }
  if(ready==1){
    //arJSON=JSON.parse(e.data);
    //sleep(15);
    //console.log(arJSON);
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.lineWidth=50;
    //ctx.fillRect (0, 0, window.innerWidth, window.innerHeight);
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    ctx.fillStyle = "rgba(0,0,0,1)";
    //ctx.fillText(arJSON.category,arJSON.values.frame.avg.x,arJSON.values.frame.avg.y+window.innerHeight-window.parent.screen.height);
    //if(arJSON.category=="tracker"){
    if(arJSON.eX<0){
      cx=arJSON.eX+1922;
          //cx=ww-Math.abs(arJSON.eX);
    }else{
        cx=arJSON.eX;
    }
    cy=arJSON.eY-61;
        /*?
        if(sh==768){//NEC NotePC 1366*768

        }else if(sh==1080){//monitor 1920*1080
          cy=cy+160;
        }
        /*/
        /*/
        if(Change==0){
          cy=arJSON.eY+window.innerHeight-window.parent.screen.height+160;
        }else{
          cy=arJSON.eY+window.innerHeight-window.parent.screen.height;
        }
        //}
        //cy=cy-150;
           if(sw<1920){//notePC
            cy=cy-160;
           }else if(sw>2100){
            cy=cy-160;
           }else{
            cy=cy-90;
           }
           /*/
    dateR=new Date();
    secondsR=dateR.getTime();
    if(player!=null){
      var videoTime=player.ext_getPlayheadTime();
      if(sh==768){//ノートPCVerNEC
        //cy=cy-90;
        cy=(cy*(wh+61))/sh;
      }else if(sh==1080){//monitor 1920
        cy=(cy*(wh+61))/sh;
      }
    }
    cx=(cx*ww)/sw;

    // console.log(effectCount);
    if(Math.floor(videoTime)==Math.floor(vposStartTArr[effectCount]/100)&&type=="NULL"){
      //alert("ん");
            type=effectArr[effectCount];
            can.width=ww;
            can.height=wh;
    }
    if(Math.floor(videoTime)==Math.floor(vposEndTArr[effectCount]/100)&&type!="NULL"){
      type="NULL";
      effectCount++;
      can.width=0;
      can.height=0;
    }
    //この下にログ収集コードが書いてあった
    if(type=="NULL"){
      if(can.width>1&&can.height>1){
        can.width=0;
        can.height=0;
      }
    }else if(type=="Light"){
      /*/
            for(var i=1;i<49;i++){
              ctx.beginPath();
              ctx.strokeStyle="rgba(0,0,0,"+((i-1)/49)+")";
              ctx.fillStyle = "rgba(0,0,0,"+0.1+")";
              ctx.lineWidth=i*40;
            ctx.arc(cx, cy, i*20+(i-1)*20, 0, Math.PI*2, true);
            ctx.stroke();
          }
          /*/
      ctx.fillStyle = "rgba(0,0,0,1)";
      //ctx.fillStyle = "rgba(0,0,0,0.85)";
      ctx.fillRect(0,0,ww,wh);
      ctx.globalCompositeOperation = "destination-out";
      for(var i=0;i<15;i++){
      ctx.beginPath();
      ctx.fillStyle = "rgba(0,0,0,"+(i/40+0.05)+")";
      //ctx.strokeStyle="rgba(0,0,0,"+((i-1)/49)+")";
      ctx.lineWidth=1;
      //ctx.fillStyle = "rgba(255,255,255,0)";
      //ctx.lineWidth=i*40;
      //ctx.arc(cx, cy, 250-i*10, 0, Math.PI*2, true);//修正前
      ctx.arc(cx, cy, 300-i*10, 0, Math.PI*2, true);
      ctx.fill();
      }
      /* 合成演算子をセット */
      ctx.globalCompositeOperation = "source-over";
    }else if(type=="Mist"){
        
      ctx.globalAlpha = 1;
      ctx.drawImage(image,0,0,ww,wh);
      ctx.globalCompositeOperation = "destination-out";
      if(cx>0&&cx<2000&&cy>0&&cy<1000){
        if(Math.floor(cx/50)>0&&Math.floor(cx/50)<79&&Math.floor(cy/50)>0&&Math.floor(cy/50)<79){
              
            array[Math.floor(cx/50)][Math.floor(cy/50)-1]=33;
            array[Math.floor(cx/50)-1][Math.floor(cy/50)]=33;
            array[Math.floor(cx/50)+1][Math.floor(cy/50)]=33;
            array[Math.floor(cx/50)][Math.floor(cy/50)+1]=33;
            array[Math.floor(cx/50)-1][Math.floor(cy/50)-1]=50;
            array[Math.floor(cx/50)-1][Math.floor(cy/50)+1]=50;
            array[Math.floor(cx/50)+1][Math.floor(cy/50)-1]=50;
            array[Math.floor(cx/50)+1][Math.floor(cy/50)+1]=50;
            array[Math.floor(cx/50)][Math.floor(cy/50)]=0;
        }
      }
      for(var i=0;i<40;i++ ){
        for(var j=0;j<20;j++){
          if(array[i][j]<150){
            array[i][j]++;
          }
        }
      }
      for(var i=0;i<40;i++ ){
        for(var j=0;j<20;j++){
        //ctx.drawImage(image,0,0,2000,1000);
          var number=array[i][j]/150;
          if(number<1){
            //console.log(number);
            ctx.globalAlpha = 1-number.toFixed(2);
            ctx.drawImage(image,i*50,j*50,50,50,i*50,j*50,50,50);
          }
        }
      }
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
    }else if(type=="LineWork"){
      //ctx.strokeStyle="rgba(255,255,255,1)";
      //leng=0.9;
      leng=0.7;
      ctx.strokeStyle="rgba(0,0,0,1)";
      ctx.lineWidth=2;
      for(var i=0;i<ww;i+=50){
        var rnd=Math.random();
        ctx.beginPath();
        ctx.moveTo(i, 0);
        //ctx.lineTo(cx*0.8, cy*0.8);
        ctx.lineTo(i+((cx-i)*leng)*rnd, cy*leng*rnd);
        ctx.stroke();

        var rnd2=Math.random();
        ctx.beginPath();
        ctx.moveTo(i, wh);
        //ctx.lineTo(cx*0.8, cy*0.8);
        ctx.lineTo(i+((cx-i)*leng)*rnd2, wh-((wh-cy)*leng)*rnd2);
        ctx.stroke();
      }

      for(var i=0;i<wh;i+=50){
        var rnd=Math.random();
        ctx.beginPath();
        ctx.moveTo(0, i);
        //ctx.lineTo(cx*0.8, cy*0.8);
        ctx.lineTo(cx*leng*rnd, i+((cy-i)*leng)*rnd);
        ctx.stroke();
        var rnd2=Math.random();
        ctx.beginPath();
        ctx.moveTo(ww, i);
        //ctx.lineTo(cx*0.8, cy*0.8);
        ctx.lineTo(ww-((ww-cx)*leng)*rnd2, i+((cy-i)*leng)*rnd2);
        ctx.stroke();
      }
    }else if(type=="Mosaic"){
      var wid=50;
      var hei=50;
      for(var i=0;i<40;i++){
        for(var j=0;j<20;j++){
          ctx.strokeStyle="rgba(255,255,255,0)";
          if(i-2==Math.round(cx/50)&&j-2==Math.round(cy/50)||i-2==Math.round(cx/50)&&j-1==Math.round(cy/50)||i-2==Math.round(cx/50)&&j==Math.round(cy/50)||i-2==Math.round(cx/50)&&j+1==Math.round(cy/50)||i-2==Math.round(cx/50)&&j+2==Math.round(cy/50)||i-1==Math.round(cx/50)&&j-2==Math.round(cy/50)||i-1==Math.round(cx/50)&&j-1==Math.round(cy/50)||i-1==Math.round(cx/50)&&j==Math.round(cy/50)||i-1==Math.round(cx/50)&&j+1==Math.round(cy/50)||i-1==Math.round(cx/50)&&j+2==Math.round(cy/50)||i==Math.round(cx/50)&&j-2==Math.round(cy/50)||i==Math.round(cx/50)&&j-1==Math.round(cy/50)||i==Math.round(cx/50)&&j==Math.round(cy/50)||i==Math.round(cx/50)&&j+1==Math.round(cy/50)||i==Math.round(cx/50)&&j+2==Math.round(cy/50)||i+1==Math.round(cx/50)&&j-2==Math.round(cy/50)||i+1==Math.round(cx/50)&&j-1==Math.round(cy/50)||i+1==Math.round(cx/50)&&j==Math.round(cy/50)||i+1==Math.round(cx/50)&&j+1==Math.round(cy/50)||i+1==Math.round(cx/50)&&j+2==Math.round(cy/50)||i+2==Math.round(cx/50)&&j-2==Math.round(cy/50)||i+2==Math.round(cx/50)&&j-1==Math.round(cy/50)||i+2==Math.round(cx/50)&&j==Math.round(cy/50)||i+2==Math.round(cx/50)&&j+1==Math.round(cy/50)||i+2==Math.round(cx/50)&&j+2==Math.round(cy/50)){
          }else{
            if((i+j)%2==0){
              ctx.fillStyle = "rgba(255,255,255,1)";
              ctx.fillRect(i*50,j*50,wid,hei);
            }else{
              ctx.fillStyle = "rgba(255,255,255,0.3)";
              ctx.fillRect(i*50,j*50,wid,hei);
            }
          }
        }
      }
    }else if(type=="Spot"){
      console.log(type+"間違い");
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0,0,ww,wh);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.fillStyle = "red";
      //ctx.strokeStyle="rgba(0,0,0,"+((i-1)/49)+")";
      ctx.lineWidth=1;
      //ctx.fillStyle = "rgba(255,255,255,0)";
      //ctx.lineWidth=i*40;
      ctx.arc(cx, cy, 150, 0, Math.PI*2, true);
      ctx.fill();
      /* 合成演算子をセット */
      ctx.globalCompositeOperation = "source-over";
    }else if(type=="Rect"){
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0,0,ww,wh);
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "red";
      ctx.fillRect(cx-ww/8,cy-wh/8,ww/4,wh/4);
      ctx.globalCompositeOperation = "source-over";
    }else if(type=="Plaid"){
          var wid=50;
          var hei=50;
          //ctx.fillStyle = "rgba(255,255,255,0.4)";
          for(var i=0;i<5;i++){
            for(var j=0;j<5;j++){
             
              ctx.strokeStyle="rgba(255,255,255,0)";
              //if(i-2==Math.round(cx/50)&&j-2==Math.round(cy/50)||i-2==Math.round(cx/50)&&j-1==Math.round(cy/50)||i-2==Math.round(cx/50)&&j==Math.round(cy/50)||i-2==Math.round(cx/50)&&j+1==Math.round(cy/50)||i-2==Math.round(cx/50)&&j+2==Math.round(cy/50)||i-1==Math.round(cx/50)&&j-2==Math.round(cy/50)||i-1==Math.round(cx/50)&&j-1==Math.round(cy/50)||i-1==Math.round(cx/50)&&j==Math.round(cy/50)||i-1==Math.round(cx/50)&&j+1==Math.round(cy/50)||i-1==Math.round(cx/50)&&j+2==Math.round(cy/50)||i==Math.round(cx/50)&&j-2==Math.round(cy/50)||i==Math.round(cx/50)&&j-1==Math.round(cy/50)||i==Math.round(cx/50)&&j==Math.round(cy/50)||i==Math.round(cx/50)&&j+1==Math.round(cy/50)||i==Math.round(cx/50)&&j+2==Math.round(cy/50)||i+1==Math.round(cx/50)&&j-2==Math.round(cy/50)||i+1==Math.round(cx/50)&&j-1==Math.round(cy/50)||i+1==Math.round(cx/50)&&j==Math.round(cy/50)||i+1==Math.round(cx/50)&&j+1==Math.round(cy/50)||i+1==Math.round(cx/50)&&j+2==Math.round(cy/50)||i+2==Math.round(cx/50)&&j-2==Math.round(cy/50)||i+2==Math.round(cx/50)&&j-1==Math.round(cy/50)||i+2==Math.round(cx/50)&&j==Math.round(cy/50)||i+2==Math.round(cx/50)&&j+1==Math.round(cy/50)||i+2==Math.round(cx/50)&&j+2==Math.round(cy/50)){
                if((i+j)%4==2){
                ctx.fillStyle = "rgba(204,204,204,0.75)";
                //ctx.fillRect(i*25-125,j*50-125,wid,hei);
                }else if((i+j)%4==3){
                  ctx.fillStyle = "rgba(153,153,153,0.75)";
                }else if((i+j)%4==0){
                  ctx.fillStyle = "rgba(102,102,102,0.75)";
                }else if((i+j)%4==1){
                  ctx.fillStyle = "rgba(51,51,51,0.75)";
                }else{
                //ctx.fillStyle = "rgba(255,255,255,0.3)";
                ctx.fillStyle = "rgba(0,0,0,0.75)";
                
                }
                ctx.fillRect(cx+i*wid-125,cy+j*hei-125,wid,hei);
              //}else{
              
              //}
            }
          }
          for(var i=0;i<3;i++){
                        if(i%4==2){
                ctx.fillStyle = "rgba(204,204,204,0.75)";
                //ctx.fillRect(i*25-125,j*50-125,wid,hei);
                }else if(i%4==3){
                  ctx.fillStyle = "rgba(153,153,153,0.75)";
                }else if(i%4==0){
                  ctx.fillStyle = "rgba(102,102,102,0.75)";
                }else if(i%4==1){
                  ctx.fillStyle = "rgba(51,51,51,0.75)";
                }else{
                //ctx.fillStyle = "rgba(255,255,255,0.3)";
                ctx.fillStyle = "rgba(0,0,0,0.75)";
                
                }
            ctx.fillRect(cx+i*wid-125+wid,cy-125-hei,wid,hei);
          }
          for(var i=0;i<3;i++){
          if(i%4==2){
                ctx.fillStyle = "rgba(204,204,204,0.75)";
                //ctx.fillRect(i*25-125,j*50-125,wid,hei);
                }else if(i%4==3){
                  ctx.fillStyle = "rgba(153,153,153,0.75)";
                }else if(i%4==0){
                  ctx.fillStyle = "rgba(102,102,102,0.75)";
                }else if(i%4==1){
                  ctx.fillStyle = "rgba(51,51,51,0.75)";
                }else{
                //ctx.fillStyle = "rgba(255,255,255,0.3)";
                ctx.fillStyle = "rgba(0,0,0,0.75)";
                
                }
            ctx.fillRect(cx-125-wid,cy+i*hei-125+hei,wid,hei);
          }
          for(var i=0;i<3;i++){
          if(i%4==0){
                ctx.fillStyle = "rgba(204,204,204,0.75)";
                //ctx.fillRect(i*25-125,j*50-125,wid,hei);
                }else if(i%4==1){
                  ctx.fillStyle = "rgba(153,153,153,0.75)";
                }else if(i%4==2){
                  ctx.fillStyle = "rgba(102,102,102,0.75)";
                }else if(i%4==3){
                  ctx.fillStyle = "rgba(51,51,51,0.75)";
                }else{
                //ctx.fillStyle = "rgba(255,255,255,0.3)";
                ctx.fillStyle = "rgba(0,0,0,0.75)";
                
                }
            ctx.fillRect(cx+i*wid-125+wid,cy-125+hei*5,wid,hei);
          }
          for(var i=0;i<3;i++){
          if(i%4==0){
                ctx.fillStyle = "rgba(204,204,204,0.75)";
                //ctx.fillRect(i*25-125,j*50-125,wid,hei);
                }else if(i%4==1){
                  ctx.fillStyle = "rgba(153,153,153,0.75)";
                }else if(i%4==2){
                  ctx.fillStyle = "rgba(102,102,102,0.75)";
                }else if(i%4==3){
                  ctx.fillStyle = "rgba(51,51,51,0.75)";
                }else{
                //ctx.fillStyle = "rgba(255,255,255,0.3)";
                ctx.fillStyle = "rgba(0,0,0,0.75)";
                
                }
            ctx.fillRect(cx-125+wid*5,cy+i*wid-125+hei,wid,hei);
          }
    }else if(type=="BFire"){
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.drawImage(fireBF,0,0,ww,wh);
      ctx.globalCompositeOperation = "destination-out";
      ctx.globalAlpha = 1;
      ctx.drawImage(fireAF,cx-375,cy-225,750,450);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.5;
      ctx.drawImage(fireAF,cx-375,cy-225,750,450);
      ctx.globalAlpha = 1;
    }else if(type=="StarRing"){
      sp1.draw();
      sp2.draw();
      sp3.draw();
      sp4.draw();
      sp5.draw();
      sp6.draw();
      sp7.draw();
      sp8.draw();
      sp9.draw();
      sp10.draw();
      sp11.draw();
      sp12.draw();
      sp13.draw();
      sp14.draw();
      sp15.draw();
      sp16.draw();
      sp17.draw();
      sp18.draw();
      sp19.draw();
      sp20.draw();
      sp1.move();
      sp2.move();
      sp3.move();
      sp4.move();
      sp5.move();
      sp6.move();
      sp7.move();
      sp8.move();
      sp9.move();
      sp10.move();
      sp11.move();
      sp12.move();
      sp13.move();
      sp14.move();
      sp15.move();
      sp16.move();
      sp17.move();
      sp18.move();
      sp19.move();
      sp20.move();
    }else if(type=="MagicR"){
      if(arrx[4]!=-1&&arry[4]!=-1&&dist(arrx[0],arry[0],arrx[4],arry[4])<100&&dist(arrx[0],arry[0],arrx[4],arry[4])<100&&dist(arrx[0],arry[0],arrx[3],arry[3])<100&&dist(arrx[0],arry[0],arrx[2],arry[2])<100&&dist(arrx[0],arry[0],arrx[1],arry[1])<100){
        if(alphaMR<1){
          alphaMR+=0.002;
        }
        ctx.globalAlpha=alphaMR;
      }else{
        if(ctx.globalAlpha>0&&alphaMR>0){
          alphaMR-=0.001;
        }
        ctx.globalAlpha=alphaMR;
      }
      ctx.drawImage(magicR,cx-200,cy-200,400,400);
      if(countMR%30==29){
        for(var i=4;i>0;i--){
          arrx[i]=arrx[i-1];
          arry[i]=arry[i-1];
        }
          arrx[0]=cx;
          arry[0]=cy;
          countMR=0;
      }
      countMR++;
    }
    if(recordFlag==1){
      //小数点の位置を2桁右に移動する（1234567.89にする）
      cxLog = cx * 100;
      cyLog = cy * 100+document.body.scrollTop*100;
      //四捨五入したあと、小数点の位置を元に戻す
      cxLog = Math.round(cxLog) / 100;
      cyLog = Math.round(cyLog)/100;
      var DD = new Date();
      var Year = DD.getFullYear();
      var Month = DD.getMonth() + 1;
      var Day = DD.getDate();
      var H = DD.getHours();
      var M = DD.getMinutes();
      var S = DD.getSeconds();
      var MS = DD.getMilliseconds();
      if(id!="sm9"){
          recordPos[recordPos.length]=type+","+cxLog+","+cyLog+","+document.body.scrollLeft+","+document.body.scrollTop+","+Year+"-"+Month+"-"+Day+"-"+H+"-"+M+"-"+S+"-"+MS+","+player.ext_getStatus()+","+player.ext_getPlayheadTime()+","+player.ext_getVideoSize()+","+arJSON.TimeS+","+arJSON.TimeMS+"\r\n";
      }else if(exp=="experiment"){
        recordPos[recordPos.length]=type+","+cxLog+","+cyLog+","+document.body.scrollLeft+","+document.body.scrollTop+","+Year+"-"+Month+"-"+Day+"-"+H+"-"+M+"-"+S+"-"+MS+","+getCurrentPS()+","+getCurrentVT()+","+arJSON.TimeS+","+arJSON.TimeMS+"\r\n";
      }else{
        recordPos[recordPos.length]=type+","+cxLog+","+cyLog+","+document.body.scrollLeft+","+document.body.scrollTop+","+Year+"-"+Month+"-"+Day+"-"+H+"-"+M+"-"+S+"-"+MS+","+arJSON.TimeS+"\r\n";    
      }
    }
  }
  setTimeout(listenTobii,1000);
}; 
var codeL = function(){
	can=document.getElementById("can");
	ctx=can.getContext("2d");
  canR=document.getElementById("canR");
  ctxR=canR.getContext("2d");
  try{
  player = document.getElementById('external_nicoplayer');
}catch(e){

}
try{
  playerY = document.getElementById('movie_player');
}catch(e){

}
  effectArr=effect.split(",");
  vposStartTArr=vposStartT.split(",");
  vposEndTArr=vposEndT.split(",");
  effectTArr=effectT.split(",");
  startYArr=startY.split(",");
  endYArr=endY.split(",");
    ww=window.innerWidth;
  wh=window.innerHeight;
  sw=window.screen.width;
  sh=window.screen.height;

  if(effectTArr.length>0&&effectTArr[0]!=""){
    type=effectTArr[0];
    //can.width=ww;
    //can.height=wh;
    if(youId!="nothing"){
      if(playerY.clientHeight>wh){
        can.width=playerY.clientWidth;
        can.height=playerY.clientHeight;
        ww=playerY.clientWidth;
        wh=playerY.clientHeight;
      }
    }else{
      can.width=ww;
      can.height=wh;
    }
    if(type=="NULL"){
      can.width=0;
      can.height=0;
    }
  }else{
can.width=0;
can.height=0;
  }
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
  sp1=new StarPre();
  sp2=new StarPre();
  sp3=new StarPre();
  sp4=new StarPre();
  sp5=new StarPre();
  sp6=new StarPre();
  sp7=new StarPre();
  sp8=new StarPre();
  sp9=new StarPre();
  sp10=new StarPre();
  sp11=new StarPre();
  sp12=new StarPre();
  sp13=new StarPre();
  sp14=new StarPre();
  sp15=new StarPre();
  sp16=new StarPre();
  sp17=new StarPre();
  sp18=new StarPre();
  sp19=new StarPre();
  sp20=new StarPre();

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
  ready=1;
  //setInterval("recordL()",1000);
};
/*/
var setLoopT=function setLoopT(){
  var errorC=0;
  var preArrResSP=new Array(100);
  for(var i=1;i<100;i++){
    preArrResSP[i]=arrRes[i].split(/,/);
  }
  var timeTemp=new Array(100);
  var intervalT=0;
  //console.log(preArrResSP);
  for(var i=1;i<100;i++){
    timeTemp[i]=preArrResSP[i][6].split(/-/);
  }
  //console.log(timeTemp);
  for(var i=2;i<100;i++){
    console.log((timeTemp[i][5]*1000+timeTemp[i][6])-(timeTemp[i-1][5]*1000+timeTemp[i-1][6]));
    if(((timeTemp[i][5]*1000+timeTemp[i][6])-(timeTemp[i-1][5]*1000+timeTemp[i-1][6]))<200&&((timeTemp[i][5]*1000+timeTemp[i][6])-(timeTemp[i-1][5]*1000+timeTemp[i-1][6]))>0){
    intervalT+=(timeTemp[i][5]*1000+timeTemp[i][6])-(timeTemp[i-1][5]*1000+timeTemp[i-1][6]);
    }else{
      errorC++;
    }
  }
  timerId=setInterval("recordL()",intervalT/(99-errorC));
};
/*/
var codeMR = function recordL() {
  //console.log(JSON.parse(e.data));
  if(recordLT==0){
    alert("ログの再生を開始します");
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
  if(arrRes.length>2){
    //console.log(typeR);
            ctxR.fillStyle = "rgba(255,255,255,0.4)";
            ctxR.lineWidth=50;
  //ctx.fillRect (0, 0, window.innerWidth, window.innerHeight);
  ctxR.clearRect(0,0,window.innerWidth,window.innerHeight);
  ctxR.fillStyle = "rgba(0,0,0,1)";
recordLT++;
if(arrRes[recordLT]!=null){
arrResSP=arrRes[recordLT].split(/,/);
if(arrRes[recordLT+1]!=null){
  arrResSPN=arrRes[recordLT+1].split(/,/);
}
typeR=arrResSP[1];
cxR=arrResSP[2]-document.body.scrollLeft;
cyR=arrResSP[3]-document.body.scrollTop;
document.body.scrollLeft=arrResSP[4];
document.body.scrollTop=arrResSP[5];
if(arrResSP[6]!=null){
  timeTemp=arrResSP[6].split(/-/);
}
if(arrResSPN[6]!=null){
    timeTempN=arrResSPN[6].split(/-/);
  }
//console.log(timeTemp[6]);
//console.log(timeTempN[6]);
  var now=Number(timeTempN[3])*60*60*1000+Number(timeTempN[4])*60*1000+Number(timeTempN[5])*1000+Number(timeTempN[6]);
  var next=Number(timeTemp[3])*60*60*1000+Number(timeTemp[4])*60*1000+Number(timeTemp[5])*1000+Number(timeTemp[6]);
  intervalT=now-next;
  if(exp=="no"){
    if(vStatus!=arrResSP[7]&&arrResSP[7]!=null){
      if(vStatus=="paused"){
        player.ext_play(true);
        vStatus="playing";
      }else if(vStatus=="playing"){
        player.ext_play(false);
        vStatus="paused";
      }
    }
    if(vFS!=arrResSP[9]&&arrResSP[9]!=null){
      console.log(vFS+","+arrResSP[9]);
      if(vFS=="normal"){
        player.ext_setVideoSize("fit");
        vFS="fit";
      }else if(vFS=="fit"){
        player.ext_setVideoSize("normal");
        vFS="normal";
      }
    }
  }else if(exp=="experiment"){
    if(vStatusE!=arrResSP[7]&&arrResSP[7]!=null){
      if(arrResSP[7]=="1"){
        playVideo();
        vStatusE="1";
      }else if(arrResSP[7]=="2"){
        pauseVideo();
        vStatusE="2";
      }else if(arrResSP[7]=="5"||arrResSP[7]=="-1"){
        stopVideo();
        vStatusE=arrResSP[7];
      }
    }
  }
}

//console.log(typeR);
if(typeR!="NULL"){
  if(canR.width<10){
    if(youId!="nothing"){
      if(playerY.clientHeight>wh){
        canR.width=playerY.clientWidth;
        canR.height=playerY.clientHeight;
        ww=playerY.clientWidth;
        wh=playerY.clientHeight;
      }
    }else{
      canR.width=ww;
      canR.height=wh;
    }
  }
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
  canR.width=0;
  canR.height=0;
  recordL=0;
  clearInterval(timerId);

}
  if(typeR=="NULL"){
    if(canR.width>1&&canR.height>1){
      canR.width=0;
      canR.height=0;
    }
  }else if(typeR=="Light"){
    ctxR.fillStyle = "rgba(0,0,0,1)";
    //ctx.fillStyle = "rgba(0,0,0,0.85)";
    ctxR.fillRect(0,0,ww,wh);
    ctxR.globalCompositeOperation = "destination-out";
    for(var i=0;i<15;i++){
    ctxR.beginPath();
    ctxR.fillStyle = "rgba(0,0,0,"+(i/40+0.05)+")";
    //ctx.strokeStyle="rgba(0,0,0,"+((i-1)/49)+")";
    ctxR.lineWidth=1;
    //ctx.fillStyle = "rgba(255,255,255,0)";
    //ctx.lineWidth=i*40;
    ctxR.arc(cxR, cyR, 250-i*10, 0, Math.PI*2, true);
    ctxR.fill();
    }

    /* 合成演算子をセット */
    ctxR.globalCompositeOperation = "source-over";
  }else if(typeR=="Mist"){
      
    ctxR.globalAlpha = 1;
    ctxR.drawImage(image,0,0,ww,wh);
    ctxR.globalCompositeOperation = "destination-out";
    if(cxR>0&&cxR<2000&&cyR>0&&cyR<1000){
      if(Math.floor(cxR/50)>0&&Math.floor(cxR/50)<79&&Math.floor(cyR/50)>0&&Math.floor(cyR/50)<79){
            
          array[Math.floor(cx/50)][Math.floor(cy/50)-1]=33;
          array[Math.floor(cx/50)-1][Math.floor(cy/50)]=33;
          array[Math.floor(cx/50)+1][Math.floor(cy/50)]=33;
          array[Math.floor(cx/50)][Math.floor(cy/50)+1]=33;
          array[Math.floor(cx/50)-1][Math.floor(cy/50)-1]=50;
          array[Math.floor(cx/50)-1][Math.floor(cy/50)+1]=50;
          array[Math.floor(cx/50)+1][Math.floor(cy/50)-1]=50;
          array[Math.floor(cx/50)+1][Math.floor(cy/50)+1]=50;
          array[Math.floor(cx/50)][Math.floor(cy/50)]=0;
      }
    }
    for(var i=0;i<40;i++ ){
      for(var j=0;j<20;j++){
        if(array[i][j]<150){
          array[i][j]++;
        }
      }
    }
    for(var i=0;i<40;i++ ){
      for(var j=0;j<20;j++){
      //ctx.drawImage(image,0,0,2000,1000);
        var number=array[i][j]/150;
        if(number<1){
          //console.log(number);
          ctxR.globalAlpha = 1-number.toFixed(2);
          ctxR.drawImage(image,i*50,j*50,50,50,i*50,j*50,50,50);
        }
      }
    }
    ctxR.globalCompositeOperation = "source-over";
    ctxR.globalAlpha = 1;
  }else if(typeR=="LineWork"){
    //ctx.strokeStyle="rgba(255,255,255,1)";
    ctxR.strokeStyle="rgba(0,0,0,1)";
    ctxR.lineWidth=2;
        for(var i=0;i<ww;i+=50){
          var rnd=Math.random();
          ctxR.beginPath();
          ctxR.moveTo(i, 0);
          //ctx.lineTo(cx*0.8, cy*0.8);
          ctxR.lineTo(i+((cxR-i)*0.9)*rnd, cyR*0.9*rnd);
          ctxR.stroke();

          var rnd2=Math.random();
          ctxR.beginPath();
          ctxR.moveTo(i, wh);
          //ctx.lineTo(cx*0.8, cy*0.8);
          ctxR.lineTo(i+((cxR-i)*0.9)*rnd2, wh-((wh-cyR)*0.9)*rnd2);
          ctxR.stroke();
        }

        for(var i=0;i<wh;i+=50){
          var rnd=Math.random();
          ctxR.beginPath();
          ctxR.moveTo(0, i);
          //ctx.lineTo(cx*0.8, cy*0.8);
          ctxR.lineTo(cxR*0.9*rnd, i+((cyR-i)*0.9)*rnd);
          ctxR.stroke();

          var rnd2=Math.random();
          ctxR.beginPath();
          ctxR.moveTo(ww, i);
          //ctx.lineTo(cx*0.8, cy*0.8);
          ctxR.lineTo(ww-((ww-cxR)*0.9)*rnd2, i+((cyR-i)*0.9)*rnd2);
          ctxR.stroke();
        }
  }else if(typeR=="Mosaic"){

        var wid=50;
        var hei=50;
        
        for(var i=0;i<40;i++){
          for(var j=0;j<20;j++){
            ctx.strokeStyle="rgba(255,255,255,0)";
            if(i-2==Math.round(cx/50)&&j-2==Math.round(cy/50)||i-2==Math.round(cx/50)&&j-1==Math.round(cy/50)||i-2==Math.round(cx/50)&&j==Math.round(cy/50)||i-2==Math.round(cx/50)&&j+1==Math.round(cy/50)||i-2==Math.round(cx/50)&&j+2==Math.round(cy/50)||i-1==Math.round(cx/50)&&j-2==Math.round(cy/50)||i-1==Math.round(cx/50)&&j-1==Math.round(cy/50)||i-1==Math.round(cx/50)&&j==Math.round(cy/50)||i-1==Math.round(cx/50)&&j+1==Math.round(cy/50)||i-1==Math.round(cx/50)&&j+2==Math.round(cy/50)||i==Math.round(cx/50)&&j-2==Math.round(cy/50)||i==Math.round(cx/50)&&j-1==Math.round(cy/50)||i==Math.round(cx/50)&&j==Math.round(cy/50)||i==Math.round(cx/50)&&j+1==Math.round(cy/50)||i==Math.round(cx/50)&&j+2==Math.round(cy/50)||i+1==Math.round(cx/50)&&j-2==Math.round(cy/50)||i+1==Math.round(cx/50)&&j-1==Math.round(cy/50)||i+1==Math.round(cx/50)&&j==Math.round(cy/50)||i+1==Math.round(cx/50)&&j+1==Math.round(cy/50)||i+1==Math.round(cx/50)&&j+2==Math.round(cy/50)||i+2==Math.round(cx/50)&&j-2==Math.round(cy/50)||i+2==Math.round(cx/50)&&j-1==Math.round(cy/50)||i+2==Math.round(cx/50)&&j==Math.round(cy/50)||i+2==Math.round(cx/50)&&j+1==Math.round(cy/50)||i+2==Math.round(cx/50)&&j+2==Math.round(cy/50)){

            }else{
              if((i+j)%2==0){
              ctx.fillStyle = "rgba(255,255,255,1)";
              ctx.fillRect(i*50,j*50,wid,hei);
            }else{
              ctx.fillStyle = "rgba(255,255,255,0.3)";
              ctx.fillRect(i*50,j*50,wid,hei);
            }
            }
          }
        }
//ifの条件式がちゃんと＝＝になっているかチェック
  }else if(typeR=="Spot"){
        console.log(type+"間違い");
    ctxR.fillStyle = "rgba(0,0,0,0.5)";
    ctxR.fillRect(0,0,ww,wh);
    ctxR.globalCompositeOperation = "destination-out";
    ctxR.beginPath();
    ctxR.fillStyle = "red";
    //ctx.strokeStyle="rgba(0,0,0,"+((i-1)/49)+")";
    ctxR.lineWidth=1;
    //ctx.fillStyle = "rgba(255,255,255,0)";
    //ctx.lineWidth=i*40;
    ctxR.arc(cxR, cyR, 150, 0, Math.PI*2, true);
    ctxR.fill();
    /* 合成演算子をセット */
    ctxR.globalCompositeOperation = "source-over";
  
  }else if(typeR=="Rect"){

    ctxR.fillStyle = "rgba(0,0,0,0.5)";
    ctxR.fillRect(0,0,ww,wh);
    ctxR.globalCompositeOperation = "destination-out";
    ctxR.fillStyle = "red";
    ctxR.fillRect(cxR-ww/8,cyR-wh/8,ww/4,wh/4);
    ctxR.globalCompositeOperation = "source-over";
  }else if(typeR=="Plaid"){

        var wid=50;
        var hei=50;
        //ctx.fillStyle = "rgba(255,255,255,0.4)";
        for(var i=0;i<5;i++){
          for(var j=0;j<5;j++){
           
            ctx.strokeStyle="rgba(255,255,255,0)";
            //if(i-2==Math.round(cx/50)&&j-2==Math.round(cy/50)||i-2==Math.round(cx/50)&&j-1==Math.round(cy/50)||i-2==Math.round(cx/50)&&j==Math.round(cy/50)||i-2==Math.round(cx/50)&&j+1==Math.round(cy/50)||i-2==Math.round(cx/50)&&j+2==Math.round(cy/50)||i-1==Math.round(cx/50)&&j-2==Math.round(cy/50)||i-1==Math.round(cx/50)&&j-1==Math.round(cy/50)||i-1==Math.round(cx/50)&&j==Math.round(cy/50)||i-1==Math.round(cx/50)&&j+1==Math.round(cy/50)||i-1==Math.round(cx/50)&&j+2==Math.round(cy/50)||i==Math.round(cx/50)&&j-2==Math.round(cy/50)||i==Math.round(cx/50)&&j-1==Math.round(cy/50)||i==Math.round(cx/50)&&j==Math.round(cy/50)||i==Math.round(cx/50)&&j+1==Math.round(cy/50)||i==Math.round(cx/50)&&j+2==Math.round(cy/50)||i+1==Math.round(cx/50)&&j-2==Math.round(cy/50)||i+1==Math.round(cx/50)&&j-1==Math.round(cy/50)||i+1==Math.round(cx/50)&&j==Math.round(cy/50)||i+1==Math.round(cx/50)&&j+1==Math.round(cy/50)||i+1==Math.round(cx/50)&&j+2==Math.round(cy/50)||i+2==Math.round(cx/50)&&j-2==Math.round(cy/50)||i+2==Math.round(cx/50)&&j-1==Math.round(cy/50)||i+2==Math.round(cx/50)&&j==Math.round(cy/50)||i+2==Math.round(cx/50)&&j+1==Math.round(cy/50)||i+2==Math.round(cx/50)&&j+2==Math.round(cy/50)){
              if((i+j)%4==2){
              ctx.fillStyle = "rgba(204,204,204,0.75)";
              //ctx.fillRect(i*25-125,j*50-125,wid,hei);
              }else if((i+j)%4==3){
                ctx.fillStyle = "rgba(153,153,153,0.75)";
              }else if((i+j)%4==0){
                ctx.fillStyle = "rgba(102,102,102,0.75)";
              }else if((i+j)%4==1){
                ctx.fillStyle = "rgba(51,51,51,0.75)";
              }else{
              //ctx.fillStyle = "rgba(255,255,255,0.3)";
              ctx.fillStyle = "rgba(0,0,0,0.75)";
              
              }
              ctx.fillRect(cx+i*wid-125,cy+j*hei-125,wid,hei);
            //}else{
            
            //}
          }
        }
        for(var i=0;i<3;i++){
                      if(i%4==2){
              ctx.fillStyle = "rgba(204,204,204,0.75)";
              //ctx.fillRect(i*25-125,j*50-125,wid,hei);
              }else if(i%4==3){
                ctx.fillStyle = "rgba(153,153,153,0.75)";
              }else if(i%4==0){
                ctx.fillStyle = "rgba(102,102,102,0.75)";
              }else if(i%4==1){
                ctx.fillStyle = "rgba(51,51,51,0.75)";
              }else{
              //ctx.fillStyle = "rgba(255,255,255,0.3)";
              ctx.fillStyle = "rgba(0,0,0,0.75)";
              
              }
          ctx.fillRect(cx+i*wid-125+wid,cy-125-hei,wid,hei);
        }
        for(var i=0;i<3;i++){
        if(i%4==2){
              ctx.fillStyle = "rgba(204,204,204,0.75)";
              //ctx.fillRect(i*25-125,j*50-125,wid,hei);
              }else if(i%4==3){
                ctx.fillStyle = "rgba(153,153,153,0.75)";
              }else if(i%4==0){
                ctx.fillStyle = "rgba(102,102,102,0.75)";
              }else if(i%4==1){
                ctx.fillStyle = "rgba(51,51,51,0.75)";
              }else{
              //ctx.fillStyle = "rgba(255,255,255,0.3)";
              ctx.fillStyle = "rgba(0,0,0,0.75)";
              
              }
          ctx.fillRect(cx-125-wid,cy+i*hei-125+hei,wid,hei);
        }
        for(var i=0;i<3;i++){
        if(i%4==0){
              ctx.fillStyle = "rgba(204,204,204,0.75)";
              //ctx.fillRect(i*25-125,j*50-125,wid,hei);
              }else if(i%4==1){
                ctx.fillStyle = "rgba(153,153,153,0.75)";
              }else if(i%4==2){
                ctx.fillStyle = "rgba(102,102,102,0.75)";
              }else if(i%4==3){
                ctx.fillStyle = "rgba(51,51,51,0.75)";
              }else{
              //ctx.fillStyle = "rgba(255,255,255,0.3)";
              ctx.fillStyle = "rgba(0,0,0,0.75)";
              
              }
          ctx.fillRect(cx+i*wid-125+wid,cy-125+hei*5,wid,hei);
        }
        for(var i=0;i<3;i++){
        if(i%4==0){
              ctx.fillStyle = "rgba(204,204,204,0.75)";
              //ctx.fillRect(i*25-125,j*50-125,wid,hei);
              }else if(i%4==1){
                ctx.fillStyle = "rgba(153,153,153,0.75)";
              }else if(i%4==2){
                ctx.fillStyle = "rgba(102,102,102,0.75)";
              }else if(i%4==3){
                ctx.fillStyle = "rgba(51,51,51,0.75)";
              }else{
              //ctx.fillStyle = "rgba(255,255,255,0.3)";
              ctx.fillStyle = "rgba(0,0,0,0.75)";
              
              }
          ctx.fillRect(cx-125+wid*5,cy+i*wid-125+hei,wid,hei);
        }
//ifの条件式がちゃんと＝＝になっているかチェック
  }else if(typeR=="BFire"){
        ctxR.globalCompositeOperation = "source-over";
    ctxR.globalAlpha = 1;
    ctxR.drawImage(fireBF,0,0,ww,wh);
    ctxR.globalCompositeOperation = "destination-out";
    ctxR.globalAlpha = 1;
    ctxR.drawImage(fireAF,cx-375,cy-225,750,450);
    ctxR.globalCompositeOperation = "source-over";
    ctxR.globalAlpha = 0.5;
    ctxR.drawImage(fireAF,cx-375,cy-225,750,450);
    ctxR.globalAlpha = 1;
  }else if(typeR=="StarRing"){
  spR1.draw();
  spR2.draw();
  spR3.draw();
  spR4.draw();
  spR5.draw();
  spR6.draw();
  spR7.draw();
  spR8.draw();
  spR9.draw();
  spR10.draw();
  spR11.draw();
  spR12.draw();
  spR13.draw();
  spR14.draw();
  spR15.draw();
  spR16.draw();
  spR17.draw();
  spR18.draw();
  spR19.draw();
  spR20.draw();

  spR1.move();
  spR2.move();
  spR3.move();
  spR4.move();
  spR5.move();
  spR6.move();
  spR7.move();
  spR8.move();
  spR9.move();
  spR10.move();
  spR11.move();
  spR12.move();
  spR13.move();
  spR14.move();
  spR15.move();
  spR16.move();
  spR17.move();
  spR18.move();
  spR19.move();
  spR20.move();
  }else if(typeR=="MagicR"){
    if(arrx[4]!=-1&&arry[4]!=-1&&dist(arrx[0],arry[0],arrx[4],arry[4])<100&&dist(arrx[0],arry[0],arrx[4],arry[4])<100&&dist(arrx[0],arry[0],arrx[3],arry[3])<100&&dist(arrx[0],arry[0],arrx[2],arry[2])<100&&dist(arrx[0],arry[0],arrx[1],arry[1])<100){
      if(alphaMR<1){
        alphaMR+=0.002;
      }
      ctx.globalAlpha=alphaMR;
    }else{
      if(ctx.globalAlpha>0&&alphaMR>0){
        alphaMR-=0.001;
      }
      ctx.globalAlpha=alphaMR;
    }
    ctx.drawImage(magicR,cx-200,cy-200,400,400);
    if(countMR%30==29){
      for(var i=4;i>0;i--){
        arrx[i]=arrx[i-1];
        arry[i]=arry[i-1];
      }
        arrx[0]=cx;
        arry[0]=cy;
        countMR=0;
    }
    countMR++;
  }
  //setTimeout("recordL()",intervalT);
  if(arrRes[recordLT+1]!=null){
    //console.log(next+","+now+","+intervalT);
    setTimeout("recordL()",intervalT);
  }
 }
}; 
var codeK = function(evt){
  if (evt.which == 77)  //「M」が押されたか確認 mist
  {
    if(type=="Mist"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="Mist";
      can.width=ww;
      can.height=wh;
    }
  }
  if (evt.which == 76)  //「L」が押されたか確認 light
  {
    if(type=="Light"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="Light";
      can.width=ww;
      can.height=wh;
    }
  }
  if (evt.which == 87)  //「W」が押されたか確認 line work
  {
    //type="LineWork";
    if(type=="LineWork"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="LineWork";
      can.width=ww;
      can.height=wh;
    }
  }
  if (evt.which == 80)  //「P」が押されたか確認 line work
  {
    //type="Plaid";
    if(type=="Plaid"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="Plaid";
      can.width=ww;
      can.height=wh;
    }
  }
  if(evt.which==78){// N
    type="NULL";
    can.width=0;
    can.height=0;
    //can.style.position="absolute";
  }
    if (evt.which == 73)  //「i」が押されたか確認 Rect
  {
    //type="Plaid";
    console.log("押されています");
    if(type=="Rect"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="Rect";
      can.width=ww;
      can.height=wh;
    }
  }
  if(evt.which == 83){// S
    //type="Black";
    if(type=="Spot"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="Spot";
      can.width=ww;
      can.height=wh;
    }
  }
  if(evt.which==32){
    if(player.ext_getStatus()=="stopped"||player.ext_getStatus()=="paused"){
      player.ext_play(true);
    }else if(player.ext_getStatus()=="playing"){
      player.ext_play(false);
    }
  }
  if(evt.which == 82){// r
    //type="Black";
    if(type=="StarRing"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="StarRing";
      can.width=ww;
      can.height=wh;
    }
  }
  if(evt.which == 88){// x
    //type="Black";
    if(type=="Mosaic"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="Mosaic";
      can.width=ww;
      can.height=wh;
    }
  }
  if(evt.which == 67){// c
    //type="Black";
    if(Change==0){
      Change=1;
    }else{
      Change=0;

    }
  }
  if(evt.which == 84){//t
    recState="yes";
    recordFlag++;
    recordFlag=recordFlag%3; 
    //type="Black";
if(recordFlag==1){
  recordPos[0]=location.href+"\r\n";
  playVideo();
}else if(recordFlag==2){
  var DDR = new Date();
  var YearR = DDR.getFullYear();
  var MonthR = DDR.getMonth() + 1;
  var DayR = DDR.getDate();
  var HR = DDR.getHours();
  var MR = DDR.getMinutes();
  var SR = DDR.getSeconds();
  var MSR = DDR.getMilliseconds();
var name = 'RPos-'+YearR+'-'+MonthR+'-'+DayR+'-'+HR+'-'+MR+'-'+SR+'-'+MSR;

var blob = new Blob( [recordPos], {type: 'text/plain'} );
    var url = window.URL || window.webkitURL;
    var blobURL = url.createObjectURL(blob);

    var a = document.createElement('a');
    a.download = name+'.txt';
    a.href = blobURL;
    a.click();  
    recordFlag=0;
    recordPos=new Array();
}
    /*/
    if(type=="Tear"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="Tear";
      tearCount=0;
      can.width=ww;
      can.height=wh;
    }
    /*/
  }
  if(evt.which == 66){// bf
    //type="Black";
    if(type=="BFire"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="BFire";

      can.width=ww;
      can.height=wh;
    }
  }
  if(evt.which == 79){// o
    //type="Black";
    if(type=="MagicR"){
      type="NULL";
      can.width=0;
      can.height=0;
    }else{
      type="MagicR";

      can.width=ww;
      can.height=wh;
    }
  }
  if(evt.which == 68){// d
    //type="Black";
    if(location.href=="http://localhost/PHPForYoutube/experimentYNPC.php"){
      playVideo();
    }
  }
  if(type!="NULL"&&youId!="nothing"){
    if(playerY.clientHeight>wh){
      can.width=playerY.clientWidth;
      can.height=playerY.clientHeight;
      ww=playerY.clientWidth;
      wh=playerY.clientHeight;
    }
  }

}
; 
//var codeB ='function getTextFile(encd) {var myFile = document.getElementById("logFile").files[0];if (myFile.type.indexOf("text") == 0) {var reader = new FileReader();reader.onload = function(evt){var txt = evt.target.result; txt = txt.replace(/</g, "&lt;");txt = txt.replace(/>/g, "&gt;"); txt = "<p>MIME : " + myFile.type + "</p><pre>" + txt + "</pre>";document.getElementById("divAdd").innerHTML = txt;}reader.readAsText(myFile, encd);}}';
  src = "var ready=0;var countM=0;var can;var ctx;var recState='no';var canR;var leng;var exp='"+exp+"';var youId='"+youId+"';var ctxR;var intervalT=20;var timeTemp;var timeTempN;var cx=0;var cy=0;var SMSS;var timerId;var cxR=0;var cyR=0;var recordLT=0;var id='"+id+"';var arrRes;var arrResSP;var arrResSPN;var typeR='NULL';var recordFlag=0;var cxLog=0;var cyLog=0;var vStatus='paused';var vStatusE='5';var vFS='normal';var recordPos=new Array();var sw=0;var sh=0;var arrx=new Array(5);var arry=new Array(5);var countMR=0;var alphaMR=0.2;var sp1;var sp2;var sp3;var sp4;var sp5;var sp6;var sp7;var sp8;var sp9;var sp10;var sp11;var sp12;var sp13;var sp14;var sp15;var sp16;var sp17;var sp18;var sp19;var sp20;var speed = Math.PI / 60;var radius = 140;var effectCount=0;var Change=0;var arrayOfStrings;var vposStartTArr;var vposEndTArr;var effectArr;var startYArr;var endYArr;var effectTArr;var player = document.getElementById('external_nicoplayer');var playerY = document.getElementById('movie_player');var dateL;var secondsL;var dateR;var vposSend='"+vposSend.toString()+"';var vposStartT='"+vposStartT.toString()+"';var vposEndT='"+vposEndT.toString()+"';var effect='"+effect.toString()+"';var startY='"+startY.toString()+"';var endY='"+endY.toString()+"';var effectT='"+effectT.toString()+"';var secondsR;var type='NULL';var ww;var wh;var array = new Array();var image=new Image();image.src='http://localhost/img/mist5.png';var fireBF=new Image();fireBF.src='http://localhost/img/BF2.png';var fireAF=new Image();fireAF.src='http://localhost/img/AF.png';var magicR=new Image();magicR.src='http://localhost/img/magicRing.png';var ws = new WebSocket('ws://localhost:6556');"+codeDist.toString()+"\n"+codeS.toString()+"\n"+codeSleep.toString()+"\n"+codeInit.toString()+"\n"+codeMR.toString()+"\n"+codeB.toString()+"\nonload ="+codeL.toString()+"\n"+codeTobii.toString()+"\nws.onmessage ="+codeM.toString()+"\ndocument.onkeydown="+codeK.toString();
  sc.type="text/javascript";
  sc.text=src
  return sc;
}()
);