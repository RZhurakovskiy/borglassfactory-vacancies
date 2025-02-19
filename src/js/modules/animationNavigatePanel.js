// main.js
export default function initNavigationAnimation() {
	const preloader = document.getElementById('preloader')
	const navBar = document.querySelector('.nav-bar')

	preloader.style.display = 'none'
	navBar.classList.remove('hidden')
}

document.addEventListener('DOMContentLoaded', () => {
	initNavigationAnimation()
})
