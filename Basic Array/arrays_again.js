// A. การสร้างและการจัดการ Array เบื้องต้น

// สร้าง array ชื่อ fruits โดยใช้ array literal ที่มีผลไม้ 3 ชนิดที่คุณชอบ (เช่น 'apple', 'banana', 'orange')

const fruits = ['apple', 'banana', 'orange'] // --> ['apple', 'banana', 'orange']

// สร้าง array ชื่อ moreFruits ที่รวม fruits กับผลไม้อื่นๆ อีก 2 ชนิด (เช่น 'grape', 'kiwi') โดยใช้ spread operator (...)

const moreFruits = [...fruits, 'grape', 'kiwi']
console.log(moreFruits) // --> [ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]

// สร้าง array ชื่อ numbers ที่มีขนาด 5 ช่องว่าง โดยใช้ Array() constructor

const numbers = new Array(5)
console.log(numbers.length) // --> 5

// สร้าง array ชื่อ singleNumberArray ที่มีค่าเดียวคือ 10 โดยใช้ Array.of() factory method

const singleNumberArray = Array.of(10)
console.log(singleNumberArray) // --> [10]
console.log(singleNumberArray.length) // --> 1

// สร้างสำเนาของ moreFruits ชื่อ copiedFruits โดยใช้ Array.from() factory method

const copiedFruits = Array.from(moreFruits)
console.log(moreFruits) // --> [ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]
console.log(copiedFruits) // --> [ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]

// เข้าถึงและแสดงผลชื่อผลไม้ตัวแรกใน fruits

console.log(fruits[0]) // apple

// เปลี่ยนชื่อผลไม้ตัวที่สองใน fruits เป็น 'mango' และแสดงผล fruits ทั้งหมด
console.log(fruits) // --> [ 'apple', 'banana', 'orange' ]
fruits[1] = 'mango'
console.log(fruits) // --> [ 'apple', 'mango', 'orange' ]

// เพิ่ม 'pineapple' เข้าไปใน fruits และ ลบผลไม้ที่ index 0 ออกจาก fruits (สังเกตว่า length ของ array เปลี่ยนไปหรือไม่)

fruits[fruits.length] = 'pineapple' // fruits[3] = 'pineapple' 
delete fruits[0] // remove apple
console.log(fruits) // --> [ <1 empty item>, 'mango', 'orange', 'pineapple' ]
console.log(fruits.length) // 4
// ข้อมูลใน index ที่ 0 หายไป แต่ว่า length ไม่ลดลง เพราะ array = object ตอนที่สร้าง array ขึ้นมาเกมือนสร้าง obj ขึ้นมาด้วย หากลบ fruits[0] = ลบ key 0 ใน obj
// เช่น array ของ fruits = ['apple', 'banana', 'orange'] obj ของ fruits จะเป็น fruits = {0 : 'apple', 1 : 'banana', 2 : 'orange', length : 3}
// พอเราลบ array index ที่ 0 มันเลย = ว่า เราลบ obj key 0 fruits = { 1 : 'banana', 2 : 'orange', length : 3 } สังเกตุว่า length ยัง = 3 เวลาเราเช็ค length เลย = 3 แต่ value หายไปแล้ว

// -------------------------------------------------------------------------------------------
// B. การ Destructuring และ Iterating Array

//  กำหนด array data =  ใช้ destructuring assignment เพื่อดึงค่า 10 และ 20 ไปยังตัวแปร first และ second ตามลำดับ จาก data

const data = [first, second] = [10, 20]
console.log(first) // 10
console.log(second) // 20

// กำหนด array chars = ['J', 'S', ' ', 'E', 'x', 'a', 'm', 'p', 'l', 'e'],
// ใช้ for/of loop เพื่อวนซ้ำ chars และสร้าง string ใหม่ที่คั่นแต่ละตัวอักษรด้วยคอมม่า (, ) และแสดงผล string นั้น

chars = ['J', 'S', ' ', 'E', 'x', 'a', 'm', 'p', 'l', 'e']
output = ""

for(const msg of chars){
    output += msg + ', '
}

console.log(output)

// ใช้ join() method ของ array เพื่อรวม chars ให้เป็น string เดียวโดยไม่มีตัวคั่น และแสดงผล
console.log(chars.join(""))
// note:
// array: The array whose elements are to be joined.
// separator (Optional): A string that specifies the characters to use as a separator between each element in the resulting string. If omitted, the array elements are separated with a comma.
// เป็น string ที่คั่นระหว่าง value ใน array ถ้าปล่อยว่าง default จะให้เป็น ','

// ใช้ for/of loop ร่วมกับ entries() method และ destructuring assignment เพื่อวนซ้ำ chars และแสดงผลเฉพาะตัวอักษรที่มี index เป็นเลขคู่
// [SKIP] - ยังไม่เข้าใจเรื่อง entries()