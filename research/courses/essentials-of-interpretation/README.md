<samp>

# Essentials of Interpretation

These are notes from the [Essentials of Interpretation](https://dmitrysoshnikov.teachable.com/p/essentials-of-interpretation) course by Dmitry Soshnikov

## Compilers crash course

### Lecture 1: Parsers, ASTs, Interpreters, and Compilers

- Tokenizer (lexical analysis)
  - It builds tokens
  - It doesn't care about invalid syntax
- Parser (syntactic analysis)
  - It produces the AST (nodes, intermediate representations)
  - Can be
    - hand-written parsers: Recursive-descent parsers
    - automatically generated: LL(1)..L(k), PEG, GLR, LR(k)
- What does runtime semantics study?
  - What does it mean to define a variable?
  - What does it mean to define a function?
  - How scope works?
  - How functions are called? What's call stack?
  - How do you pass parameters?
- Interpreters vs Compilers
  - Interpreted languages
    - implement semantics themselves
    - AST-based (recursive) interpreters — it's a tree-based data structure
    - Bytecode-interpreters (VM) — a plain array of code instructions (close to real machines)
  - Compiled languages
    - delegate semantics to a target language
    - Ahead-of-time (AOT) compilers. e.g. C++
    - Just-in-time (JIT) compilers. e.g. JS
    - AST-transformers (transpilers) — high level compilers
- If you have a program and you need to have the output of this program, you need an interpreter
  - Having an interpreter
  - Having a compiler that translates to another program and hopes that it has an interpreter for that program
  - In the very low level, the interpreter exists: the CPU.
    - If you compile the code into machine code (x86/x64), the CPU will be able to execute it

### Lecture 2: AST Interpreters and Virtual Machines

- AST based interpreters
  - Using tree data structures to represent the source code
- Bytecode based interpreters (VMs)
  - it has an extra step called bytecode emitter phase to generate bytecode
  - AST can take more space and slower to traverse
  - it's plain array of bytes
  - types
    - stack-based machines
      - stack for operands and operators
      - the result is on top of the stack
    - regiter-based machines
      - set of virtual registers
      - register is a data storage
      - the result is in an accumulator register
      - mapped to real via register

## Lecture 3: Compilers — AOT, JIT, Transpiler

- AOT Compiler — Ahead of time translation
  - it's done before execution
  - code generator
    - produces intermediate representation
    - produces native code (x86 / x64)
- JIT Compiler — translation at runtime
  - call code generator in runtime, generate native code, and the CPU can interpret that
  - next time the code is called, it gets from the cache so it doesn't need to go through all the steps again
- AST Transformer — high level translation, also called transpiler
  - transform an AST into another AST
  - it can be the same language (e.g. JS to older versions of JS) or completely different language (e.g. Python to JavaScript)

## Lecture 4: Eva Programming Language

Representing an AST. For this source code

```
total = current + 150;
```

We have this AST

```
{
  type: "Assignment",
  left: {
    type: "Identifier",
    value: "total"
  },
  right: {
    type: "Addition",
    left: {
      type: "Identifier",
      value: "current"
    },
    right: {
      type: "Literal",
      value: 150
    }
  }
}
```

But it can be simplified

- `type`: 0
- `left`: 1
- `right`: 2

```
{
  0: "Assignment",
  1: {
    0: "Identifier",
    value: "total"
  },
  2: {
    0: "Addition",
    1: {
      0: "Identifier",
      value: "current"
    },
    2: {
      0: "Literal",
      value: 150
    }
  }
}
```

But now that it's using indices, we can transform this from a map to an array

```
[
  "Assignment",
  [
    "Identifier",
    "total"
  ],
  [
    "Addition",
    [
      "Identifier",
      "current"
    ],
    [
      "Literal",
      150
    ]
  ]
]
```

To simplify even more, we can transform the operators into actual symbols

```
[
  "set", // type tag
  "total", // left hand side
  [
    "+", // type tag
    "current", // left hand side
    150 // right hand side
  ] // right hand side
]
```

This representation has a name and it's called "S-expression" or "Symbolic expression"

### The Eva programming language

- Expression format

```
(+ 5 10) // adition -> 15
(set x 15) // assignment
(if (> x 10)
    (print "ok)
    (print "err))
```

- Function declaration

```
(def foo (bar)
  (+ bar 10))
```

All functions in Eva are closures.

- Lambda expression: anynmous function

```
(lambda (x) (* x x) 10) // 10 — IILE - immediately-invoked lambda expression
```

- Design goals
  - simple syntax: S-expression
  - Everything is an expression
    - statement vs expression
      - statement: there's no value produced
      - expression: always produces a value
  - No explicit return, last evaluated expression is the result
  - Support first-class functions: assign to variables, pass as arguments, return as values
  - Static scope: all functions are closures
  - FP, imperative, OOP
  - Namespaces and modules
  - Lambda functions, IILEs

## Lecture 5: Self-evaluating expressions

To define the semantics of the Eva language, we'll be using the BNF (Backus-Naur Form)

</samp>
