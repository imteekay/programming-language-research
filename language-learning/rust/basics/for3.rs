fn main() {
  for i in 0..5 {
    let odd_even = if i % 2 == 0 {"even"} else {"odd"};
    println!("{}: {}", odd_even, i);
  }
}