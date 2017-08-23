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
    var request=new XMLHttpRequest();
    //Capture the response and store it in variable
    
    //Render the variable in the correct span
    
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};

//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick =function(){
   //make a request to the serrver and send the name
   
  //capture a list of names and render it as a list
  var names=['name1','name2','name3','name4'];
  var list='';
  for(var i=0;i<names.length;i++){
      list+='<li>'+names[i]+'</li>';
  }
    var ul=document.getElementById('namelist');
    ul.innerHtml =list;
};