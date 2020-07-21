// JavaScript Document
lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
    
//alert(diffY);
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("lovexin12").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";
document.getElementById("lovexin14").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";

lastScrollY=lastScrollY+percent; 
//alert(lastScrollY);
}
suspendcode12="<DIV id=\"lovexin12\" style='left:22px;POSITION:absolute;TOP:69px;'><a href='http://www.knowsky.com' target='_blank'><img border=0 src=inc/1.gif><br><a href=JavaScript:; onclick=\"lovexin12.style.visibility='hidden'\"><img border=0 src=inc/close.gif></a></div>"

suspendcode14="<DIV id=\"lovexin14\" style='right:22px;POSITION:absolute;TOP:69px;'><a href='http://www.knowsky.com' target='_blank'><img border=0 src=inc/1.gif><br><a href=JavaScript:; onclick=\"lovexin14.style.display = 'none'\"><img border=0 src=inc/close.gif></div>"

document.write(suspendcode12); 
document.write(suspendcode14); 
window.setInterval("heartBeat()",1);
