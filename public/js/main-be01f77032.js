!function(e){function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";for(var o=document.body,c=document.getElementById("header-nav"),i=c.getElementsByTagName("a"),a=document.getElementById("hamburger"),r=document.querySelector(".hero"),s=document.querySelector(".modal"),l=document.getElementById("join-us"),u=document.querySelectorAll(".trigger-modal"),d=0;d<i.length;d+=1)!function(e){var n=i[e],t=n.id.replace("nav-",""),o=document.getElementById("subnav-"+t);o&&(n.addEventListener("mouseover",function(){o.style.display="inline-block"}),n.addEventListener("mouseout",function(){o.style.display="none"}))}(d);var m=function(e){e.stopPropagation(),o.classList.contains("navOpen")?o.classList.remove("navOpen"):o.classList.add("navOpen")};if(o.onclick=function(e){o.classList.contains("navOpen")&&m(e)},a.onclick=m,r&&o.classList.contains("home")){var f=r.querySelector("p");f&&setTimeout(function(){return f.classList.add("loaded")},500)}if(s){if(document.querySelector(".modal-close").onclick=function(){s.style.display="none"},document.cookie="splash=1; path=/;",l){var p=void 0,y=function(){return p||(p=document.querySelector("#modal-form-id #new_answer"),p.onsubmit=function(){s.style.display="none"},p)},v=function(e){e.preventDefault(),y(),s.style.display="block",s.classList.add("simple-modal")};l.onclick=v,u.forEach(function(e){e.addEventListener("click",v)})}}window.onload=function(){setTimeout(function(){document.getElementById("action_welcome_message")&&o.classList.add("action-logged-in")},0)}}]);