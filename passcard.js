// document.getElementById("count").innerText = 5
// let count = 0
// show count in console 
// console.log(count)
// let myage = 21
// let humanDogratio = 7
// let Mydogage = myage * humanDogratio
// console.log("my dog age = " + Mydogage)
///////////////////////////////////////////////////////****************************** */
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
///////////////////////////////************************ */
///string////
let name = "Arwa"
let greating = "Hi,My name is "
let mygreating = greating + " " + name + "!"
// console.log(mygreating)
let welcome = document.getElementById("welcome")
welcome.innerText = mygreating
///////////////////////**************** */
let saveEl = document.getElementById("save-el")
console.log(saveEl)
let count = document.getElementById("count")
console.log(count)
let countt = 0
function increament() {

    // console.log("The btn was clicked")
    countt += 1
    count.innerText = countt
}
function save() {
    let countstr = countt + "-"
    // saveEl.innerText += countstr
    // to make spaces between str use-->textcontent
    saveEl.textContent += countt + "-"
    console.log(countt)
    let newcount = 0
    count.textContent = newcount
}

