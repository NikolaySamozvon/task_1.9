// Task 1

nextPrime:
    for (let i = 2; i <= 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }

// Task 2
let a = 0;
do {
    if (a == 0) {
        console.log(a + " - це нуль");
        a++;
    }
    else if (a % 2 == 0) {
        console.log(a + " - парне число");
        a++;
    }
    else {
        console.log(a + " - непарне число");
        a++;
    }
}while (a <= 10);

// Task 3

for (let i = 0; i < 10; console.log(i++)) {

}

// Task 4
let floors = +prompt("Введіть кількість поверхів");
for (let i = 1; i <= floors; i++) {
    let string = "";
    for (let j = 0; j < i; j++) {
        string+="*";
    }
    console.log(string);
}
for (let i = 1; i <= floors; i++) {
    let countOfSymbols = floors * 2 - 1;

    let countOfStarsInFloor = i * 2 - 1;
    let countOfSpacesInFloor = countOfSymbols - countOfStarsInFloor;
    let string = '';
    for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
        string += ' ';
    }
    for (let j = 0; j < countOfStarsInFloor; j++) {
        string += '*';
    }
    for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
        string += ' ';
    }
    console.log(string)
}
for (let i = 1; i < floors / 2; i++) {
    let countOfStarsInFloor = i * 2 - 1;
    let countOfSpacesInFloor = floors - countOfStarsInFloor;
    let string = '';
    for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
        string += ' ';
    }
    for (let j = 0; j < countOfStarsInFloor; j++) {
        string += '*';
    }
    for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
        string += ' ';
    }
    console.log(string);
}
console.log('*'.repeat(floors));
for (let i = 1; i < floors / 2; i++) {
    let countOfStarsInFloor = floors - 2*i;
    let countOfSpacesInFloor = floors - countOfStarsInFloor;

    let string = '';
    for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
        string += ' ';
    }
    for (let j = 0; j < countOfStarsInFloor; j++) {
        string += '*';
    }
    for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
        string += ' ';
    }
    console.log(string);
}

// Task 5
let numb = 10000;
let counter = 0;
for (; numb > 50; numb /= 2) {
    counter++;
}
let result = numb;
console.log(result);
console.log("Кількість діленнь на 2 = " + counter);

// Task 6

let numberOfMonth = prompt("Введіть номер місяця", "");
switch (numberOfMonth) {
    case "1":
        alert("Це Січень, Зима");
        break;
    case "2":
        alert("Це Лютий, Зима");
        break;
    case "3":
        alert("Це Березень, Весна");
        break;
    case "4":
        alert("Зе Квітень, Весна");
        break;
    case "5":
        alert("Це Травень, Весна");
        break;
    case "6":
        alert("Це Червень, Літо");
        break;
    case "7":
        alert("Це Липень, Літо");
        break;
    case "8":
        alert("Це Серпень, Літо");
        break;
    case "9":
        alert("Це Вересень, Осінь");
        break;
    case "10":
        alert("Це Жовтень, Осінь");
        break;
    case "11":
        alert("Це Листопад, Осінь");
        break;
    case "12":
        alert("Це Грудень, Зима");
        break;
}

// Task 7
let temperatureCelcius = prompt("Введіть температуру в градусах цельсія", "");
alert(temperatureCelcius + " градусів Цельсія = " + ((9/5) * temperatureCelcius + 32) + " градусів Фаренгейту")

// Task 8
let numberOfDay = prompt("Введіть номер дня", "");
switch (numberOfDay) {
    case "1":
        alert("Це Понеділок");
        break;
    case "2":
        alert("Це Вівторок");
        break;
    case "3":
        alert("Це Середа");
        break;
    case "4":
        alert("Це Четвер");
        break;
    case "5":
        alert("Це П'ятниця");
        break;
    case "6":
        alert("Це Субота");
        break;
    case "7":
        alert("Це Неділя");
        break;
    default:
        alert("Hello World");
        break;
}
