let players=document.getElementsByTagName('img');
let arrayOfPlayer=[...players];

let styleArrayOfPlayer=[...players];

let nonStyleArrayOfPlayer=[...players];

let announcer=document.querySelector('.instructions');

let command1=document.querySelector('h3');

var user1=0;
var comp1=0;

arrayOfPlayer.forEach(function(player){
    player.addEventListener('click',runEvent);
})

//Computers choice
function comp(){
    var random=Math.floor(Math.random()*3)
    let compChoice=arrayOfPlayer[random];
    return compChoice.className;
}

//Users choice
function runEvent(event){
    if (comp()==='rock' && event.target.className==='scissors'){
        comp1+=1
        announcer.textContent='Scissors can not cut rock. PC wins';
        document.querySelector('h3').textContent='PC chose rock'
        document.querySelector('.result').textContent=`${user1}:${comp1}`;
    }
    else if (comp()==='rock' && event.target.className==='paper'){
        user1+=1
        announcer.textContent='Paper covers rock. You win';
        document.querySelector('h3').textContent='PC chose rock'
        document.querySelector('.result').textContent=`${user1}:${comp1}`;
    }
    else if (comp()==='rock' && event.target.className==='rock'){
        announcer.textContent='Its a tie';
        document.querySelector('h3').textContent='PC also chose rock'
    }
    else if (comp()==='paper' && event.target.className==='scissors'){
        user1+=1
        announcer.textContent='Scissors cuts paper. You win';
        document.querySelector('h3').textContent='PC chose paper'
        document.querySelector('.result').textContent=`${user1}:${comp1}`;
    }
    else if (comp()==='paper' && event.target.className==='paper'){
        document.querySelector('h3').textContent='PC also chose  paper'
        announcer.textContent='Its a tie';
    }
    else if (comp()==='paper' && event.target.className==='rock'){
        comp1+=1
        announcer.textContent='Paper covers rock. PC wins';
        document.querySelector('h3').textContent='PC chose paper'
        document.querySelector('.result').textContent=`${user1}:${comp1}`;
    }
    else if (comp()==='scissors' && event.target.className==='scissors'){
        document.querySelector('h3').textContent='PC also chose scissors'
        announcer.textContent='Its a tie';
    }
    else if (comp()==='scissors' && event.target.className==='paper'){
        comp1+=1
        announcer.textContent='Scissors cuts paper. PC wins';
        document.querySelector('h3').textContent='PC chose scissors'
        document.querySelector('.result').textContent=`${user1}:${comp1}`;
    }
    else if (comp()==='scissors' && event.target.className==='rock'){
        user1+=1
        announcer.textContent='Scissors can not cut rock. You win';
        document.querySelector('h3').textContent='PC chose scissors'
        document.querySelector('.result').textContent=`${user1}:${comp1}`;
    }
}
