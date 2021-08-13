let first=document.querySelector('.first');
let second=document.querySelector('.second');
let third=document.querySelector('.third');
let forth=document.querySelector('.forth');
let fifth=document.querySelector('.fifth');
let sixth=document.querySelector('.sixth');
let seventh=document.querySelector('.seventh');
let eighth=document.querySelector('.eighth');
let ninth=document.querySelector('.ninth');

let desc=document.querySelector('.desc h2')
let head=document.querySelector('nav h1')

first.addEventListener('click',runEvent1);
second.addEventListener('click',runEvent2);
third.addEventListener('click',runEvent3);
forth.addEventListener('click',runEvent4);
fifth.addEventListener('click',runEvent5);
sixth.addEventListener('click',runEvent6);
seventh.addEventListener('click',runEvent7);
eighth.addEventListener('click',runEvent8);
ninth.addEventListener('click',runEvent9);

board=[
    '-','-','-',
    '-','-','-',
    '-','-','-'
]


let turn='O';
let opposite=''

function turnHandler(){
    if (turn==='O'){
        turn='X'
        opposite='O'
    }
    else{
        turn='O'
        opposite='X'
    }
}

function checkWin(){
    if (board[0]+board[1]+board[2]==='XXX' || board[0]+board[1]+board[2]==='OOO'){
        head.textContent=`${turn}  Won`
    }
    else if (board[3]+board[4]+board[5]==='XXX' || board[3]+board[4]+board[5]==='OOO'){
        head.textContent=`${turn}  Won`
    }
    else if (board[6]+board[7]+board[8]==='XXX' || board[6]+board[7]+board[8]==='OOO'){
        head.textContent=`${turn}  Won`
    }
    else if(board[0]+board[3]+board[6]==='XXX' || board[0]+board[3]+board[6]==='OOO'){
        head.textContent=`${turn}  Won`
    }
    else if (board[1]+board[4]+board[7]==='XXX' || board[1]+board[4]+board[7]==='OOO'){
        head.textContent=`${turn}  Won`
    }
    else if(board[2]+board[5]+board[8]==='XXX' || board[2]+board[5]+board[8]==='OOO'){
        head.textContent=`${turn}  Won`
    }
    else if(board[0]+board[4]+board[8]==='XXX' || board[0]+board[4]+board[8]==='OOO'){
        head.textContent=`${turn}  Won`
    }
    else if(board[2]+board[4]+board[6]==='XXX' || board[2]+board[4]+board[6]==='OOO'){
        head.textContent=`${turn}  Won`
    }
}

function runEvent1(event){
    turnHandler();
    board[0]=turn;
    
    if (turn==='X'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='gold';
    }
    if (turn==='O'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='#0275d8';
    }
    desc.textContent=`Its your turn ${opposite}`
    checkWin();
}

function runEvent2(event){
    turnHandler();
    board[1]=turn;
    if (turn==='X'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='gold';
    }
    if (turn==='O'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='#0275d8';
    }
    desc.textContent=`Its your turn ${opposite}`
    checkWin();
}

function runEvent3(event){
    turnHandler();
    board[2]=turn;
    if (turn==='X'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='gold';
    }
    if (turn==='O'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='#0275d8';
    }
    desc.textContent=`Its your turn ${opposite}`
    checkWin();
}

function runEvent4(event){
    turnHandler();
    board[3]=turn;
    if (turn==='X'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='gold';
    }
    if (turn==='O'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='#0275d8';
    }
    desc.textContent=`Its your turn ${opposite}`
    checkWin();
}

function runEvent5(event){
    turnHandler();
    board[4]=turn;
    if (turn==='X'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='gold';
    }
    if (turn==='O'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='#0275d8';
    }
    desc.textContent=`Its your turn ${opposite}`
    checkWin();
}

function runEvent6(event){
    turnHandler();
    board[5]=turn;
    if (turn==='X'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='gold';
    }
    if (turn==='O'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='#0275d8';
    }
    desc.textContent=`Its your turn ${opposite}`
    checkWin();
}

function runEvent7(event){
    turnHandler();
    board[6]=turn;
    if (turn==='X'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='gold';
    }
    if (turn==='O'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='#0275d8';
    }
    desc.textContent=`Its your turn ${opposite}`
    checkWin();
}

function runEvent8(event){
    turnHandler();
    board[7]=turn;
    if (turn==='X'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='gold';
    }
    if (turn==='O'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='#0275d8';
    }
    desc.textContent=`Its your turn ${opposite}`
    checkWin();
}

function runEvent9(event){
    turnHandler();
    board[8]=turn;
    if (turn==='X'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='gold';
    }
    if (turn==='O'){
        event.target.innerHTML=`<h1 style='font-size:65px;'>${turn}</h1>`;
        event.target.style.background='#0275d8';
    }
    desc.textContent=`Its your turn ${opposite}`
    checkWin();
}