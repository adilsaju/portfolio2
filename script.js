const header = document.querySelector("header");
const r = document.querySelector(':root');
let i = true;

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let topbtn = document.querySelector('.top-btn');
let logo = document.querySelector('.logo');
let blogo = document.querySelector('.dark-logo');
let wimage = document.querySelector('.whiteimg');
let bimage = document.querySelector('.blackimg');


topbtn.onclick = () => {
	if(i){
		i= false;
		r.style.setProperty('--backg-color', '#000');
		r.style.setProperty('--text-color', '#ffff');
		r.style.setProperty('--main-color', 'rgb(71, 216, 31)');
		logo.classList.add('hideme');
		blogo.classList.remove('hideme');

		bimage.classList.remove('hideme');
		wimage.classList.add('hideme')
	}else{
		i = true;
		r.style.setProperty('--backg-color', '#ffff');
		r.style.setProperty('--text-color', '#000');
		r.style.setProperty('--main-color', 'rgb(16, 148, 225)');
		logo.classList.remove('hideme');
		blogo.classList.add('hideme');

		bimage.classList.add('hideme');
		wimage.classList.remove('hideme')
	}

};

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '10px',
	duration: 2700,
	reset: false
})


// el.classList.add('animat');
	var config = {
		// Other settings...
		
		// The 'afterReveal' callback function
		afterReveal: (function(el) {
		  // Add the animation class to the element
		 
		  let number = document.getElementById("number");
		  let numberJS = document.getElementById("numberJS");
		  let numberRT = document.getElementById("numberRT");
		  let numberNJ = document.getElementById("numberNJ");
		  let numberMD = document.getElementById("numberMD");
		  let numberEX = document.getElementById("numberEX");

		  el.classList.remove('animat');
		  el.classList.add('animat');
		  let counter = 0;
		  let counter2 = 0;
		  let counter3 = 0;
		  let counter4 = 0;
		  let counter5 = 0;
		  let counter6 = 0;

		  setInterval(()=>{
			if(counter == 9){
				clearInterval();
			}else{
			counter+=1;
			number.innerHTML = counter + "/10"
		}

		},200)
		setInterval(()=>{
			if(counter2 == 9){
				clearInterval();
			}else{
			counter2+=1;
			numberJS.innerHTML = counter + "/10"
		}

		},200)
		setInterval(()=>{
			if(counter3 == 9){
				clearInterval();
			}else{
			counter3+=1;
			numberRT.innerHTML = counter + "/10"
		}

		},200)
		setInterval(()=>{
			if(counter4 == 8){
				clearInterval();
			}else{
			counter4+=1;
			numberNJ.innerHTML = counter + "/10"
		}

		},200)
		setInterval(()=>{
			if(counter5 == 9){
				clearInterval();
			}else{
			counter5+=1;
			numberMD.innerHTML = counter + "/10"
		}

		},200)
		setInterval(()=>{
			if(counter6 == 9){
				clearInterval();
			}else{
			counter6+=1;
			numberEX.innerHTML = counter + "/10"
		}

		},200)
	
	
		})
		
	  };
	

	// Create the scroll reveal instance
var sr2 = ScrollReveal(config);

// Reveal the element
sr2.reveal('.sub-service');

sr.reveal('.ee',{delay:250, origin:'bottom'})
sr.reveal('.twoo',{delay:750, origin:'bottom'})
sr.reveal('.threee',{delay:950, origin:'bottom'})
sr.reveal('.social',{delay:1350, origin:'bottom'})
sr.reveal('.home-img',{delay:1550, origin:'bottom'})
sr.reveal('.fivee',{delay:2050, origin:'bottom'})

sr.reveal('.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})
sr.reveal('.sub-service',{delay:200, origin:'bottom',reset: true})
