fn square(x: f64) -> f64 {
  x * x
}

fn abs(x: f64) -> f64 {
  if x > 0.0 {
    x
  } else {
    -x
  }
}

fn clamp(x: f64, x1: f64, x2: f64) -> f64 {
  if x < x1 {
    x1
  } else if x > x2 {
    x2
  } else {
    x
  }
}

fn factorial(x: u64) -> u64 {
  if x <= 1 {
    1
  } else {
    factorial(x - 1) * x
  }
}

fn main() {
  let number = -2.0;
  println!(
    "square is {}, absolute is {}, clamp is {}, and factorial is {}",
    square(number),
    abs(number),
    clamp(number, 1.0, 2.0),
    factorial(5)
  );
}