var w=document.documentElement.clientWidth;
window.onresize = function(){
  w=document.documentElement.clientWidth;
}
$('html').css('font-size',w/1423*10);