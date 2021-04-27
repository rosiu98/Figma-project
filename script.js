const menu = document.querySelector('.drop-down-menu');
const show =  document.querySelector('.show');


const openMenu = function() {
	show.classList.toggle('hidden');
}


menu.addEventListener('click', openMenu);