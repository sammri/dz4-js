// задание 1
let inputStr1 = document.querySelector('#inputStr1');
let inputStr2 = document.querySelector('#inputStr2');
let buttonStr = document.querySelector('#buttonStr');
let messageStr = document.querySelector('#messageStr');

function checkerStr () {

    let value1 = inputStr1.value.trim();
    let value2 = inputStr2.value.trim();

    if (value1 && value2) {
        messageStr.textContent = 'Заповнено';
    } else {
        messageStr.textContent = 'Не заповнено';
    }
}

buttonStr.addEventListener('click', checkerStr);



// --------------------------------------------
// задание 2
let inputNum1 = document.querySelector('#inputNum1');
let inputNum2 = document.querySelector('#inputNum2');
let buttonNum = document.querySelector('#buttonNum');
let messageNum = document.querySelector('#messageNum');

function checkerNum () {

    let value1 = inputNum1.value;
    let value2 = inputNum2.value;

    
   let numValue1 = Number(value1);
   let numValue2 = Number(value2);

    if (numValue1 && numValue2) {
        if ((numValue1 + numValue2) > 10  ) {
            messageNum.textContent = 'Сума більша за 10';
            
        }else{
            messageNum.textContent = 'Сума менша або дорівнює 10';
        }
    } else {
        messageNum.textContent = 'Впиши обидва значення!';
    }
        
   
        
    }

    buttonNum.addEventListener('click', checkerNum);



// --------------------------------------------
// задание 3

let inputJava = document.querySelector('#inputJava');
let buttonJava = document.querySelector('#buttonJava');
let messageJava = document.querySelector('#messageJava');

function checkerJava () {
    let valueJava = inputJava.value.trim();

    if (valueJava.includes('JavaScript')) {
        messageJava.textContent = ('Текст містить слово JavaScript');
    } else {
        messageJava.textContent = ('Текст не містить слово JavaScript');
    }
}
buttonJava.addEventListener('click', checkerJava);



// --------------------------------------------
// задание 4

    
let inputFotm = document.querySelector('#inputFotm');
let buttonFotm = document.querySelector('#buttonFotm');
let messageForm = document.querySelector('#messageForm');

function checkForm () {
    let value = inputFotm.value;
    if (value >= 10 && value <= 20)  {
        messageForm.textContent = ('Число входить в діапазон від 10 до 20');
        messageForm.style.color = "green"; 
    } else {
        messageForm.textContent = ('Число не входить в діапазон від 10 до 20');
        messageForm.style.color = "red";
    }
}

buttonFotm.addEventListener('click', checkForm);


// --------------------------------------------
// задание 5

let nameUser = document.querySelector('#nameUser');
let emailUser = document.querySelector('#emailUser');
let passwordUser = document.querySelector('#passwordUser');
let buttonRegister = document.querySelector('#buttonRegister');
let messageRegister = document.querySelector('#messageRegister');


function register () {
    
    let valueNameUser = nameUser.value.trim();
    let valueEmailUser = emailUser.value.trim();
    let valuePasswordUser = passwordUser.value.trim();

    let atIndex = valueEmailUser.indexOf('@');
    let dotIndex = valueEmailUser.indexOf('.', atIndex);

    if (valueNameUser.length >= 3 && atIndex > 0 && dotIndex > atIndex && valueEmailUser.includes('@') && valuePasswordUser.length >= 6) {
       console.log('asd');

    }else{
        messageRegister.textContent = ('Введiть всi поля правильно!!');
        messageRegister.style.color = 'red';
    }

}
buttonRegister.addEventListener('click', register);


function clearWarning() {
    messageRegister.textContent = '';
};
nameUser.addEventListener('focus', clearWarning);
emailUser.addEventListener('focus', clearWarning);
passwordUser.addEventListener('focus', clearWarning);






