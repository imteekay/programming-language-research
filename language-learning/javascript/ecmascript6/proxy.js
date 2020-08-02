let target = {}
let handler = {
  get(target, attr) {
    console.log(`Get ${attr}`)
  }
}

let proxy = new Proxy(target, handler)

proxy.foo
