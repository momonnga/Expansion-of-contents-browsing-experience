var thread_id;
var ms;
var ms2;

//var id="sm26469989";
var id="sm9";
var nowURL=location.href;
var bar=nowURL.match(/(sm.+)/);
//var vposSend=9999999;
//console.log(bar[0]);
if(bar!=null){
    id=bar[0];
}
    for(var i = 0, len = 2; i < len; i++){
        if(i==0){
           var targetURL="http://localhost/niconicoSam/getComment.php?id="+id;
        }else{
            var newMs=ms2.replace("api","api.json","gi");
            var targetURL=newMs+"thread?version=20061206&thread="+thread_id+"&res_from=-1000";
        }
        //var targetURL = targetURLArr[i];
        var xhr = $.ajax({
            url: targetURL,
            dataType: 'json',
            async: false,
            success: function(data){
              ///console.log(data);
              if(i==0){
              console.log(data[0].ms);
              thread_id=data[0].thread_id;
              ms2=decodeURIComponent(data[0].ms);
              console.log(ms2);
              console.log(thread_id);
          }else{
            //alert(data[999].chat.content);
            //alert(data[999].chat.vpos);
            vposSend=Math.floor((data[999].chat.vpos)/10);
            console.log(data[999].chat);
            alert(data[999].chat.content);
            alert(data[999].chat.vpos);
          }
          }
        });
    }