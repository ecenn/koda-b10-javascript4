# Materi: Spread Operator

Mempelajari penggunaan spread operator.

## Soal 1

Membuat program hitung nilai max, min, dan average

### Flowchart

```mermaid

flowchart LR

start((start))
stop(((stop)))

nilai[/"nilai = [...nilaiMatematika, ...nilaiSejarah, ...nilaiOlahraga]"/]

n[n = nilai.length]

index[i = 0]
checkIndex{i < n}

memory["memory = nilai[i]"]
total[total = 0]

max["max = nilai[0]"]
inMax["max = memory"]
min["min = nilai[0]"]
inMin["min = memory"]
avg[avg = total / n]

incIndex[i++]

addTotal["total += nilai[i]"]
outMin[/min/]
outMax[/max/]
outAvg[/avg/]

checkKecil{"memory < min"}
checkBesar{"memory > max"}

start --> nilai --> n --> max --> min --> total --> index --> checkIndex
checkIndex --true--> memory --> checkKecil
checkKecil --true--> inMin --> addTotal
checkKecil --false--> checkBesar
checkBesar --true--> inMax --> addTotal
checkBesar --false--> addTotal
addTotal --> incIndex --> checkIndex
checkIndex --false--> avg --> outMax --> outMin --> outAvg --> stop

```