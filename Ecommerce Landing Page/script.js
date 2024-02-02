const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

// humberg open
if(bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add('active');
    });
} 

// humberg close
if(close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}