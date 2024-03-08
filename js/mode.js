const body = document.querySelector('body');
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const modeLocal = localStorage.getItem('mode');

if(modeLocal){
    body.classList.add('dark-mode');
    darkBtn.classList.toggle('hidden');
    lightBtn.classList.toggle('hidden');
}


const toggleMode = ()=>{
    darkBtn.classList.toggle('hidden');
    lightBtn.classList.toggle('hidden');
    body.classList.toggle('dark-mode');
}

lightBtn.addEventListener('click', ()=>{
    toggleMode();
    localStorage.setItem('mode', '');
})

darkBtn.addEventListener('click', ()=>{
    toggleMode();
    localStorage.setItem('mode', 'dark-mode')
})