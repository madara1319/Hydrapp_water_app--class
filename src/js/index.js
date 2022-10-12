import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
const add=document.querySelector('.add');
const substract=document.querySelector('.substract');
var i=0;
add.addEventListener("click",()=>{
	i++;
	console.log(i);	
})

substract.addEventListener("click",()=>{
	i--;
	console.log(i);
})




const Click = ()=> {
	
	const counter=document.querySelector(".counter--js"); 
	counter.innerHTML=`${i}`;
}
add.addEventListener("click",Click);
