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


/**
 * search overlay for < md screens
 */
const openSmSearch = document.getElementById('open-sm-search');
const closeSmSearch = document.getElementById('close-sm-search');
const smSearchOverlay = document.getElementById('sm-search-overlay');
const smSearchInput = document.getElementById('sm-search-input');

openSmSearch.addEventListener('click', () => {
    smSearchOverlay.classList.remove('hidden');
    smSearchInput.focus();
});

smSearchOverlay.addEventListener('click', () => {
    smSearchOverlay.classList.add('hidden');
});



////////// test
