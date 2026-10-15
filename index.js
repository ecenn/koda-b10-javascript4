const nilaiMatematika = [80, 85, 75]
const nilaiSejarah = [98, 95, 93]
const nilaiOlahraga = [100, 100, 100]
const nilai = [...nilaiMatematika, ...nilaiSejarah, ...nilaiOlahraga]
const n = nilai.length

let max = 0
let min = 0
let total = 0

for (let i = 0; i < n; i++) {
    let memory = nilai[i-1]
    if (memory < 0) {
        return
    } else {
        if (nilai[i] < memory) {
            min = nilai[i]
        }
        if (nilai[i] > memory) {
            max = nilai[i]
        }
    }
    total += nilai[i]
}

const avg = total / n

console.log(min)
console.log(max)
console.log(avg)