# PLR & Compiler Learning Path

## Fundamental Knowledge for Type Systems

- Type Systems: Study different types of type systems, such as static typing, dynamic typing, strong typing, and weak typing. Learn about the benefits and trade-offs of each type system and understand how they impact type checking.
- Type Inference: Type inference is the process by which the compiler automatically deduces the types of expressions and variables in the absence of explicit type annotations. Understand how type inference algorithms work and how they can be used to infer types in programming languages.
- Type Rules and Constraints: Learn about the rules and constraints imposed by a programming language's type system. These rules specify how different types can be used together in expressions and assignments. Study concepts like subtyping, type compatibility, and type coercion.
- Scoping and Symbol Tables: Understand how scoping works in a programming language and how the compiler maintains symbol tables to track variables, functions, and their associated types. This knowledge is essential for resolving names and performing type lookups during type checking.
- Type Compatibility and Coercion: Study how type compatibility and coercion are handled in the programming language. Learn about implicit type conversions, casting, and how the compiler enforces type compatibility between different parts of the program.
- Error Reporting and Error Recovery: Gain an understanding of how compilers handle type errors. Learn about techniques for detecting type errors, reporting meaningful error messages, and providing suggestions for fixing them. Explore how compilers recover from errors and continue type checking to catch subsequent issues.
- Polymorphism and Generics: If the programming language supports polymorphism or generics, delve into these concepts. Understand how the compiler handles generic type parameters, type constraints, and type instantiation during type checking.
- Compiler Design Patterns: Familiarize yourself with common design patterns used in compiler implementations, such as the visitor pattern, abstract syntax tree (AST) traversal, and symbol table management. These patterns are often employed in type checking routines.
- Practice and Hands-on Experience: Apply your knowledge by working on projects that involve type checking. Implement simple type checkers for a toy language or contribute to open-source projects with type checking functionality.

## Fundamental Algorithms & Data Structures for compilers

### Parsing Algorithms

- LL(k) Parsing
- LR(k) Parsing (LR(0), SLR(1), LALR(1), LR(1))

### Abstract Syntax Tree (AST) Traversal:

- Depth-First Search (DFS)
- Breadth-First Search (BFS)
- Visitor Pattern

### Symbol Table Management

- Hash tables
- Binary search trees (BST)
- Balanced search trees (e.g. AVL trees, Red-Black trees)

### Type Checking Algorithms

- Constraint-based type inference algorithms
- Unification algorithms (e.g. Robinson's unification algorithm)

### Control Flow Analysis

- Control flow graph (CFG)
- Dominator analysis
- Data flow analysis (e.g. reaching definitions, liveness analysis)

### Intermediate Representation (IR)

- Static Single Assignment (SSA) form
- Three-address code
- Directed Acyclic Graph (DAG)

### Code Optimization

- Constant propagation
- Common subexpression elimination
- Dead code elimination
- Loop optimization techniques (e.g. loop unrolling, loop fusion)

### Code Generation

- Register allocation techniques (e.g. graph coloring, linear scan)
- Instruction selection and scheduling
- Stack frame layout

### Lexical Analysis

- Regular expressions
- Finite Automata

### String Matching

- Knuth-Morris-Pratt (KMP) algorithm
- Boyer-Moore algorithm

### Graph Algorithms

- Topological sorting
- Graph coloring
