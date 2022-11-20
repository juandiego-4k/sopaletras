
let cambio= document.querySelectorAll(".azul");
let BA=document.querySelector(".BA");
function changeColor()
{
    if(BA.value="changeColor")
    {
        for(var i=0;i<cambio.length;i++)
        {
            cambio[i].style.backgroundColor="white";
        }
        console.log(BA)
    }
  
 
    
}

let BA2=document.querySelector(".BA2")
let camb=document.querySelectorAll(".azul")
function changeColor2()
{
 if(BA2.value="changeColor2")
 {
    for(var i=0;i<camb.length;i++)
    {
        camb[i].style.backgroundColor="blue";
    }
    console.log(BA2)
 }
}

