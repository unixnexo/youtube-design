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


/**
 * tags slider  
 */
const scrollContainer = document.getElementById('tags-slider-con');
const scrollLeftBtn = document.getElementById('tags-pr-btn');
const scrollRightBtn = document.getElementById('tags-ne-btn');
const tagSlider = document.getElementById('tags-slider');

function checkScroll() {
  const atStart = scrollContainer.scrollLeft <= 0;
  const atEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1;

  scrollLeftBtn.classList.toggle('hidden', atStart);
  scrollRightBtn.classList.toggle('hidden', atEnd);

  tagSlider.classList.toggle('no-before', atStart);
  tagSlider.classList.toggle('no-after', atEnd);
}

scrollLeftBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
  setTimeout(checkScroll, 300);
});

scrollRightBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
  setTimeout(checkScroll, 300);
});

scrollContainer.addEventListener('scroll', checkScroll);

checkScroll();
window.addEventListener('resize', checkScroll);


/**
 * brief and actual side menus
 */
const briefSideMenu = document.getElementById('brief-side-menu');
const actualSideMenu = document.getElementById('actual-side-menu');
const burgerMenuIcon = document.getElementById('burger-menu-icon');
const burgerMenuIconCloseOnly = document.getElementById('burger-menu-icon-close-only');
const showSideMenus = 'flex';
const hideSideMenus = 'hidden';

burgerMenuIcon.addEventListener('click', () => {
  if (briefSideMenu.classList.contains(showSideMenus)) {
    briefSideMenu.classList.remove(showSideMenus);
    briefSideMenu.classList.add(hideSideMenus);

    actualSideMenu.classList.remove(hideSideMenus);
    actualSideMenu.classList.add(showSideMenus);
  } else {
    actualSideMenu.classList.add(hideSideMenus);
    actualSideMenu.classList.remove(showSideMenus);

    briefSideMenu.classList.add(showSideMenus);
    briefSideMenu.classList.remove(hideSideMenus);
  }
});

burgerMenuIconCloseOnly.addEventListener('click', () => {
  actualSideMenu.classList.add(hideSideMenus);
  briefSideMenu.classList.add(showSideMenus);
  briefSideMenu.classList.remove(hideSideMenus);
});



////////// test
