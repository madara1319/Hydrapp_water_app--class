import '../scss/main.scss';

// uncomment the lines below to enable PWA
 import {registerSW} from './pwa.js';
 registerSW();

/* place your code below */
//address elements by classes and create variables in js
const square2=document.querySelector('.square2');
const square2Inside=document.querySelector('.square2Inside');
const square3Inside=document.querySelector('.square3Inside');
const square3=document.querySelector('.square3');
const localCounter=document.querySelector(".counter--js");
const add=document.querySelector('.add');
const substract=document.querySelector('.substract');
//I save current date to variable key
const key = new Date().toISOString().slice(0,10);
console.log(key);
//create empty variables which will store values from localStorage
let i =0;
let H=0;
let TopW=0;
let Side=0;
//get localStorage values
i=localStorage.getItem('counter');
H=localStorage.getItem('globalHeight');
TopW=localStorage.getItem('globalTopWidth');
Side=localStorage.getItem('globalSide');
//save localStorage values
const Click = ()=> {
	localCounter.innerHTML=`${i}`;
	localStorage.setItem('counter',i);
	localStorage.setItem('globalHeight',(square2Inside.style.height));
	localStorage.setItem('globalTopWidth',(square3Inside.style.borderTopWidth));
	localStorage.setItem('globalSide',(square3Inside.style.borderLeftWidth));
}
localCounter.innerHTML=`${localStorage.getItem('counter')}`;
square2Inside.style.height=`${localStorage.getItem('globalHeight')}`;
//some variables created so i could get correct growth heights
const square2style=getComputedStyle(square2);
const square3style=getComputedStyle(square3Inside);
const waterLevel=square2style.height
const waterLevel2=square3style.borderTopWidth;
const waterSideLeft=square3style.borderLeftWidth;
const waterSideRight=square3style.borderRightWidth;
console.log(waterLevel2);
console.log((parseInt(waterLevel)-10)/12);
const glass=(parseInt(waterLevel)-10)/12;
const glass2=(parseInt(waterLevel2)/12);
const waterSide=(parseInt(waterSideLeft)/12);
console.log(glass2);
const fullGlass=12 * glass + 'px';
const fullGlass2=12 * glass2 + 'px';
const fullGlassSide=12 * waterSide + 'px';
console.log(fullGlass2);
console.log(fullGlassSide);
square2Inside.style.backgroundColor='#2196F3';

if (i>=0){
	substract.addEventListener("click",()=>{
		i--;
		H = i * glass + 'px';
		TopW = i * glass2 + 'px';
		Side = i * waterSide + 'px';
		square3Inside.style.borderTopWidth=TopW;
		square2Inside.style.height=H;
		square3Inside.style.borderLeftWidth=Side;
		square3Inside.style.borderRightWidth=Side;
		const localHeight = parseInt(H);
		const localTopWidth=parseInt(TopW);
		const localSide=parseInt(Side);
		//square2Inside.style.height = i * glass + 'px';
		//const localHeight=parseInt(square2Inside.style.height);
		console.log(localHeight);
		console.log(typeof(localHeight));
		if (localHeight>=12 * glass && localTopWidth>=12 * glass2 && localSide >= 12 * waterSide){
			square3Inside.style.borderTopWidth=12 * glass2 + 'px';
			square2Inside.style.height=12 * glass + 'px'; 		
			square3Inside.style.borderLeftWidth=12 * waterSide + 'px';
			square3Inside.style.borderRightWidth=12 * waterSide + 'px';
		}
		if (i<0) {
			i=0;
			console.log(i);
		}

	})

	add.addEventListener("click",()=>{
		i++;
		H = i * glass + 'px';
		TopW = i * glass2 + 'px';
		Side = i * waterSide + 'px';
		square3Inside.style.borderTopWidth=TopW;
		square2Inside.style.height=H;
		square3Inside.style.borderLeftWidth=Side;
		square3Inside.style.borderRightWidth=Side;
 
		const localHeight = parseInt(H);
		const localTopWidth=parseInt(TopW);
		const localSide=parseInt(Side);
		//square2Inside.style.height = i * glass + 'px'; 
	//	const localHeight=parseInt(square2Inside.style.height);
		console.log(localHeight);
		console.log(typeof(localHeight));
		if (localHeight>=12 * glass && localTopWidth>=12 * glass2 && localSide >= 12 * waterSide){
			square3Inside.style.borderTopWidth=12 * glass2 + 'px';
			square2Inside.style.height=12 * glass + 'px'; 		
			square3Inside.style.borderLeftWidth=12 * waterSide + 'px';
			square3Inside.style.borderRightWidth=12 * waterSide + 'px'; 					
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



