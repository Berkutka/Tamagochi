let start = document.querySelector('.t__start');
let startL1 = document.querySelector('.l1');
let startL2 = document.querySelector('.l2');
let startL3 = document.querySelector('.l3');
let level1 = document.querySelector('.level1');
let gameOver = document.querySelector('.game__over');

let a1;
let b1;
let c1;

let l1Food = document.querySelector('.l1Food');
let l1Sleep = document.querySelector('.l1Sleep');
let l1Drink = document.querySelector('.l1Drink');
let l1btn1 = document.querySelector('.l1btn1');
let l1btn2 = document.querySelector('.l1btn2');
let l1btn3 = document.querySelector('.l1btn3');
let restart = document.querySelector('.restart');
let timeStop;
let timeStart;
let interval;

startL1.addEventListener('click', startLevel1);

function startLevel1() {
    start.classList.remove('active');
    level1.classList.add('active1');
    const min = 50;
    const max = 100;
    a1 = Math.floor(min + Math.random() * (max + 1 - min));
    b1 = Math.floor(min + Math.random() * (max + 1 - min));
    c1 = Math.floor(min + Math.random() * (max + 1 - min));
    l1Food.style.height = `${a1}%`;
    l1Sleep.style.height = `${b1}%`;
    l1Drink.style.height = `${c1}%`;
    console.log(a1, b1, c1);

    timeStart = new Date();
    console.log(+timeStart);
    interval = setInterval(pointDown, 5000);
}

restart.addEventListener('click', startLevel);

function startLevel () {
    level1.classList.add('active1');
    gameOver.classList.remove('active1');

    startLevel1()

}

function pointDown (){
    a1 = a1 - 5;
    b1 = b1 - 5;
    c1 = c1 - 5;
    l1Food.style.height = `${a1}%`;
    l1Sleep.style.height = `${b1}%`;
    l1Drink.style.height = `${c1}%`;
    if (a1<=0){a1=0}
    if (b1<=0){b1=0}
    if (c1<=0){c1=0}
    console.log(a1, b1, c1);
    GameOver();
}

l1btn1.addEventListener('click', food);

function food() {
    a1 = a1 + 30;
    b1 = b1 - 20;
    // c1 = c1;
    if (a1 <= 0) {
        a1 = 0;
    } else if (a1 >= 100) {
        a1 = 100;
    }
    if (b1<=0){b1=0}
    if (c1<=0){c1=0}
    l1Food.style.height = `${a1}%`;
    l1Sleep.style.height = `${b1}%`;
    l1Drink.style.height = `${c1}%`;
    GameOver();
    // console.log(a1, b1, c1);

}

l1btn2.addEventListener('click', clean);

function clean() {
    // a1 = a1 - 5;
    b1 = b1 + 40;
    c1 = c1 - 20;
    if (b1 <= 0) {
        b1 = 0;
    } else if (b1 >= 100) {
        b1 = 100;
    }
    if (a1<=0){a1=0}
    if (c1<=0){c1=0}
    l1Food.style.height = `${a1}%`;
    l1Sleep.style.height = `${b1}%`;
    l1Drink.style.height = `${c1}%`;
    GameOver();
    // console.log(a1, b1, c1);
}

l1btn3.addEventListener('click', happi );

function happi() {
    a1 = a1 - 10;
    // b1 = b1 - 5;
    c1 = c1 + 15;
    if (c1 <= 0) {
        c1 = 0;
    } else if (c1 >= 100) {
        c1 = 100;
    }
    if (a1<=0){a1=0}
    if (b1<=0){b1=0}
    l1Food.style.height = `${a1}%`;
    l1Sleep.style.height = `${b1}%`;
    l1Drink.style.height = `${c1}%`;
    GameOver();
    // console.log(a1, b1, c1);
}


function GameOver () {
    if (a1 === 0 || b1 === 0 || c1 === 0) {
        level1.classList.remove('active1');
        gameOver.classList.add('active1');
        TimerStop();
        clearInterval(interval);
    }
}

let timeInner = document.querySelector('.timer');

function TimerStop() {
    timeStop = new Date();
    console.log(+timeStop);
    let timer =  timeStop - timeStart;
    console.log(timer);
    let timeSecond = Math.floor((timer / 1000)%60);
    console.log(timeSecond);
    let timeHour = Math.floor((timer / 1000 / 60) % 60);
    timeInner.innerHTML=`Тамагочі прожив ${timeHour}хв. ${timeSecond}сек.`;
}






























