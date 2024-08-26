var i = 0
var alltext = {};
function admin(namew,des){
 var idp = "cad";
 var idn = i;
 var eld = idp + idn;
 var dis = document.getElementById("iii").disabled;
 if (dis == true)
 {
   alert("error");
 }
 else{
   i = i + 1;
   document.getElementById("bds").innerHTML=document.getElementById("bds").innerHTML+'<div class="card" id="cad'+i+'"><h3 class="card__title">'+namew+'</h3><p class="card__content">'+des+'</p><div class="card__date">编号:'+i+'</div><div class="card__arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"><path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path></svg></div></div>';
   alltext[i] = '<div class="card" id="cad'+i+'"><h3 class="card__title">'+namew+'</h3><p class="card__content">'+des+'</p><div class="card__date">编号:'+i+'</div><div class="card__arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"><path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path></svg></div></div>';
 }
}
function gt(){
 var inp = document.getElementById("inp").value;
 var texa = document.getElementById("texa").value;
 admin(inp,texa);
}
function sc(bh){
 var idp = "cad";
 var idn = bh;
 var eld = idp + idn;
 document.getElementById(eld).innerHTML = "该内容已被删除";
 alltext[eld] = "该内容已被删除";
}
function ga(){
  var tl = "";
  if (Object.keys(alltext).length>0)
  {
    for(var k=1;k<=i;k++){
      tl = tl + alltext[k];
    }
  }
  else{
    tl = "<p class='none'>这里空空如也……</p>";
  }
  document.body.innerHTML = document.body.innerHTML+tl;
}