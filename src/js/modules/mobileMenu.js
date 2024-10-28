export default function mobileMenu() {
	const menuBtn = document.querySelector(".menu-btn");
	const menuItem = document.querySelector(".main-nav-list");
	const menuLinks = document.querySelectorAll(".main-nav-list a");
	const body = document.querySelector("body");
  
	menuBtn.addEventListener("click", () => {
	  menuBtn.classList.toggle("active");
	  menuItem.classList.toggle("active");
	});
  

	menuLinks.forEach(link => {
	  link.addEventListener("click", () => {
		 menuBtn.classList.remove("active");
		 menuItem.classList.remove("active");
	  });
	});
  

	body.addEventListener("click", (e) => {
	  if (!e.target.closest(".main-nav-list") && !e.target.closest(".menu-btn")) {
		 menuBtn.classList.remove("active");
		 menuItem.classList.remove("active");
	  }
	});
  }