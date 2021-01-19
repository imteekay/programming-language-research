fn main() {
  let arr = [10, 20, 30, 40];
  let first = arr[0];

  println!("first {}", first);

  for i in 0..4 {
    println!("[{}] = {}", i, arr[i]);
  }

  println!("length {}", arr.len());
}