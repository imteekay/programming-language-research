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

</samp>