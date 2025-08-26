// filter function does not change an original array
const words = ["Mango", "Apple", "Mangosteen", "orange"];

// console.log(words.find(word => word.toLowerCase() === "apple" ))

// const upperWords = words.map(word => word.toUpperCase())
// console.log(upperWords)
// console.log(words.map(word => word.toUpperCase()))

// 1. annonymous arrow function
// const shortWords = words.filter(word => word.length <= 6);

// 2. annonymous function declaration
// const shortWords = words.filter( function (word) { return word.length <= 6})

// 3. reuse callback function (named function)
function wordLength (word){ return word.length }

const shortWords = words.filter(wordLength)
// const shortWords = words.filter(wordLength("apple")) // = words.filter(true)
console.log(words)
console.log(shortWords);

// sort function changes orginal array
const sortedWords = words.sort()
console.log(words)
console.log(sortedWords)

let letters = [..."hello world"]
let uppercase = ''
letters.forEach((letters) => { return uppercase += letters.toUpperCase() })

console.log(`uppercase: ${uppercase}`)

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
  { id: 4, name: "John Smith" },
  { id: 5, name: "John Smith" },
  { id: 6, name: "John Smith" },
  { id: 7, name: "John Smith" },
  { id: 8, name: "John Smith" },
]

console.log(students.map(Element => Element.id))

// console.log(students.filter(Element => Element.id % 2 === 0).map(Element => Element.id)) 
console.log(students.map(Element => Element.id).filter(Element => Element.id % 2 === 0)) // ดีกว่า

// const map = students.map((students) => students.id)
// console.log(map)
// const result = map.filter(map => map % 2 == 0)
// console.log(result)

const product = [1, "Red", 102]
const productDetail = product.reduce((detail, prop) => {return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)})

const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]

console.log({"total":cart.reduce((acc, value) => (value.price * value.quantity) + acc, 0)})

const arr3 = [1]
arr[arr3.length] = 2

const arr1 = []

console.log(arr)
console.log(arr1.length)

const arr = ["animal","Test"]
// arr[arr.length] = "Test2"
console.log(arr.unshift("Front"))
console.log(arr)
console.log(arr.shift())
console.log(arr)

const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb')
// inserts at index 1
console.log(months)
// ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May')
// replaces 1 element at index 4
console.log(months)
// ["Jan", "Feb", "March", "April", "May"]
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
console.log(words1)
words1.splice(2, 1, 'Banana')
console.log(words1)
words1.splice(3, 2)
console.log(words1)
words1.splice(2, 0, 'melon', 'cheery')
console.log(words1)

console.log(words1)
console.log(words1.slice(2))
console.log(words1)
console.log(words1.slice(0, 3))
console.log(words1)
console.log(words1.fill(null))
console.log(words1)