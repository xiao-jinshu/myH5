let header = document.querySelector('.two_page>.header');
let box_top = document.querySelector('.two_page>.box_top');
let img = document.querySelector('.two_page>img');
let bod = document.querySelector('.two_page .bod');

let header2 = document.querySelector('.three_page>.header')
let h2 = document.querySelectorAll('.three_page h2')
let h3 = document.querySelectorAll('.three_page h3')
let p =  document.querySelectorAll('.three_page p')
console.log(h2)
let content = document.getElementById('app')
let content2 = content.getElementsByClassName('two_page')[0]
console.log(content2)
content.ontouchmove = function(){
    
    
        console.log(11)
        header.style.animation='move123 1s linear';
        box_top.style.animation='bounceInLeft 2s linear';
        img.style.animation='bounceInRight 2s linear';
        bod.style.animation='flipInX 2s linear';
      
        clear()
      
  
}
content2.ontouchmove = function(){
    console.log(11)
    header2.style.animation='move123 1s linear';
    h2[0].style.animation='bounceInLeft 2s linear';
    h2[1].style.animation='bounceInLeft 2s linear';
    h3[0].style.animation='bounceInLeft 2s linear';
    h3[1].style.animation='bounceInLeft 2s linear';
    for(let i = 0; i<p.length; i++){
        p[i].style.animation='bounceInRight 2s linear';
    }

   
     clear()
     
}
function clear(){
    let tien = setTimeout(function(){
        header.style.animation='';
        box_top.style.animation='';
        img.style.animation='';
        bod.style.animation='';
        header2.style.animation='';
        h2[0].style.animation='';
        h2[1].style.animation='';
        h3[0].style.animation='';
        h3[1].style.animation='';
        for(let i = 0; i<p.length; i++){
            p[i].style.animation='';
        }
    },3000)
   
}