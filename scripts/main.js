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
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '一起 Hellow World 吧，' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
}