import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const add=document.querySelector('.add');
const substract=document.querySelector('.substract');
var i=0;

if (i>=0){

	substract.addEventListener("click",()=>{
		i-=1;
		console.log(i);
		if (i<0) {
			i=0;
			console.log(i);
		}
	})

	add.addEventListener("click",()=>{
		i+=1;
		console.log(i);	
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

//if (i<=0){
//	
//}


const Click = ()=> {


	
	const counter=document.querySelector(".counter--js"); 
	counter.innerHTML=`${i}`;
}



	
//const counter=document.querySelector(".counter--js");
//counter.innerHTML=`${i}`;

add.addEventListener("click",Click);
substract.addEventListener("click",Click);

const currentValue=localStorage.getItem('counter--js');
let result='';
if (currentValue){
	console.log(`Liczba spozytych szklanek wody wynosi ${currentVlaue}`);
	result=currentValue;
}


