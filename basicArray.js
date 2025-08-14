const arr = ["text", 15, true,];
console.log(arr);
console.log(`length: ${arr.length}`)
console.log("First item: "+ arr[0] + ", type is " + typeof arr[0])
console.log("Last item: "+ arr[2] + ", type is " + typeof arr[2])

for (const i of arr) {
    console.log(i);
}

arr[arr.length] = 'Hello'
arr[arr.length+2] = 13
console.log(arr)
console.log(arr.length)

const arr2 = [1,5,6,7,[8,9,10], {
      property1: "value1",
      property2: 123,
      method1: function() {
        console.log("This is a method.");
      }
    }] ;

console.log(arr2)

// array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors)
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts)
 
// array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
console.log(groups)

console.log(contacts[0].email[1])
console.log(groups[0])

for (const i of groups) {
    let last = groups[groups.length - 1];
    console.log(last)
}

let a = [1,2,3]
let b = [0, ...a, 4]
console.log(b)

const greeting = 'Hello World'
const greetingCh = [...greeting]
console.log(greetingCh)

const x = [1,2,3,4,56,7]
console.log(x)

const y = new Array()
const z = new Array(10)
const g = new Array(3,4,5,11)

const j = Array.of(5)
const str = 'Hello workd!'
const k = Array.from(str)
console.log()