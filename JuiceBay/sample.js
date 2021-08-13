AOS.init({
    offset:320,
    duration:700
})

let nav=document.querySelector('.navbar')
window.addEventListener('scroll',run)


function run(){
    nav.classList.add('shadow')
    console.log('Hello')
}