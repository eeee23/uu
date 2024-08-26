var mm = prompt("请输入密码","");
var dp = atob("ZGlkaWFvMTIzNA==");
if(mm != dp){
   document.body.innerHTML = "<h1>您无权访问此页面<h1/>";
   document.getElementById("bds").innerHTML = "";
   document.getElementById("bdss").innerHTML = "<h1>您无权访问此页面<h1/>";
}