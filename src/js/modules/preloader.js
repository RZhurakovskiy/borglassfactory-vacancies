document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
    initializePreloader();
  });
});

export default function initializePreloader() {
  setTimeout(function() {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");
  }, 1500);
}


