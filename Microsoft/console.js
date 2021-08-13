let btn=document.querySelector('.top button')

function run(event){
    window.scrollTo(0,0);
}

btn.style.display='none'
function run2(){
    if (window.pageYOffset>700){
        btn.style.display='block'
        btn.addEventListener('click',run);
    }
    else{
        btn.style.display='none'
        btn.addEventListener('click',run);
    }
}
window.addEventListener('scroll',run2);