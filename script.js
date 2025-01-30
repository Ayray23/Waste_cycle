const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle the menu's visibility on click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the menu
});
