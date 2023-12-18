function defaultAnimations() {
	document.querySelector('.nav-btn-1').style.animation = 'navappear 0.6s ease-in-out forwards';
	document.querySelector('.nav-btn-2').style.animation = 'navappear 0.6s ease-in-out 0.1s forwards';
	document.querySelector('.nav-btn-3').style.animation = 'navappear 0.6s ease-in-out 0.2s forwards';
	document.querySelector('.nav-btn-4').style.animation = 'navappear 0.6s ease-in-out 0.3s forwards';
	document.querySelector('.nav-btn-5').style.animation = 'navappear 0.6s ease-in-out 0.4s forwards';
	document.querySelector('.logo-bar').style.animation = 'logoappear 0.6s ease-in-out 0.2s forwards';
	document.querySelector('.glow-line-1').style.animation = 'glappear 1.2s ease-in-out forwards';
	document.querySelector('.after-gl-text-1').style.animation = 'leftappear 0.6s ease-in-out 0.2s forwards';
	document.querySelector('.after-gl-text-2').style.animation = 'leftappear 0.6s ease-in-out 0.3s forwards';
	document.querySelector('.sec-1-left .down').style.animation = 'leftappear2 0.6s ease-in-out 0.4s forwards';
	document.querySelector('.sec-1-eye-catcher').style.animation = 'eyecappear 0.6s ease-in-out 0.4s forwards';
	document.querySelector('.sec-1-eye-catcher2').style.animation = 'eyecappear2 0.6s ease-in-out 0.4s forwards';
	setTimeout(()=>{
		document.querySelector('.sec-1-eye-catcher2').style.animation = 'infinityupdown 4s ease-in-out infinite';
	},1700);
	document.querySelector('.bitcoin-logo').style.animation = 'eyecappear3 0.6s ease-in-out 0.8s forwards';
}