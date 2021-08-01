let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/hell-let-loose.png'){
		myImage.setAttribute('src','images/Garrison.png')
	} else {
		myImage.setAttribute('src','images/hell-let-loose.png');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName){
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hell Let Loose is AWESOME!, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hell Let Loose is AWESOME!, ' +storedName;
	
}

myButton.onclick = function() {
	setUserName();
}
