!function(){"use strict";function e(){setTimeout((function(){document.getElementById("preloader").classList.add("hidden")}),1500)}document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("load",(function(){e()}))}));const t=document.querySelectorAll(".slide");let n=0;function c(){const e=document.querySelectorAll(".number-count"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(function(e){const t=+e.getAttribute("data-target"),n=t/50;let c=0;const o=setInterval((()=>{c+=n,c>=t?(e.textContent=t,clearInterval(o)):e.textContent=Math.ceil(c)}),20)}(e.target),t.unobserve(e.target))}))}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}document.addEventListener("DOMContentLoaded",(function(){c()})),e(),function(){const e=document.querySelectorAll(".tab-button"),t=document.querySelectorAll(".vacancy-card");e.length>0&&t.length>0&&(e[0].classList.add("active"),t[0].classList.add("active")),e.forEach((n=>{n.addEventListener("click",(()=>{const c=n.getAttribute("data-job");e.forEach((e=>e.classList.remove("active"))),n.classList.add("active"),t.forEach((e=>{e.getAttribute("data-job")===c?e.classList.add("active"):e.classList.remove("active")}))}))}))}(),function(){const e=document.querySelector(".menu-btn"),t=document.querySelector(".main-nav-list"),n=document.querySelectorAll(".main-nav-list a"),c=document.querySelector("body");e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active")})),n.forEach((n=>{n.addEventListener("click",(()=>{e.classList.remove("active"),t.classList.remove("active")}))})),c.addEventListener("click",(n=>{n.target.closest(".main-nav-list")||n.target.closest(".menu-btn")||(e.classList.remove("active"),t.classList.remove("active"))}))}(),function(){const e=document.getElementById("vacancy-select"),t=document.querySelectorAll(".vacancy-card");if(e&&t.length>0){const n=e.value;t.forEach((e=>{e.getAttribute("data-job")===n?e.classList.add("active"):e.classList.remove("active")})),e.addEventListener("change",(()=>{const n=e.value;t.forEach((e=>{e.getAttribute("data-job")===n?e.classList.add("active"):e.classList.remove("active")}))}))}}(),function(e=".decor-element",t="animate",n=.1){const c=new IntersectionObserver((e=>{e.forEach((e=>{const n=e.target;e.isIntersecting?(n.classList.remove(t),n.offsetWidth,n.classList.add(t)):n.classList.remove(t)}))}),{threshold:n}),o=document.querySelectorAll(e);o.length&&o.forEach((e=>c.observe(e)))}(),setInterval((function(){t[n].classList.remove("active"),n=(n+1)%t.length,t[n].classList.add("active")}),5e3),c(),document.addEventListener("DOMContentLoaded",(function(){(function(e){for(var t="cookieConsentAccepted=",n=document.cookie.split(";"),c=0;c<n.length;c++){var o=n[c].trim();if(0===o.indexOf(t))return decodeURIComponent(o.substring(22,o.length))}return null})()||(document.getElementById("cookieConsent").style.display="flex",document.getElementById("acceptCookie").addEventListener("click",(function(){var e,t;e="",(t=new Date).setTime(t.getTime()+31536e6),e="; expires="+t.toUTCString(),document.cookie="cookieConsentAccepted="+encodeURIComponent("true")+e+"; path=/",document.getElementById("cookieConsent").style.display="none"})))}))}();