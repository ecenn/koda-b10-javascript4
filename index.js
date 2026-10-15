const nilaiMatematika = [80, 70, 75]
const nilaiSejarah = [90, 95, 93]
const nilaiOlahraga = [80, 75, 80]
const nilai = [...nilaiMatematika, ...nilaiSejarah, ...nilaiOlahraga]
const n = nilai.length

let max = nilai[0]
let min = nilai[0]
let total = 0

for (let i = 0; i < n; i++) {
    let memory = nilai[i]
    if (memory < min) {
        min = memory
    } else if (memory > max) {
        max = memory
    }
    total += nilai[i]
}

const avg = total / n

console.log(min)
console.log(max)
console.log(avg)