import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const square2=document.querySelector('.square2');
const square2Inside=document.querySelector('.square2Inside');
const localCounter=document.querySelector(".counter--js");
const add=document.querySelector('.add');
const substract=document.querySelector('.substract');
let i =0;
i=localStorage.getItem('counter');

const Click = ()=> {
	localCounter.innerHTML=`${i}`;
	localStorage.setItem('counter',i);
}
localCounter.innerHTML=`${localStorage.getItem('counter')}`;
//
//if (localStorage.getItem('counter')>0){
//	const i=localStorage.getItem('counter');
//}
//else 
//{
//	const i=0;
//
//}
//
//

const square2Inside_style=getComputedStyle(square2Inside);
const waterLevel=square2Inside_style.height; 
console.log(waterLevel);
console.log(typeof(waterLevel));
console.log((parseInt(waterLevel))/12);
const glass=parseInt(waterLevel)/12;

const square2Inside_color=square2Inside_style.backgroundColor;
console.log(square2Inside_color);

//square2Inside.style.height='5px';
square2Inside.style.backgroundColor='blue';
//	if (square2Inside.style.height>12 * glass + 'px'){
//		square2Inside.style.height=12 * glass + 'px';	

if (i>=0){
	substract.addEventListener("click",()=>{
		i--;
		square2Inside.style.height = i * glass + 'px';
		console.log(i);
		console.log(typeof(i));
		if (i<0) {
			i=0;
			console.log(i);
		}

	})

	add.addEventListener("click",()=>{
		square2Inside.style.height = i * glass + 'px'; 	
		i++;	
		console.log(i);
		console.log(typeof(i));
		if (i<0) {
			i=0;
			console.log(i);
		}


})
}

else
{
	i=0;
	console.log(i);

}

add.addEventListener("click",Click);
substract.addEventListener("click",Click);



