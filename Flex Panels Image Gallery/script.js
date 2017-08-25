const panels = document.querySelectorAll('.panel');

function addOpen() {
	this.classList.add('open');
}

function removeOpen() {
	this.classList.remove('open');
}

function removeActive() {
	this.classList.remove('open-active');
}

function addActive() {
	this.classList.add('open-active');
}

panels.forEach(panel => panel.addEventListener('click', addOpen));

panels.forEach(panel => panel.addEventListener('click', addActive));

panels.forEach(panel => panel.addEventListener('mouseout', removeOpen));

panels.forEach(panel => panel.addEventListener('mouseout', removeActive));