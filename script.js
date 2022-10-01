const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');

//if it show in the screeen
if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

//shop page *to click in image * we have two ways
/* first way
var MainImg= document.getElementById("MainImg");
        var smallimg=document.getElementsByClassName("small-img");

        smallimg[0].onclick=function(){
            MainImg.src=smallimg[0].src;
        }
        smallimg[1].onclick=function(){
            MainImg.src=smallimg[1].src;
        }
        smallimg[2].onclick=function(){
            MainImg.src=smallimg[2].src;
        }
        smallimg[3].onclick=function(){
            MainImg.src=smallimg[3].src;
        }
*/
//second way
    var MainImg= document.getElementById("MainImg");
    var smallimg=document.getElementsByClassName("small-img");
    smallimg[0].addEventListener("click",function(){
        MainImg.src=smallimg[0].src;
    })
    smallimg[1].addEventListener("click",function(){
        MainImg.src=smallimg[1].src;
    })
    smallimg[2].addEventListener("click",function(){
        MainImg.src=smallimg[2].src;
    })
    smallimg[3].addEventListener("click",function(){
        MainImg.src=smallimg[3].src;
    })


