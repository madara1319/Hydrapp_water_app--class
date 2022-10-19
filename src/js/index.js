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
let H=0;
i=localStorage.getItem('counter');
H=localStorage.getItem('globalHeight');
const Click = ()=> {
	localCounter.innerHTML=`${i}`;
	localStorage.setItem('counter',i);
	localStorage.setItem('globalHeight',(square2Inside.style.height));
}
localCounter.innerHTML=`${localStorage.getItem('counter')}`;
square2Inside.style.height=`${localStorage.getItem('globalHeight')}`;
const square2style=getComputedStyle(square2);
const waterLevel=square2style.height; 
console.log((parseInt(waterLevel)-10)/12);
const glass=(parseInt(waterLevel)-10)/12;
const fullGlass=12 * glass + 'px';

square2Inside.style.backgroundColor='blue';

if (i>=0){
	substract.addEventListener("click",()=>{
		i--;
		H = i * glass + 'px';
		square2Inside.style.height=H;
		const localHeight = parseInt(H);
		//square2Inside.style.height = i * glass + 'px';
		//const localHeight=parseInt(square2Inside.style.height);
		console.log(localHeight);
		console.log(typeof(localHeight));
		if (localHeight>=12 * glass){
			square2Inside.style.height=12 * glass + 'px'; 						
		}
		if (i<0) {
			i=0;
			console.log(i);
		}

	})

	add.addEventListener("click",()=>{
		i++;
		H = i * glass + 'px';
		square2Inside.style.height=H; 
		const localHeight = parseInt(H);
		//square2Inside.style.height = i * glass + 'px'; 
	//	const localHeight=parseInt(square2Inside.style.height);
		console.log(localHeight);
		console.log(typeof(localHeight));
		if (localHeight>=12 * glass){
			square2Inside.style.height=12 * glass + 'px'; 					
		}
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



