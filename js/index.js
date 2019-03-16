var old="";
var neu="";
var operator="";
var result=0;
var arr1=[];
var arr2=[];
$("#C").on("click",function()
{
  if(old.length>1){
  old=old.slice(0, -1);
 $("#display").html(old+"<br>");}
  else{      
  old=0;
   $("#display").html(old+"<br>");}        });
$("#1").on("click",function()
{old+=1;                             $("#display").html(old+"<br>");});
$("#2").on("click",function()
{old+=2;                             $("#display").html(old+"<br>");});
$("#3").on("click",function()
{old+=3;                             $("#display").html(old+"<br>");});
$("#4").on("click",function()
{old+=4;                             $("#display").html(old+"<br>");});
$("#5").on("click",function()
{old+=5;                             $("#display").html(old+"<br>");});
$("#6").on("click",function()
{old+=6;                             $("#display").html(old+"<br>");});
$("#7").on("click",function()
{old+=7;                             $("#display").html(old+"<br>");});
$("#8").on("click",function()
{old+=8;                             $("#display").html(old+"<br>");});
$("#9").on("click",function()
{old+=9;                             $("#display").html(old+"<br>");});
$("#R").on("click",function()
{old="";
 arr1.length=0;
 arr2.length=0;
  $("#display").html("0<br>");});
$("#0").on("click",function()
{old+=0;                             $("#display").html(old+"<br>");});
$("#dot").on("click",function()
{old+='.';                             $("#display").html(old+"<br>");});
$("#plus").on("click",function()
{arr1.push(old);
 arr2.push("+");
  neu=old;
 old="";
 operator='+';
 $("#display").html(neu+"<br>");});
$("#minus").on("click",function()
{arr1.push(old);
 arr2.push("-");
  neu=old;
 old="";
 operator='-';
 $("#display").html(neu+"<br>");});
$("#mul").on("click",function()
{arr1.push(old);
arr2.push("*");
 neu=old;
 old="";
 operator='*';
 $("#display").html(neu+"<br>");});
$("#div").on("click",function()
{arr1.push(old);
 arr2.push("/");
  neu=old;
 old="";
 operator='/';
 $("#display").html(neu+"<br>");});
$("#equal").on("click",function()
{arr1.push(old);
 result=parseFloat(arr1[0]);
 j=0;
for(var i=0;i<arr2.length;i++){
  j=i+1;
      switch(arr2[i]){
  case '+':
    result+=parseFloat(arr1[j]);
    break;
  case '-':
    result-=parseFloat(arr1[j]);
    break;
    case '*':
    result*=parseFloat(arr1[j]);
    break;
    case '/':
    result/=parseFloat(arr1[j]);
    break;    
  }
  $("#display").html(result+"<br>");
  
}
});