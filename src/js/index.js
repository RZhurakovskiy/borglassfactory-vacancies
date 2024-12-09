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


function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function() {
  var consent = getCookie("cookieConsentAccepted");
  if (!consent) {
    document.getElementById("cookieConsent").style.display = "flex";

    document.getElementById("acceptCookie").addEventListener("click", function() {
      setCookie("cookieConsentAccepted", "true", 365);
      document.getElementById("cookieConsent").style.display = "none";
    });
  }
});

