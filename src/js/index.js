import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

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



if (i>=0){

	substract.addEventListener("click",()=>{
		i--;
		console.log(i);
		console.log(typeof(i));
		if (i<0) {
			i=0;
			console.log(i);
		}
	})

	add.addEventListener("click",()=>{
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


