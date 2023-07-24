# What's Gradual Typing

[Source](https://wphomes.soic.indiana.edu/jsiek/what-is-gradual-typing)

- With a gradual type system, the programmer can choose between static and dynamic typing without having to switch to a different language and without having to deal with the pain of language interoperability. Hopefully this will increase programmer productivity.
- Dynamic Type Checking
  - A type error is the application of an operation to a value of the wrong type.
  - e.g. applying concatenation to an integer would be a type error in a language where concatenation is an operation only on strings
  - e.g. invoking a method on an object that doesn’t implement the method
  - In a dynamically typed language, type checking is performed during program execution, immediately before the application of each operation, to make sure that the operand type is suitable for the operation
