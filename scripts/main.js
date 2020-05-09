let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hellow world!';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo.png') {
        myImage.setAttribute('src', 'images/logo-2.jpg');
    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = '一起 Hellow World!，' + storedName;
    }
}

myButton.onclick = function() {
    setUserName();
}