// Smooth reveal animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
const btn=document.getElementById("lastBtn");

const msg=document.getElementById("message");

btn.onclick=()=>{

msg.style.display="block";

btn.style.display="none";

}