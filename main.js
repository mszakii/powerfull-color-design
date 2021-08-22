// declaration
let up = document.querySelector(".up");
let nameEl = document.querySelector("h1");

// scroll detector
window.onscroll = _ => 
this.scrollY >= 750?
up.style.right = "20px":
up.style.right = "-100%";

// func
up.onclick = _ => this.location.href = "#header";


// accipt name

var userName = window.prompt("what's your first name?");


nameEl.innerHTML = `Hello ${userName}.`;
console.log(`Hello ${userName} 😁`);
console.log("what do you do in console?");
