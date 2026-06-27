/* ==========================================
   SS GARAGE V2
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

/* -----------------------
LOADER
----------------------- */

const loader=document.getElementById("loader");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},800);

},1200);

});

/* -----------------------
NAV
----------------------- */

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

nav.classList.add("active");

}else{

nav.classList.remove("active");

}

});

/* -----------------------
VIDEO
----------------------- */

const video=document.getElementById("heroVideo");

const image=document.getElementById("heroImage");

video.addEventListener("error",()=>{

video.style.display="none";

image.style.display="block";

});

/* -----------------------
SMOOTH
----------------------- */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.onclick=(e)=>{

e.preventDefault();

document.querySelector(link.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

};

});

/* -----------------------
REVEAL
----------------------- */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("reveal");

observer.observe(sec);

});
/* -----------------------
EVENT
----------------------- */

fetch("data/event.json")

.then(res=>res.json())

.then(events=>{

const eventList=document.getElementById("eventList");

events.forEach(item=>{

eventList.innerHTML+=`

<div class="eventCard glass">

<img src="${item.image}" alt="event">

</div>

`;

});

});

/* -----------------------
GALLERY
----------------------- */

fetch("data/gallery.json")

.then(res=>res.json())

.then(gallery=>{

const galleryList=document.getElementById("galleryList");

gallery.forEach(item=>{

galleryList.innerHTML+=`

<div class="galleryItem">

<img src="${item.image}" loading="lazy">

</div>

`;

});

galleryPopup();

});

/* -----------------------
LIGHTBOX
----------------------- */

function galleryPopup(){

const popup=document.createElement("div");

popup.id="lightbox";

popup.innerHTML="<img>";

document.body.appendChild(popup);

const popupImage=popup.querySelector("img");

document.querySelectorAll(".galleryItem img").forEach(img=>{

img.onclick=()=>{

popup.classList.add("active");

popupImage.src=img.src;

};

});

popup.onclick=()=>{

popup.classList.remove("active");

};

}

/* -----------------------
BRANCH
----------------------- */

fetch("data/branches.json")

.then(res=>res.json())

.then(branches=>{

const list=document.getElementById("branchList");

branches.forEach(branch=>{

list.innerHTML+=`

<div class="branchCard glass">

<h3>${branch.name}</h3>

<p>${branch.address}</p>

<div class="branchButtons">

<a href="${branch.naver}" target="_blank">

예약

</a>

<a href="${branch.review}" target="_blank">

후기

</a>

<a href="${branch.map}" target="_blank">

길찾기

</a>

</div>

</div>

`;

});

});