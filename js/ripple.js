const button = document.querySelector('button');

function createRippleEffect(e) {
	const wave = document.createElement('div');
	const x = e.layerX;
	const y = e.layerY;

	wave.classList.add('wave');
	wave.style.left = `${x}px`;
	wave.style.top = `${y}px`;

	button.appendChild(wave);
	setTimeout(() => {
		button.removeChild(wave);
	}, 1001);
}

function shrinkRippleEffect(e) {
	const wave = document.createElement('div');
	const x = e.layerX;
	const y = e.layerY;

	wave.classList.add('shrink-wave');
	wave.style.left = `${x}px`;
	wave.style.top = `${y}px`;

	this.appendChild(wave);
	setTimeout(() => {
		this.removeChild(wave);
	}, 1001);
}

button.addEventListener('mousedown', function (e) {
	button.removeEventListener('mouseup', shrinkRippleEffect);
	createRippleEffect(e);
	setTimeout(() => {
		button.addEventListener('mouseup', shrinkRippleEffect);
	}, 599);
});
