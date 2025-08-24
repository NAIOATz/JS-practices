// 1. สร้าง array ที่เก็บชื่อเพื่อน 5 คน แล้วพิมพ์ชื่อแต่ละคนออกมา

friends = ["Kiki", "Hero", "V", "Bee", "A"]

for (const friend of friends){
    console.log(friend)
}

// 2. สร้าง array ของตัวเลข 1–10 แล้วพิมพ์ทุกตัว

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const num of number){
    console.log(num)
}

// 3. เขียนฟังก์ชันที่รับ array ของตัวเลข แล้วคืนค่า array ที่มีเลขทุกตัวคูณ 2

function multiple(arr){
    const output = []
    for (const num of arr){
        result = num * 2
        output.push(result)
        
    }
    return output
}

console.log(multiple([1,2,3,4,5]))

// 4. เขียนฟังก์ชันที่รับ string array แล้วคืนค่า array ของความยาวตัวอักษรแต่ละคำ

function stringArr(arr){
    const output = []
    for (word of arr){
        result = word.length
        output.push(result)
    }
    return output
}

console.log(stringArr(["Banana", "Apple", "Kiwi", "A"]))

// 5. ตรวจสอบว่า array มีค่า “JavaScript” หรือไม่ หากมีให้พิมพ์ “พบแล้ว”

function checkJS(arr){
    for(const x of arr){
        // console.log(x)
        // if(x === "JavaScript"){
        //     console.log("Finded")
        // }else{
        //     console.log("Not Found")
        // }

        if (langs.includes("JavaScript")) { // .includes() เป็น เมธอด (method) ของ Array (และ String ด้วย) ใช้สำหรับ ตรวจสอบว่ามีค่าที่กำหนดอยู่ใน Array หรือไม่
            console.log("พบแล้ว");
        } else {
            console.log("ไม่พบ");
        }
    }
}

checkJS(["Python", "C++", "JavaScript", "Go", "Rust"])
console.log("----------------------------------")
checkJS(["Python", "C++", "C", "Go", "Rust"])