/*console.log('Loaded!');
move the image

var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
    
}

img.onclick= function ()
{
    var interval =setInterval(moveRight,100);
};
*/
//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick =function(){
    // Make request to counter end point
    
    //Capture the response and store it in variable
    
    //Render the variable in the correct span
    
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};