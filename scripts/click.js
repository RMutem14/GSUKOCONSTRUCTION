const main  = document.querySelector('main');
const buger = document.querySelectorAll('i')[0];
const burger= document.getElementById('burger')
let hidden  = true

buger.addEventListener('click',()=>{
    if(hidden){
        burger.style.display = "block"
        hidden = false
    }else{
        burger.style.display = "none"
        hidden = true
    }
})