//Declare and initialise variables
let heads = 0;
let tails = 0;

//DOM variables
let coin = document.querySelector('.coin');
let flipBtn = document.querySelector('#flip-button');
let resetBtn = document.querySelector('#reset-button');

flipBtn.addEventListener('click', () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = 'none';
    if (i) {
        setTimeout(function() {
            coin.style.animation = 'spin-heads 3s forwards';
        }, 100);
        heads++;
    }
























})