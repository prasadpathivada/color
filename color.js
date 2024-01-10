const button=document.querySelector("button");
const body=document.querySelector("body");

const color=["indigo","blue","black","orange","brown","yellow","green"]
body.style.baclgroundColor='black';
document.querySelector("button").addEventListener('click',function(){
  const colorIndex=parseInt(Math.random()*color.length);
  body.style.backgroundColor=color[colorIndex];

});


