console.log('Loaded!');

var element= document.getElementById('text');
element.innerHTML="new text !!";

var img= document.getElementById('image');
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft +10;
    img.style.marginLeft = marginLeft + 'px';
}


img.onclick= function(){
   var interval= setInterval(moveRight,50);

};