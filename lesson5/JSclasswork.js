// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById("main_header");
mainHeader.innerText = "june-2021";

// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
ul[0].style.height = "400px";

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkLists = document.getElementsByClassName("linkList");
console.log(linkLists)
for (let linkList of linkLists) {
    linkList.style.width = "50%";
}

// d) отримує текст який зберігається в елементі з класом listElement2
let textListElement2 = document.getElementsByClassName("listElement2")[0].innerText;
console.log(textListElement2)

// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName("li");
for (let liElement of li) {
    liElement.style.background = "gray";
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName("a");
for (let aElement of a) {
    aElement.classList.add("anchor");
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let aElement of a) {
    if (aElement.innerText === "link3") {
        aElement.style.fontSize = "40px";
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let aElement of a) {
    aElement.classList.add(`element_${aElement.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName("sub-header");
for (let subHeaderElement of subHeader) {
    let bgcolor = prompt("Enter background color!");
    subHeaderElement.style.background = bgcolor;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (let subHeaderElement of subHeader) {
    if (subHeaderElement.innerText === "content 2 segment") {
        let color = prompt("Enter color!");
        subHeaderElement.style.color = color;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName("content_1")[0];
let textContent1 = prompt("Enter text!");
content1.innerText = textContent1;

// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName("p");
for (let pElement of p) {
    pElement.style.padding = "20px";
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text2 = document.getElementsByClassName("text2");
for (let text2Element of text2) {
    text2Element.innerText = "june-2021";
}
