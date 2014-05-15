'use strict';
//var ws = new WebSocket("ws://"+location.host+":51234/");
var ws = new WebSocket("ws://192.168.11.9:51234/");
$(function(){
    
    
	ws.onclose = function() {
		console.log("socket closed")
	};

	ws.onopen = function() {
 	       ws.send("LINE#WS#" + "hello server");
 	};
});


var flagA = true;
var flagB;
var flagC = false;
var flagG = false;
//var gon
var pdftitle = '/assets/' + gon.hoge + ".pdf";
var undoImage;
var undoImages = new Array;
var redoImage;
var redoImages = new Array;

var usernumber = gon.articles
 
var uImage;
var uImages = new Array;
var rImage;
var rImages = new Array;
for (var i = 0; i < usernumber.length; i= i+1){
  uImages[i] = new Array;
  rImages[i] = new Array;
}

var rname = null;
var cc = 0;
var cid;
var cdata = new Array;
var comme = new Array;
comme[0] = null;
var lastX = null;
var lastY = null;

    var basearray = new Array();
    var oimage = new Array();
    var zimage = new Array();
    var wimage = new Array();
 
var usr = gon.usr
var usrpos
var apos_user

  var test = 0
//  var 'test' + test2 = 10

//var ws = new WebSocket("ws://localhost:3000");



function Memo() {
//  window.alert("メモ");
//  if (flagG == true)
//  {

//  window.alert("ラインを作成している場合、メモを作成する前にライン保存を行ってください。");
//  }


//  window.alert(userscontext[4]);//[0][0]);
//  if(apos_user != usr.userid){
//  window.alert(userscontext[3]);

// for (var i = 0; i < usernumber.length; i= i+1){
//   var ima = document.getElementById("user_"+i);
//   if (usr.name == ima.getAttribute("name")){
//     var number = ima.getAttribute("number");
//     break;
//   }
// }
  
//  window.alert(number);
//  window.alert(wimage[1]);
//  window.alert(wimage[2]);
//  window.alert(wimage[3]);
//  window.alert(wimage[4]);
//  window.alert(test);
  
  flagA = true;
  flagC = false;
  document.getElementById('black').style.display="none";
  document.getElementById('red').style.display="none";
  document.getElementById('blue').style.display="none";
  document.getElementById('yellow').style.display="none";
  document.getElementById('b4').style.display="none";
  document.getElementById('b3').style.display="none";
  document.getElementById('b2').style.display="none";
  document.getElementById('b1').style.display="none";
  document.getElementById('undo').style.display="none";
  document.getElementById('redo').style.display="none";
//  $('#choose [id=choice]').val("テキストメモ");
  $('#choooose [id=memo]').css('background-color','#ffcccc');
  $('#choooose [id=line]').css('background-color','');
  $('#choooose [id=sline]').css('background-color','');
  $('#choooose [id=eraser]').css('background-color','');
}



function Line(){
  flagA = 2;
  flagC = false;
//  window.alert("フリーライン");
  document.getElementById('black').style.display="inline";
  document.getElementById('red').style.display="inline";
  document.getElementById('blue').style.display="inline"; 
  document.getElementById('yellow').style.display="inline";
  document.getElementById('b4').style.display="inline";
  document.getElementById('b3').style.display="inline";
  document.getElementById('b2').style.display="inline";
  document.getElementById('b1').style.display="inline";
  document.getElementById('undo').style.display="inline";
  document.getElementById('redo').style.display="inline";
  $('#choooose [id=memo]').css('background-color','');
  $('#choooose [id=line]').css('background-color','#ffcccc');
  $('#choooose [id=sline]').css('background-color','');
  $('#choooose [id=eraser]').css('background-color','');
//  $('#choose [id=choice]').val("フリーライン");
}
function Sline(){
  flagA = 3;
  flagC = false;
//  window.alert("直線");
  document.getElementById('black').style.display="inline";
  document.getElementById('red').style.display="inline";
  document.getElementById('blue').style.display="inline"; 
  document.getElementById('yellow').style.display="inline";
  document.getElementById('b4').style.display="inline";
  document.getElementById('b3').style.display="inline";
  document.getElementById('b2').style.display="inline";
  document.getElementById('b1').style.display="inline";
  document.getElementById('undo').style.display="inline";
  document.getElementById('redo').style.display="inline";
  $('#choooose [id=memo]').css('background-color','');
  $('#choooose [id=line]').css('background-color','');
  $('#choooose [id=sline]').css('background-color','#ffcccc');
  $('#choooose [id=eraser]').css('background-color','');
//  $('#choose [id=choice]').val("直線");
}
function Eraser(){
  flagA = 2;
  flagC = true;
  document.getElementById('black').style.display="none";
  document.getElementById('red').style.display="none";
  document.getElementById('blue').style.display="none";   
  document.getElementById('yellow').style.display="none";
  document.getElementById('b4').style.display="inline";
  document.getElementById('b3').style.display="inline";
  document.getElementById('b2').style.display="inline";
  document.getElementById('b1').style.display="inline";
  document.getElementById('undo').style.display="inline";
  document.getElementById('redo').style.display="inline";
  $('#choooose [id=memo]').css('background-color','');
  $('#choooose [id=line]').css('background-color','');
  $('#choooose [id=sline]').css('background-color','');
  $('#choooose [id=eraser]').css('background-color','#ffcccc');
//  window.alert("消しゴム");
//  $('#choose [id=choice]').val("消しゴム");
}

var flagF = true;
function Appear(){
  if (flagF == true){
  $('#the-canvas').hide();
  $('#second-canvas').hide();
  flagF = false;
  $('#choooose [id=anbutton]').css('background-color','');
  }
  else{
  $('#the-canvas').show();
  $('#second-canvas').show();
  flagF = true;
  $('#choooose [id=anbutton]').css('background-color','#ffcccc');
  }
}
function Disappear(){
  $('#the-canvas').hide();
  $('#second-canvas').hide();
}
var flagH = true;
function Another()
{
  if (flagH == true)
  {
//  $('#the-canvas').show();
    for (var i = 0; i < usernumber.length; i= i+1)
    {
      $("#user_"+ i).hide()   
    }
    flagH = false;
    $('#choooose [id=other]').css('background-color','');
  }
  else
  {
    for (var i = 0; i < usernumber.length; i= i+1)
    {
      $("#user_"+ i).show()   
    }
    flagH = true;
    $('#choooose [id=other]').css('background-color','#ffcccc');
  }  
}

var pdfpage;
var pdfinfo;

function load()
{
    if(location.search != null && location.search != "") {
        var page = location.search.replace("?page=", "");
        pdfpage = Number(page);
    }
    else {
        pdfpage = 1;
    }
}

//var pdfname = $("#3").attr("class")



var flagD = 1;
function Black()
{ 
  flagD = 1;
//   window.alert("黒");
   $('#choooose [id=black]').css('background-color','#ffcccc');
   $('#choooose [id=red]').css('background-color','');
   $('#choooose [id=blue]').css('background-color','');
   $('#choooose [id=yellow]').css('background-color','');
}
function Red()
{ 
  flagD = 2;
//   window.alert("赤");
   $('#choooose [id=black]').css('background-color','');
   $('#choooose [id=red]').css('background-color','#ffcccc');
   $('#choooose [id=blue]').css('background-color','');
   $('#choooose [id=yellow]').css('background-color','');
   
}
function Blue()
{ 
  flagD = 3;
//   window.alert("青");
   $('#choooose [id=black]').css('background-color','');
   $('#choooose [id=red]').css('background-color','');
   $('#choooose [id=blue]').css('background-color','#ffcccc');
   $('#choooose [id=yellow]').css('background-color','');
   
}
function Yellow()
{ 
  flagD = 4;
//   window.alert("蛍光黄");
   $('#choooose [id=black]').css('background-color','');
   $('#choooose [id=red]').css('background-color','');
   $('#choooose [id=blue]').css('background-color','');
   $('#choooose [id=yellow]').css('background-color','#ffcccc');
   
}
var flagE = 2;
function B4()
{ 
  flagE = 4;
//   window.alert("極太"); 
   $('#choooose [id=b4]').css('background-color','#ffcccc');
   $('#choooose [id=b3]').css('background-color','');
   $('#choooose [id=b2]').css('background-color','');
   $('#choooose [id=b1]').css('background-color','');  
}
function B3()
{ 
  flagE = 3;
//   window.alert("太"); 
   $('#choooose [id=b4]').css('background-color','');
   $('#choooose [id=b3]').css('background-color','#ffcccc');
   $('#choooose [id=b2]').css('background-color','');
   $('#choooose [id=b1]').css('background-color','');    
}
function B2()
{ 
  flagE = 2;
//   window.alert("細");  
   $('#choooose [id=b4]').css('background-color','');
   $('#choooose [id=b3]').css('background-color','');
   $('#choooose [id=b2]').css('background-color','#ffcccc');
   $('#choooose [id=b1]').css('background-color','');   
}
function B1()
{ 
  flagE = 1;
//   window.alert("極細");  
   $('#choooose [id=b4]').css('background-color','');
   $('#choooose [id=b3]').css('background-color','');
   $('#choooose [id=b2]').css('background-color','');
   $('#choooose [id=b1]').css('background-color','#ffcccc');   
}
//(function($){
//  $('#dialog2').accordion();
//  })(jQuery);
 

function Save(){
  var canvas = document.getElementById("the-canvas");
  if (canvas.getContext) {
    var  ctx = canvas.getContext('2d');
    var img=new Image();
    var type = 'image/png';
    img.src = canvas.toDataURL(type);
//    var DD = new Date();
//    var Year = DD.getYear();
//    var Month = DD.getMonth() + 1;
//    var Day = DD.getDate();
//    var Hours = DD.getHours();
//    var Minutes = DD.getMinutes();
//    var Seconds = DD.getSeconds();
//    var date = (Year"-"Month"-"Day Hours":"Minutes":"Seconds);
//    window.alert(date);
//    $('#lines [id = annotation_line]').val(img.src);
//    $('#lines [id=annotation_page]').val(Number(pdfpage));
//    $('#lines').dialog();

  ws.send("SAVE#WS#" + img.src + "#WS#" + gon.hoge + "#WS#" + pdfpage + "#WS#" + usr.userid);
  }
}

$(document).ready(function(){
    
    $('.accordion_head').click(function() {
        $(this).next().slideToggle();
    }).next().hide();
});

function Return(num){
//  var id = num;
  var comeid = Number($(num).attr("comid"));
  var name = $(num).attr("uid");
//  window.alert(name + "さんに対する返信");
//	$('#new_comment [id=comment_p_id]').val(String(id));
  $('#new_comment [id=comment_p_id]').val(comeid);
  $('#state').html("<b>" + name + "さんに対する返信</b>");
  $('#new_comment').show();
  $('#submitbutton').show();
  $('#newcommentbutton').show();
  } 
  
  function Return2(id, name){
//  window.alert(id + name);
  rname = name;
  $('#new_comment [id=comment_p_id]').val(id);
  $('#state').html("<b>" + name + "さんに対する返信</b>");
  $('#new_comment').show();
  $('#submitbutton').show();
  $('#newcommentbutton').show();
  } 
    
function Newcomment(){
  $('#state').html("<b>新規コメント</b>");
  $('#new_comment').show();
  $('#submitbutton').show();
  $('#newcommentbutton').hide();
  $('#new_comment [id=comment_p_id]').val(null);
  }
  
function Submit(){
//  window.alert(document.form1.comment_article_id.value + document.form1.comment_page.value + document.form1.comment_p_id.value);
  var data = {}
  data.comflag = 1;
  data.x = document.form1.comment_x.value;
  data.y = document.form1.comment_y.value;
  data.comment = document.form1.comment_comment.value;
  data.pid = document.form1.comment_p_id.value;
  data.user = document.form1.comment_user_id.value;
  data.article = document.form1.comment_article_id.value;
  data.page = document.form1.comment_page.value;
  data.rname = rname;
  if (flagB == true){
    data.flagB = true;
  }
  else {
    data.flagB = false;
  }
//  window.alert(rname);

  ws.send("COMM#WS#" + document.form1.comment_x.value + "#WS#" + document.form1.comment_y.value + "#WS#" + document.form1.comment_comment.value + "#WS#" + document.form1.comment_p_id.value + "#WS#" + document.form1.comment_user_id.value + "#WS#" + document.form1.comment_article_id.value + "#WS#" + document.form1.comment_page.value + "#WS#"  + JSON.stringify(data));

}     

    var scale;
    var viewport;
    var canvas;
    var context;
    var scanvas;
    var scontext;
    var ucanvas;
    var ucontext;

    var userscanvas = new Array(); //130418
    var userscontext = new Array();

   


//PDFJS.getDocument('/assets/aaaaa.pdf').then(function(pdf) {
//PDFJS.getDocument('/assets/2012.pdf').then(function(pdf) {
PDFJS.getDocument(pdftitle).then(function (pdf) {
  pdf.getPage(pdfpage).then(function(page) {
  //window.addEventListener("load", function(){
//    $('#choose [id=choice]').val("テキストメモ");
    pdfinfo = pdf;
    scale = 1.5;
    viewport = page.getViewport(scale);
//    canvas = document.getElementById('the-canvas');
//    context = canvas.getContext('2d');
    scanvas = document.getElementById('second-canvas');
    scontext = scanvas.getContext('2d');
    ucanvas = document.getElementById('under-canvas');
    ucontext = ucanvas.getContext('2d');



    for (var i = 0; i < usernumber.length; i= i+1)//-----------------------------------------------------------mondai
    {
//       userscanvas[i] = document.getElementById('the-canvas_' + i);
//       userscontext[i] = userscanvas[i].getContext('2d');

       if(usr.id == usernumber[i].id)
         {
           //usrpos = i
           canvas = document.getElementById('the-canvas');
           context = canvas.getContext('2d');
   	   canvas.height = viewport.height;
     	   canvas.width = viewport.width;
           $('#the-canvas_' + i).hide();
         }
       else
         {
	    userscanvas[i] = new Object
           userscanvas[i] = document.getElementById('the-canvas_' + i);
           userscontext[i] = userscanvas[i].getContext('2d');
  	   userscanvas[i].height = viewport.height;
    	   userscanvas[i].width = viewport.width;
       
         }
    }


    context.globalAlpha = 1.0;
    ucanvas.height = viewport.height;
    ucanvas.width = viewport.width;
    scanvas.height = viewport.height;
    scanvas.width = viewport.width;
 //   canvas.height = viewport.height;
  //  canvas.width = viewport.width; 
    
    document.getElementById('page_num').textContent = pdfpage;
    document.getElementById('page_count').textContent = pdfinfo.numPages;
    
    var startX = 0;
    var startY = 0;
    var flag = false;
    var arrayX = [];
    var arrayY = [];
    var subwin;
    var image = new Image();
    image.src = "/assets/sample1.png";
    var pos_x;
    var pos_y;
    var pos_page;
    
    
    for (var i = 0; i < usernumber.length; i= i+1){
      var ima = document.getElementById("user_"+i);
	if (usr.name == ima.getAttribute("name")){
	  var number = ima.getAttribute("number");
	  break;
        }
    }
	
//-----------------------------------------------------------------------------------
    canvas.addEventListener("mousedown", function(event) {    
      flag = true;
      var rect = event.target.getBoundingClientRect(); 
      startX = event.clientX - rect.left;
      startY = event.clientY - rect.top;
//      for (var i = 0; i < $(".comment").size(); i= i+1) {
//        document.getElementById('pdf_' + i).style.display="none";
//
//		  }
     if (flagA != true) {
       undoImage = context.getImageData(0, 0, $('canvas').width(), $('canvas').height()); 
       undoImages.push(undoImage);
       redoImages = new Array;
       var data = {};
       data.undoflag = 2;
       data.userid = number;
       data.article = gon.hoge;
       data.page = pdfpage;
       ws.send("LINE#WS#" + JSON.stringify(data));
     }
		}, true);
//------------------------------------------------------------------------------------		
		canvas.addEventListener("mousemove", function(event){
      if (flagA == 2) {
        if (flag) {
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;
          if(flagC == true) {
//            context.lineWidth = 50;
            context.globalAlpha = 1;
            if(flagE == 4){
            context.lineWidth = 50; 
            }
            if(flagE == 3){
            context.lineWidth = 20; 
            }
            if(flagE == 2){
            context.lineWidth = 5; 
            }            
            if(flagE == 1){
            context.lineWidth = 3;
            } 
            context.globalCompositeOperation = 'destination-out';
            context.strokeStyle = "#000000";  
            flagG = true;        
          } 
          else {
            if(flagE == 4){
            context.lineWidth = 10;
            }
            if(flagE == 3){
            context.lineWidth = 5;
            }
            if(flagE == 2){
            context.lineWidth = 3;
            }            
            if(flagE == 1){
            context.lineWidth = 1;
            }            
//            context.lineWidth = 5;
            context.globalCompositeOperation = 'source-over';
            flagG = true;
            if (flagD == 1 ){
              context.globalAlpha = 1;
              context.strokeStyle = "#000000";
              }
            if (flagD == 2){
               context.globalAlpha = 1;
               context.strokeStyle = "#FF0000";
              }
            if (flagD == 3){
               context.globalAlpha = 1;
               context.strokeStyle = "#0033cc";
              }  
            if (flagD == 4){
               context.globalAlpha = 0.4;
               context.strokeStyle = "#ffff00";
              }  
              
          }
          
          var data = {}
          data.undoflag = 0;
          data.userid = number;
          data.article = gon.hoge;
          data.page = pdfpage;
          data.flagA = flagA;
          data.startX = startX;
          data.startY = startY;
          data.endX = x;
          data.endY = y;
          data.width = context.lineWidth;
          data.style = context.strokeStyle;
          data.alpha = context.globalAlpha;
          data.comp = context.globalCompositeOperation;
          ws.send("LINE#WS#" + JSON.stringify(data));
          
//  以下線を滑らかに描画するための部分
	  if (flagD != 4 || flagC == true){
            var half_get_size = context.lineWidth / 2;
            context.beginPath();
            context.globalAlpha = context.globalAlpha;
            context.globalCompositeOperation = context.globalCompositeOperation;
	    context.fillStyle = context.strokeStyle;
	    context.arc(x, y, half_get_size, 0, Math.PI*2, true);
	    context.fill();
	  }
//  以上線を滑らかに描画するための部分

          context.beginPath();
          context.moveTo(startX, startY);
          context.lineTo(x, y);
          context.stroke();
          startX = x;
          startY = y;
          flagG = true;
        }
      }
//  ws.addEventListener("message", function(event){
    // 受信したデータの解析
//    var data = JSON.parse(event.data);
    // コンテキスト、始点、終点、線の太さを指定して線を描画
//    drawLine(context, data.startX, data.startY, data.endX, data.endY, width);
//  }, true);

    }, true);

//------------------------------------------------------------------------------------  
    canvas.addEventListener("mouseup", function(event){
      if (flag) {
        var rect = event.target.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = "#000000";
        context.moveTo(startX, startY);
  //      context.stroke();
  
        for (var i = 0; i < $(".comment").size(); i= i+1) {
        document.getElementById('pdf_' + i).style.display="none";

		    }

	if (flagA == 2){
          Save();
	}
	
        if (flagA == 3){
            context.globalCompositeOperation = 'source-over';
            if(flagE == 4){context.lineWidth = 10;}
            if(flagE == 3){context.lineWidth = 5;}
            if(flagE == 2){context.lineWidth = 3;}            
            if(flagE == 1){context.lineWidth = 1;}
        
        
            if (flagD == 1 ){
              context.globalAlpha = 1;
              context.strokeStyle = "#000000";
              }
            if (flagD == 2){
               context.globalAlpha = 1;
               context.strokeStyle = "#FF0000";
              }
            if (flagD == 3){
               context.globalAlpha = 1;
               context.strokeStyle = "#0033cc";
              }  
            if (flagD == 4){
               context.globalAlpha = 0.4;
               context.strokeStyle = "#ffff00";
              } 

         var data = {}
         data.undoflag = 0;
         data.userid = number;
         data.article = gon.hoge;
         data.page = pdfpage;
         data.flagA = flagA;
         data.startX = startX;
         data.startY = startY;
         data.endX = x;
         data.endY = y;
         data.width = context.lineWidth;
         data.style = context.strokeStyle;
         data.alpha = context.globalAlpha;
         data.comp = context.globalCompositeOperation;
         ws.send("LINE#WS#" + JSON.stringify(data));
         if(eval(startY -y) <= 40 && eval(startY -y) >= -40){
           context.lineTo(x, startY);
         }
         else{
           context.lineTo(x, y);
         }
          


          
          flagG = true;
          context.stroke();
          startX = x;
          startY = y;
          Save();
          }

        if (flagA == true) {
          $("#res").html("");
          flagB = false;
          for (var i = 0; i< $(".comment").size(); i= i+1) {
//            listx = document.getElementById('pdf_' + i).innerHTML;
//            listx = parseInt(listx)
//            listy = document.getElementById('pdf_' + eval(i+1)).innerHTML;
//            listy = parseInt(listy)
              pos_x = Number($("#pdf_" + i).attr("pos_x"));
              pos_y = Number($("#pdf_" + i).attr("pos_y"));
              pos_page = Number($("#pdf_" + i).attr("pdf_page"));
            if (x < pos_x && x < pos_x - 50 && y < pos_y && y < pos_y - 50 && pos_page == pdfpage) {  //既存コメをクリック時にBを立てる
              flagB = true;
		    	    var com_i = i;
		    	    var com_x = pos_x;
		    	    var com_y = pos_y;
		    	    document.getElementById('pdf_' + i).style.display="block";
//		    	    document.getElementById('pdf_' + eval(i+3)).style.display="block";
//		    	    var listart =document.getElementById('pdf_' + eval(i+2)).innerHTML;
//              var listcom =document.getElementById('pdf_' + eval(i+3)).innerHTML;
                var listcom =$("#pdf_" + i).attr("listcom");
                
	    }
	  }
	  if (comme[0] != null){  //新規追加コメをクリックした時にBを立てる
	    for (var i = 0; i < cc; i=i+1){
	      if (x > comme[i][0] && x < comme[i][0] + 50 && y > comme[i][1] && y < comme[i][1] + 50 && comme[i][6] == pdfpage){
	        flagB = true;
	      }
	    }
	  }
	  if (flagB == false) {  //何もないところをクリックし新規コメを追加する場合
	    lastX = x;
	    lastY = y;
	    $('#new_comment [id=comment_x]').val(Number(x));
            $('#new_comment [id=comment_y]').val(Number(y));
            $('#new_comment [id=comment_page]').val(Number(pdfpage));
	    $('#state').html("<b>新規コメント</b>");
            $('#new_comment').show();
	    $('#submitbutton').show();
            $('#new_comment [id=comment_p_id]').val(null);
            $('#newcommentbutton').hide();
            $("#reload").html("");
            $("#res").html("");
                
//            document.getElementById('test_aaa').value=x;
            
            $('#dialog2').dialog({
            width: "auto",
            buttons: {
            　"閉じる": function(){
　　            $(this).dialog('close');
　　            $("#reload").html("");
//　　            $("#res").html("");
　             }
             }
           });
                                         
          } 
          else {  //新しく追加されたコメ・既存コメをクリック時
            lastX = com_x;
            lastY = com_y;
            $('#new_comment [id=comment_x]').val(Number(com_x));
            $('#new_comment [id=comment_y]').val(Number(com_y));
            $('#new_comment [id=comment_page]').val(Number(pdfpage));
	    $('#state').html("");
            $('#new_comment').hide();
            $('#submitbutton').hide();
            $('#newcommentbutton').show();
            $("#reload").html("");
            if (comme[0] != null){  //追加コメの数だけループ
              for(var i = 0; i < cc; i = i+1){
                if (comme[i][0] == com_x && comme[i][1] == com_y &&comme[i][5] == gon.hoge && comme[i][6] == pdfpage){  //既存コメクリック時
                  
                  if (comme[i][3] != "" && comme[i][7] ==null){
                    for (var j = 0; j >= 0; j= j+1){
                      var com2 = document.getElementById("pdf_"+j);
	              if (comme[i][3] == com2.getAttribute("comid")){
	                $("#reload").html("<a href=javascript:location.reload()>以下のコメントが追加されています。表示を整えるには更新してください。</a><br>" );
	                $("#res").append("for <i>" + com2.getAttribute("uid") + "</i> from <i>" + comme[i][4] + "</i>：" + comme[i][2] + "&nbsp;");
	                $("#res").append("<input onclick=\"Return2("+ comme[i][8] + ", '" + comme [i][4] + "')\" type='button' value='返信'>" + "<br>" );
	                break;
                      }
                    }
                  }
                  if (comme[i][3] != "" && comme[i][7]){
          	    $("#reload").html("<a href=javascript:location.reload()>以下のコメントが追加されています。表示を整えるには更新してください。</a><br>" );
	            $("#res").append("for <i>" + comme[i][7] + "</i> from <i>" + comme[i][4] + "</i>：" + comme[i][2] + "&nbsp;");
	            $("#res").append("<input onclick=\"Return2("+ comme[i][8] + ", '" + comme [i][4] + "')\" type='button' value='返信'>" + "<br>" );
                 }
                  if ( comme[i][3] == "" ){
                    $("#reload").html("<a href=javascript:location.reload()>以下のコメントが追加されています。表示を整えるには更新してください。</a><br>" );
                    $("#res").append("　" + " from <i>" + comme[i][4] + "</i>：" + comme[i][2] + "&nbsp;");
	            $("#res").append("<input onclick=\"Return2("+ comme[i][8] + ", '" + comme [i][4] + "')\" type='button' value='返信'>" + "<br>" );
                  }
                }
                else if (x > comme[i][0] && x < comme[i][0] + 50 && y > comme[i][1] && y < comme[i][1] + 50 && comme[i][6] == pdfpage){  //新しく追加されたコメをクリック時
                  if (comme[i][3] != "" ){
                    for (var j = 0; j >= 0; j= j+1){
                      var com2 = document.getElementById("pdf_"+j);
	              if (comme[i][3] == com2.getAttribute("comid")){
	                $("#reload").html("<a href=javascript:location.reload()>以下のコメントが追加されています。表示を整えるには更新してください。</a><br>" );
	                $("#res").append("for <i>" + com2.getAttribute("uid") + "</i> from <i>" + comme[i][4] + "</i>：" + comme[i][2] + "&nbsp;");
	                $("#res").append("<input onclick=\"Return2("+ comme[i][8] + ", '" + comme [i][4] + "')\" type='button' value='返信'>" + "<br>" );
	                break;
                      }
                    }
                  }
                  if ( comme[i][3] == "" ){
                    $("#reload").html("<a href=javascript:location.reload()>以下のコメントが追加されています。表示を整えるには更新してください。</a><br>" );
                    $("#res").append("　" + " from <i>" + comme[i][4] + "</i>：" + comme[i][2]　+ "<br>" );
                  }
                }
                else {
                  window.alert("a");
                }
              }
            }
            else{
            }        
                        
//            document.getElementById('test_aaa').value=x;
            
            $('#dialog2').dialog({
            width: "auto",
            buttons: {
            　"閉じる": function(){
　　            $(this).dialog('close');
　　            $("#reload").html("");
//　　            $("#res").html("");
　             }
             }
           });
            
          }
          arrayX[arrayX.length]=x;
          arrayY[arrayY.length]=y;
        }
        else {
        }
      }
      flag = false;
    });
    
      
//-------------------------------------------------------------------    
    ws.addEventListener("message", function(event){
    // 受信したデータの解析
    var data = JSON.parse(event.data);
    if (data.cid){
      cid = data.cid;
//      window.alert(cid);
    }
    if (data.article == gon.hoge && data.page == pdfpage){
      if (data.undoflag == 0){
        if (data.flagA == 2){
    // コンテキスト、始点、終点、線の太さを指定して線を描画
          drawLine(userscontext[data.userid], data.startX, data.startY, data.endX, data.endY, data.width, data.style, data.alpha, data.comp);
        }
        if (data.flagA == 3){
          sLine(userscontext[data.userid], data.startX, data.startY, data.endX, data.endY, data.width, data.style, data.alpha, data.comp);
        }
      }
    }
    if (data.redoflag == 1){
      for (var i = 0; i < usernumber.length; i= i+1){
        if (i == data.userid){
          userscanvas[i] = new Object
          userscanvas[i] = document.getElementById('the-canvas_' + i);
          userscontext[i] = userscanvas[i].getContext('2d');
          uImage = userscontext[i].getImageData(0, 0, $('canvas').width(), $('canvas').height());
	  uImages[i].push(uImage);
          rImage = rImages[i].pop();
          userscontext[i].putImageData(rImage,0,0);
          break;
        }
      }
    }
    if (data.undoflag == 1){
      for (var i = 0; i < usernumber.length; i= i+1){
        if (i == data.userid){
          userscanvas[i] = new Object
          userscanvas[i] = document.getElementById('the-canvas_' + i);
          userscontext[i] = userscanvas[i].getContext('2d');
          rImage = userscontext[i].getImageData(0, 0, $('canvas').width(), $('canvas').height());
          rImages[i].push(rImage);
          uImage = uImages[i].pop();
          userscontext[i].putImageData(uImage,0,0);
          break;
        }
      }
    }
    if (data.undoflag == 2){
      for (var i = 0; i < usernumber.length; i= i+1){
        if (i == data.userid){
          userscanvas[i] = new Object
          userscanvas[i] = document.getElementById('the-canvas_' + i);
          userscontext[i] = userscanvas[i].getContext('2d');
          uImage = userscontext[i].getImageData(0, 0, $('canvas').width(), $('canvas').height()); 
	  uImages[i].push(uImage);
	  break;
	}
      }
    }
    if (data.comflag == 1){
      if (data.x == lastX && data.y == lastY && data.article == gon.hoge && data.page == pdfpage){
        if (data.pid != "" && data.rname == null){
          for (var i = 0; i >= 0; i= i+1){
            var com1 = document.getElementById("pdf_"+i);
	    if (data.pid == com1.getAttribute("comid")){
//	      window.alert(com.getAttribute("uid"));
              $("#reload").html("<a href=javascript:location.reload()>以下のコメントが追加されています。表示を整えるには更新してください。</a><br>" );
	      $("#res").append("for <i>" + com1.getAttribute("uid") + "</i> from <i>" + data.user + "</i>：" + data.comment + "&nbsp;");
	      $("#res").append("<input onclick=\"Return2("+ cid + ", '" + data.user + "')\" type='button' value='返信'>" + "<br>" );
	      break;
            }
          }
        }
	if (data.rname != null){
          $("#reload").html("<a href=javascript:location.reload()>以下のコメントが追加されています。表示を整えるには更新してください。</a><br>" );
	  $("#res").append("for <i>" + data.rname + "</i> from <i>" + data.user + "</i>：" + data.comment + "&nbsp;");
	  $("#res").append("<input onclick=\"Return2("+ cid + ", '" + data.user + "')\" type='button' value='返信'>" + "<br>" );
        }
        if ( data.pid == "" ){
          $("#reload").html("<a href=javascript:location.reload()>以下のコメントが追加されています。表示を整えるには更新してください。</a><br>" );
          $("#res").append("　" + " from <i>" + data.user + "</i>：" + data.comment + "&nbsp;"); 
          $("#res").append("<input onclick=\"Return2("+ cid + ", '" + data.user + "')\" type='button' value='返信'>" + "<br>" );
        }
      }
      if (data.article == gon.hoge && data.page == pdfpage && data.flagB == false){
        var image = new Image();
        image.src = "/assets/sample1.png";
        scontext.drawImage(image, data.x, data.y, 50, 50);
      }
      comme[cc] = [data.x , data.y, data.comment, data.pid, data.user, data.article, data.page, data.rname, cid];
//      window.alert(comme[cc][4]);
      cc = cc + 1;
/*      if (data.pid != "" ){
        for (var i = 0; i >= 0; i= i+1){
          var com = document.getElementById("pdf_"+i);
	  if (data.pid == com.getAttribute("comid")){
//	    window.alert(com.getAttribute("uid"));
            $("#reload").html("<a href=javascript:location.reload()>表示形式を整えるには更新してください。</a><br>" );
	    $("#res").append("for " + com.getAttribute("uid") + " from " + data.user + "：" + data.comment　+ "<br>" );
	    break;
          }
        }
      }
      if ( data.pid == "" ){
        $("#reload").html("<a href=javascript:location.reload()>表示形式を整えるには更新してください。</a><br>" );
        $("#res").append("　" + " from " + data.user + "：" + data.comment　+ "<br>" );
      }*/
    }
  }, true);   
      
//-------------------------------------------------------------------
/*    canvas.addEventListener("dblclick", function(e) {
      var rect = e.target.getBoundingClientRect();
	    var mouseX1 = e.clientX - rect.left;
	    var mouseY1 = e.clientY - rect.top;
      for (var i = 0; i < arrayX.length; i=i +1) { 
	      if (mouseX1 > arrayX[i] && mouseX1 < arrayX[i] + 30) {
		      if (mouseY1 > arrayY[i] && mouseY1 < arrayY[i] + 30) {
		    	  location.href = "http://localhost:3000/comments/new";
		      }
	      }
      }
    },false);
*/    
//-----------------------------------------------------------------------
    canvas.addEventListener("mouseleave", function(event) {
      if (flag == true && flagA == 2)
        Save();
      flag = false;
    });
        
//---------------------------------------------------------------------

          
    var renderUContext = {
      canvasContext: ucontext,
      viewport: viewport
    };
    page.render(renderUContext);
    
       
    image.onload = function(){
    var arrayImage = new Array();
    var idcomment;
    var pidcomment;
    for (var i = 0; i < $(".comment").size(); i= i+1) { 
      //pos_x = Number($("#pdf_" + i).attr("pos_x"));
      //pos_y = Number($("#pdf_" + i).attr("pos_y"));
      pos_x = Number($("#pdf_" + i).attr("pos_x"));
      pos_y = Number($("#pdf_" + i).attr("pos_y"));
//      listx = document.getElementById('pdf_' + i).innerHTML;
//      listy = document.getElementById('pdf_' + eval(i+1)).innerHTML;
      pos_page = Number($("#pdf_" + i).attr("pdf_page"));
      if (pos_page == pdfpage){   
      idcomment = Number($("#pdf_" + i).attr("id"))           //1.23強引なところ　クリックで反応はしてしまう
      pidcomment = Number($("#pdf_" + i).attr("pid"))
      arrayImage.push(idcomment) 
        if (pidcomment == "" || pidcomment in arrayImage)
        {
          scontext.drawImage(image, pos_x, pos_y, 50, 50);
        }
      }
    }

    }

function drawLine(context, sX, sY, eX, eY, w, s, a, c) {                       　 //drawLine関数
  if (a != 0.4000000059604645){
    context.beginPath();
    context.globalAlpha = a;
    context.globalCompositeOperation = c;
    context.fillStyle = s;
    context.arc(eX, eY, w / 2, 0, Math.PI*2, true);
    context.fill();
  }
  
  context.beginPath();
  context.lineWidth = w;
  context.strokeStyle = s;
  context.globalAlpha = a;
  context.globalCompositeOperation = c;
  context.moveTo(sX, sY);
  context.lineTo(eX, eY);
  context.stroke();
}

function sLine(context, sX, sY, eX, eY, w, s, a, c) {                       　 //sLine関数
  context.beginPath();
  context.lineWidth = w;
  context.strokeStyle = s;
  context.globalAlpha = a;
  context.globalCompositeOperation = c;
  context.moveTo(sX, sY);
  if(eval(sY -eY) <= 40 && eval(sY -eY) >= -40){
            context.lineTo(eX, sY);
            }
            else{
            context.lineTo(eX, eY);
            }
  context.stroke();
}











var numMaterials = $(".anno").size()　　　　// ①読み込みたい画像の数
var loadedCounter = 0;　　　　　　　　　　　// ②ロード済Imageオブジェクト数のカウンタ
var imgObjArry = [];　　　　　　　　　　　　　　// ③ロード済Imageオブジェクト用配列
var base64 = new Array();
for(i=0;i < $(".anno").size(); i=i+1)
{
base64[i]=document.getElementById('anno_' + i).innerHTML;
}
// window.alert(numMaterials);
function loadImges(){
　
　　var imgObj = new Image();　　　　　　　　　 　　　　 // 新しい Image オブジェクトを作る
　
　　imgObj.addEventListener('load',　　　　　　　　　// loadイベントのリッスン
　　　　function(){
　　　　　　loadedCounter++;　　　　　　　　　　　　　　　// 画像１枚読み込みにつきインクリメント
　　　　　　imgObjArry.push(imgObj);　　　　　　　　　　//　読み込み済画像を③に格納
　　　　　　if(numMaterials == loadedCounter){　　　// ①の数　＝　②の数ならば描画する
　　　　　　　　　display();
　　　　　　}else{
　　　　　　　　　loadImges();　　　　　　　　　　　　　　　　// すべて読み込まれていなければ次を読込
　　　　　　}
　　},false);
　
　　imgObj.src = base64[imgObjArry.length];　　// ソースのパスを設定
　
} 

var check1 = 0
var check2 = new Array();
var check3 = 0
     //   check1 = arrayObj.indexOf(value)
function display()
{
//　for (var i in imgObjArry)
  for(var i=$(".anno").size(); i >= 0 ; i=i-1)
  {
    var apos_page = Number($("#anno_" + i).attr("pdf_page"));
    if(apos_page == pdfpage)
    {
      apos_user = $("#anno_" + i).attr("anno_user");
      if(apos_user == usr.userid)
      {
 	if(check1 == 0)
        {
　　      context.drawImage(imgObjArry[i], 0, 0);
　　　    imgObjArry[i] = null;
          check1 = 1
        }
      }
      else
      {
        for (var s=0; s < usernumber.length; s=s+1)
        {
	  var whoano = $("#user_" + s).attr("user_id");
          if(whoano == apos_user && apos_user != usr.userid)
          {
	    check3 = check2.indexOf(whoano)
            if(check3 == -1)
            {
　　　        userscontext[s].drawImage(imgObjArry[i], 0, 0);
　　　        imgObjArry[i] = null;
              check2.push(whoano);
	    }
	  }
        }
      }
    }
  }
} 


/*    var k = -1;
    for(var i=0; i < $(".anno").size(); i=i+1)
    {
      var apos_page = Number($("#anno_" + i).attr("pdf_page"));
      if(apos_page == 1)
      {
        apos_user = $("#anno_" + i).attr("anno_user");
	if(apos_user == usr.userid)
	{        
	  var base64 = document.getElementById('anno_' + i).innerHTML;
          var yimage = new Image();
          yimage.src = base64;
          yimage.onload = function()
          {
          context.drawImage(yimage, 0, 0);                           //----------------------------------------------------------------------------------
	  }
        }
        else
        {
          for (var s=0; s < usernumber.length; s=s+1)
          {
	    var whoano = $("#user_" + s).attr("user_id");
//            if(whoano == usr.userid && whoano != usr.userid)
            if(whoano == apos_user && apos_user != usr.userid)
	    {
               basearray[s] = document.getElementById('anno_' + i).innerHTML;
              test = 0
              
              oimage[s] = new Image();
	      oimage[s].src = basearray[s];
              
              oimage[s].addEventListener('load',function()
              {
		   
              wimage[s] = oimage[s] 
              },false);


           
              zimage.push(s)
            } 
          }
//userscontext[1].drawImage(wimage[1],0,0) 
          for (var s=0; s < usernumber.length; s=s+1)
          {
            var ptr = zimage.indexOf(s)
            if (ptr != -1 )
            {
            userscontext[s].drawImage(wimage[s],0,0) 
          
	    }
          }
        }
      }
    }*/   
loadImges();
    

    $('#undo').click(function(e) {
    if(undoImages.length > 0)
    {  	
      redoImage = context.getImageData(0, 0, $('canvas').width(), $('canvas').height()); 
      redoImages.push(redoImage);
      undoImage = undoImages.pop();
      context.putImageData(undoImage,0,0);

      var data = {}
      data.undoflag = 1;
      data.userid = number;
      data.article = gon.hoge;
      data.page = pdfpage;
      ws.send("LINE#WS#" + JSON.stringify(data));
      Save();
    }
    });
    
    $('#redo').click(function(e) {
    if(redoImages.length > 0)
    {  	
      undoImage = context.getImageData(0, 0, $('canvas').width(), $('canvas').height()); 
      undoImages.push(undoImage);
      redoImage = redoImages.pop();
      context.putImageData(redoImage,0,0);

      var data = {}
      data.redoflag = 1;
      data.userid = number;
      data.article = gon.hoge;
      data.page = pdfpage;
      ws.send("LINE#WS#" + JSON.stringify(data));
      Save();
    }
    });
    
  });
});

function renderPage(num){
  pdfinfo.getPage(num).then(function(page){


    document.getElementById('page_num').textContent = pdfpage;
    document.getElementById('page_count').textContent = pdfinfo.numPages;

    ucanvas.height = viewport.height;
    ucanvas.width = viewport.width;
    scanvas.height = viewport.height;
    scanvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.width = viewport.width; 
    var image = new Image();
    image.src = "/assets/sample1.png";

    for (var i = 0; i < usernumber.length; i= i+1)
    {
      if(usr.id == usernumber[i].id)
      {
        //usrpos = i
        canvas = document.getElementById('the-canvas');
        context = canvas.getContext('2d');
   	canvas.height = viewport.height;
     	canvas.width = viewport.width;
        $('#the-canvas_' + i).hide();
      }
      else
      {
	userscanvas[i] = new Object
        userscanvas[i] = document.getElementById('the-canvas_' + i);
        userscontext[i] = userscanvas[i].getContext('2d');
  	userscanvas[i].height = viewport.height;
    	userscanvas[i].width = viewport.width;
      }
    }

    var renderUContext ={
      canvasContext: ucontext,
      viewport: viewport
    };
    
    var renderSContext ={
      canvasContext: scontext,
      viewport: viewport
    };
    
    var renderContext ={
      canvasContext: context,
      viewport: viewport
    };
    
    page.render(renderUContext);
//    page.render(renderSContext);
//    page.render(renderContext);
    image.onload = function(){
    var arrayImage = new Array();
    var idcomment;
    var pidcomment;
    for (var i = 0; i < $(".comment").size(); i= i+1) { 
      //pos_x = Number($("#pdf_" + i).attr("pos_x"));
      //pos_y = Number($("#pdf_" + i).attr("pos_y"));
    var  pos_x = Number($("#pdf_" + i).attr("pos_x"));
    var  pos_y = Number($("#pdf_" + i).attr("pos_y"));
//      listx = document.getElementById('pdf_' + i).innerHTML;
//      listy = document.getElementById('pdf_' + eval(i+1)).innerHTML;
    var  pos_page = Number($("#pdf_" + i).attr("pdf_page"));
      if (pos_page == num){
      idcomment = Number($("#pdf_" + i).attr("id"))           //1.23強引なところ　クリックで反応はしてしまう
      pidcomment = Number($("#pdf_" + i).attr("pid"))
      arrayImage.push(idcomment) 
      if (pidcomment == "" || pidcomment in arrayImage)
        {
          scontext.drawImage(image, pos_x, pos_y, 50, 50);
        }
      }
    }
    }

/*
    var kk = -1;  
    for(var i=0; i < $(".anno").size(); i=i+1){

    var apos_page = Number($("#anno_" + i).attr("pdf_page"));
    var ok = parseInt(num);
//    oimage.onload = function() {
        if(apos_page == ok){
          kk = i;
//          var base64 = document.getElementById('anno_' + i).innerHTML;          動く
//          var oimage = new Image();　　　　　　　　　　　　　　　　　　　　　　　　。。
//          oimage.src = base64;
        }
//      }
    }  


//    context.drawImage(oimage, 0, 0);
    if(kk != -1){
    var base64 = document.getElementById('anno_' + kk).innerHTML;
    var oimage = new Image();
    oimage.src = base64;
    oimage.onload = function(){
    context.drawImage(oimage, 0, 0);
    }
    }    

*/





var ok = parseInt(num);
var numMaterials = $(".anno").size()　　　　// ①読み込みたい画像の数
var loadedCounter = 0;　　　　　　　　　　　// ②ロード済Imageオブジェクト数のカウンタ
var imgObjArry = [];　　　　　　　　　　　　　　// ③ロード済Imageオブジェクト用配列
var base64 = new Array();
for(i=0;i < $(".anno").size(); i=i+1)
{
base64[i]=document.getElementById('anno_' + i).innerHTML;
}
// window.alert(numMaterials);
function loadImges(){
　
　　var imgObj = new Image();　　　　　　　　　 　　　　 // 新しい Image オブジェクトを作る
　
　　imgObj.addEventListener('load',　　　　　　　　　// loadイベントのリッスン
　　　　function(){
　　　　　　loadedCounter++;　　　　　　　　　　　　　　　// 画像１枚読み込みにつきインクリメント
　　　　　　imgObjArry.push(imgObj);　　　　　　　　　　//　読み込み済画像を③に格納
　　　　　　if(numMaterials == loadedCounter){　　　// ①の数　＝　②の数ならば描画する
　　　　　　　　　display();
　　　　　　}else{
　　　　　　　　　loadImges();　　　　　　　　　　　　　　　　// すべて読み込まれていなければ次を読込
　　　　　　}
　　},false);
　
　　imgObj.src = base64[imgObjArry.length];　　// ソースのパスを設定

} 

var check1 = 0
var check2 = new Array();
var check3 = 0
     //   check1 = arrayObj.indexOf(value)
function display()
{
//　for (var i in imgObjArry)
  for(var i=$(".anno").size(); i >= 0 ; i=i-1)
  {
    var apos_page = Number($("#anno_" + i).attr("pdf_page"));
    if(apos_page == ok)
    {
      apos_user = $("#anno_" + i).attr("anno_user");
      if(apos_user == usr.userid)
      {
 	if(check1 == 0)
        {
　　      context.drawImage(imgObjArry[i], 0, 0);
　　　    imgObjArry[i] = null;
          check1 = 1
         
        }
      }
      else
      {
        for (var s=0; s < usernumber.length; s=s+1)
        {
	  var whoano = $("#user_" + s).attr("user_id");
          if(whoano == apos_user && apos_user != usr.userid)
          {
	    check3 = check2.indexOf(whoano)
            if(check3 == -1)
            {
　　　        userscontext[s].drawImage(imgObjArry[i], 0, 0);
　　　        imgObjArry[i] = null;
              check2.push(whoano);
	    }
	  }
        }
      }
    }
  }
} 

loadImges();  
    
  });
}


function Next(){
  if(pdfpage >= pdfinfo.numPages){
    return;
  }
  else{
    pdfpage = eval(pdfpage +1);
    location.href = "?page=" + pdfpage;
  }
}

function Back(){
  if(pdfpage != 1){
    pdfpage = eval(pdfpage -1);
    location.href = "?page=" + pdfpage;
  }
}

function Move()
{
  var page2 = window.prompt('移動したいページを入力してください',pdfpage)
  if (page2 >= pdfinfo.numPages){
    pdfpage = pdfinfo.numPages;
    location.href = "?page=" + pdfpage;
  }
  
  if (page2 >= 1 && page2 < pdfinfo.numPages){
    pdfpage = eval(page2);
    location.href = "?page=" + pdfpage;
  }
}



