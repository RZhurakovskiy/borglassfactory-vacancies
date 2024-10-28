import tabsFilter from "./modules/tabsFilter.js";
import selectFilter from "./modules/selectFilter.js";
import initializePreloader from "./modules/preloader.js";
import mobileMenu from "./modules/mobileMenu.js";
import animationSvgToScroll from "./modules/animationSvgToScroll.js";
import startSlideShow from "./modules/slider.js"; 
import initCounterObserver from "./modules/counterNumber.js";

initializePreloader();
tabsFilter();
mobileMenu();
selectFilter();
animationSvgToScroll();
startSlideShow();
initCounterObserver();


