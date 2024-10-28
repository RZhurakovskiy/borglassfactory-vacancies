import tabsFilter from "./modules/tabsFilter"
import initializePreloader from "./modules/preloader.js";
import mobileMenu from "./modules/mobileMenu.js"

initializePreloader()

tabsFilter()

// мобильное меню

mobileMenu();




const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 5000);



// счетчик цифр
document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll(".number-count");

  const options = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  counters.forEach((counter) => {
    observer.observe(counter);
  });

  function updateCounter(element) {
    const target = +element.getAttribute("data-target");
    const increment = target / 50;
    let count = 0;

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        element.textContent = target;
        clearInterval(interval);
      } else {
        element.textContent = Math.ceil(count);
      }
    }, 20);
  }
});

// анимация элемента декора при скроле страницы
function handleIntersection(entries) {
  entries.forEach((entry) => {
    const element = entry.target;
    if (entry.isIntersecting) {
      element.classList.remove("animate");
      void element.offsetWidth;
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.1,
});

const element = document.querySelector(".decor-element");
observer.observe(element);

const svg = document.querySelector(".floating-svg");
const svgWidth = 543;
const svgHeight = 536;

function moveSvgRandomly() {
  const maxX = window.innerWidth - svgWidth;
  const maxY = window.innerHeight - svgHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  svg.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

setInterval(moveSvgRandomly, 20000);

moveSvgRandomly();

window.addEventListener("resize", () => {
  moveSvgRandomly();
});






