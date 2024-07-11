/**
 * searchbar
 */
const searchInput = document.querySelector('input[type=search]');
const searchIcon = document.getElementById('searchIcon');

searchInput.addEventListener('focus', () => {
    searchInput.classList.remove('pl-5');
    searchInput.classList.add('pl-12');
    searchIcon.classList.remove('hidden');
    searchIcon.classList.add('flex');
});

searchInput.addEventListener('blur', () => {
    searchInput.classList.add('pl-5');
    searchInput.classList.remove('pl-12');
    searchIcon.classList.add('hidden');
    searchIcon.classList.remove('flex');
});




////////// test

