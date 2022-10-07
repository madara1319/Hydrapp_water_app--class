import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
const add=document.querySelector('.add');
const substract=document.querySelector('.substract');

const Click = ()=> {
	
	const counter=document.querySelector(".counter--js"); 
	counter.innerHTML="test";
	counter.innerHTML.toggle(".counter--js");
}
add.addEventListener("click",Click);
