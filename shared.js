let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalTriggers = document.querySelectorAll('.plan button');


let phoneNav = document.querySelector('.mobile-nav');
let phoneNavTrigger = document.querySelector('.toggle-button');

let closeModal = function() {
    backdrop.style.display = modal.style.display = 'none';
}

let openModal = function() {
    backdrop.style.display = modal.style.display = 'block';
    let modalNegatives = document.querySelectorAll('.modal__action--negative');
    for(let modalNegative of modalNegatives) {
        modalNegative.addEventListener('click', closeModal);
    }
}

for(let trigger of modalTriggers) {
    trigger.addEventListener('click', openModal);
}

phoneNavTrigger.addEventListener('click', function() {
    backdrop.style.display = phoneNav.style.display = 'block'
});

backdrop.addEventListener('click', function() {
    backdrop.style.display = phoneNav.style.display = modal.style.display = 'none'
})