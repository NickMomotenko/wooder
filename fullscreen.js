const preloader = document.querySelector('.menuscreen');
const cross     = document.querySelector('.menuscreen__cross');
const menu      = document.querySelector('.fullmenu');
const link      = Array.from(document.querySelectorAll('.nav__link'));

menu.addEventListener('click', openFullMenu);
cross.addEventListener('click', closeFullMenu);

link.forEach(function(item){
	item.addEventListener('click',closeFullMenu);
});

function openFullMenu() {
	preloader.classList.add('on');
}

function closeFullMenu() {
	preloader.classList.remove('on');
}




