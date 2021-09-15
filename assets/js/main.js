//	MENU MOBILE
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
	if (event.type === 'touchstart') event.preventDefault();
	const nav = document.getElementById('nav');
	nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//	MODE DARK/LIGHT
const lamp = document.getElementById('lamp');

function changeMode(){
	const mode = document.getElementById('body');
	mode.classList.toggle('active');

}

lamp.addEventListener('click', changeMode);
