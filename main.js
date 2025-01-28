// Задание 1
let text1 = "Привіт"; 
let text2 = "Світ";   

if (text1 !== "" && text2 !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

// Задание 2
let num1 = 7; 
let num2 = 5; 

let sum = num1 + num2; 

if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

// Задание 3
let text = "Я вивчаю JavaScript!"; 

if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// Задание 4
let number = 15; 

if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

// Задание 5 
let nameUser = "Samir";
let emailUser = "samirchub@gmail.com";
let passwordUser = "123456";

let atIndex = emailUser.indexOf("@");
let dotIndex = emailUser.indexOf(".", atIndex);

if (
    nameUser.length >= 3 &&
    atIndex > 0 &&
    dotIndex > atIndex &&
    passwordUser.length >= 6
) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}
