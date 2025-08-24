// function declaration
function add(a, b) {
    return a + b
}

// function expression
// ถ้าไม่ใส่ {} ไม่ต้องใส่ return  ถ้าใส่ต้องมี return ไม่งั้นส่งค่าออกมาไม่ได้ 
const multiple = (a,b) => a*b
const divide = (a,b) => {return a/b}
const subtract = function(a,b){return a - b}

// function เป็นกล่องที่เก็บคำสั่ง เรียกผ่านชื่อ ตัวแปรใน Function เป็นตัวแปร Local เมื่อจบการทำงานใน Function ก็จบ อ้างถึงไม่ได้
// console.log(typeof(add))

const x = add
// console.log(x(1,2)) // 3

// if(x === add) 
//     console.log("x = add")
// else 
//     console.log("x != add")

function dosomething(x){ // x = add
    // return x(3,5) // add(3,5)
    return x // add
}
const y = dosomething(add)
// console.log(dosomething(add))

function sayGoodBye(){
    return 'Good bye'
}
function doSomeThing(){
    return sayGoodBye
}
const doit = doSomeThing()
// console.log(doit)
// console.log(dosomething())

re = z => z + 100
// console.log(re(100))

function sum (x, y, ...z){
    let g = 0
    for(argu of arguments){
        g += argu
    }
    return g
}

// console.log(sum(1,2,3,4,5,6,7,8,9))
// console.log(sum())
// console.log(sum(1))
// console.log(sum(1,2,3))

function greeting(greet = "Hello", whom = "Guest", quote = "How are you?"){
    return `${greet} ${whom} ${quote}`
}

// console.log(greeting("hi"))
// console.log(greeting("Good morning", "Guy", "Great"))
// console.log(greeting(undefined, null, "Fine"))
// console.log(greeting())

function sum (num1, num2, num3){
    return num1 + num2 + num3
}
let nums = [5]
// console.log(sum(...nums))

function getFreqOfWords(sentence){
    // console.log(sentence)
    if (sentence === null || typeof sentence === 'undefined') return undefined

    let words = sentence.toLowerCase()
    // console.log(x)
    const wordCount = {}

    for (const word of words){
        console.log(word)
        // wordCount["world:"]
    }

}

console.log(getFreqOfWords("Today is present and present is your gift"))