// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let pContent = document.getElementById("content");
let pText = pContent.innerText;
console.log(pText);
// -- отримує текст з блоку з id "rules"
let divRules = document.getElementById("rules");
let divTextRules = divRules.innerText;
console.log(divTextRules);
// -- замініть текст параграфа з id 'content' на будь-який інший
pContent.innerText = "lasd";
// -- замініть текст параграфа з id 'rules' на будь-який інший
divRules.innerText = "qwesadsaa"
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let elements = document.body.children;
for (let element of elements) {
    element.style.background = "red"
    element.style.color = "blue"
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let elRules = document.getElementById("rules").classList;
console.log(elRules);
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let fcRules = document.getElementsByClassName("fc_rules");
console.log(fcRules);
for (let fcRule of fcRules) {
    fcRule.addEventListener("click", function (){
        console.log(this.innerText);
    })
    fcRule.addEventListener("click", function (){
        console.log("asfasdsaq");
    })
}
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

for (let fcRule of fcRules) {
    fcRule.style.color = "black";
}
