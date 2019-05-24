#include<iostream>

int main() {
  // Depending the variable type, the compiler convert to the specific type
  // to perform the required operation (in this case, a simple sum)

  // sum type is integer: the '2' char when converted to ASCII number, it is 050
  // so sum in this case is just 50 + 10 = 60
  char A = '2';
  int sum = A + 10;
  std::cout << "sum = " << sum; // sum = 60

  // sum type is integer: the 'A' char when converted to ASCII number, it is 065
  // so sum in this case is just 65 + 10 = 75
  int sum1 = 'A' + 10;
  std::cout << "\nsum1  = " << sum1; // sum1  = 75

  // sum type is char: the 'A' char plus 10 is 'K'
  char sum2 = 'A' + 10;
  std::cout << "\nsum2 = " << sum2; // sum2 = K

  char B = '2322'; // warning: multi-character character constant
  int sum3 = B + 10;
  std::cout << "\nsum3 = " << sum3; // sum3 = 60

  return 0;
}
