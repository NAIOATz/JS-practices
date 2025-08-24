// Write a function getFreqOfWords(sentence) that return an object with keys representing unique words in lowercase 
// and values representing the frequency of occurrences of each word with ignore case in the sentence. 
// If input string is null or undefined, return undefined.

function getFreqOfWords(sentence){

    if (sentence === null || sentence === undefined) return undefined;

    const words = sentence.toLowerCase().split(" ") // แปลงข้อความที่เข้ามาให้เป็นพิมพ์เล็กและแยกใส่ array
    const freq = {} // สร้าง object 
    for (const word of words){ // ลูปเอาทุกคำที่มีใน array 
        if(freq[word]){
            freq[word] += 1
        }else{
            freq[word] = 1
        }

    }

    return freq

}

// console.log(getFreqOfWords("Hello my name is peter"))
console.log(getFreqOfWords("Today is present and present is your gift"))

// คำอธิบาย
// 

const obj = {
    "hello": 1
}

