// Set
let s = new Set()
s.add(1)
s.add(2)
s.add(2)

console.log(s.size)

s.forEach((num) => {
  console.log(num)
})

// Map
let m = new Map()
m.set("one", 1)
m.set("two", 2)
m.set("three", 3)

console.log(m.size)
console.log(m.entries())

for (let [key, value] of m.entries()) {
  console.log(`${key}: ${value}`)
}
