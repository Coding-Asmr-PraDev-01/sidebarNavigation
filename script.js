const toggleSwitch = document.querySelector('.toggleSwitch');
const sidebarMenu = document.querySelector('.sidebarMenu');
const lightBx = document.querySelector('.lightBx');
const darkBx = document.querySelector('.darkBx');


lightBx.addEventListener('click', () => {
    darkBx.classList.remove('active');
    lightBx.classList.add('active');
    document.body.classList.remove('dark-theme');
});

darkBx.addEventListener('click', () => {
    lightBx.classList.remove('active');
    darkBx.classList.add('active');
    document.body.classList.add('dark-theme');
});

toggleSwitch.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
});