# UFMG Compilers Course

## Introduction to Static Analysis and Code Optimization

Compilers Engineers' goal is to bridge the gap between people and machines, programming languages and hardware, and make engineers more productive.

### Goals

#### Code optimization. Measuring performance:

- time, space, energy consumption
- copy elimination, constant propagation, lazy code motion, register allocation, loop unrolling, value numbering, strength reduction

#### Bug finding

- null pointer dereference, array out of bounds access, invalid class cast, tainted flow vulnerabilities, integer overflows, information leaks

## An overview of the contents of the course

Compilers are backed up by a lot of computer science theories: `type systems`, `parsing theory`, `graph theory`, `algebra`, `algorithms`, `fixed-point computing`, etc

- `Algorithms`: graphs, union-find, dynamic programming
- `Artificial Intelligence`: greedy algorithm, machine learning
- `Automata Theory`: DFAs for scanning, parser generators, context free grammars
- `Algebra`: lattices, fixed point theory, galois connections, type systems
- `Architecture`: pipeline management, memory hierarchy, instruction sets
- `Combinatorial Optimization`: operations research, load balancing, packing

### Understanding programs

`Static Analysis`: discover information about programs without running it

- `Dataflow Analysis`: propagate information based on the dependencies between program elements, which are given by the syntax of the program
- `Constraint-based Analysis`: derive constraints from the program. Relations between these constraints are not determined explicitly by the program syntax
- `Type analysis`: propagate information as type annotations. This information lets us prove properties about the program, such as progress and preservation

`Dynamic Analysis`: run the program and collect information about the events that took place at runtime

- `Profiling`: run the program and log the events that happened at runtime
- `Test generation`: generate tests that cover most of the program code or that produce some event
- `Emulation`: run the program in a virtual machine, that takes care of collecting and analyzing data
- `Instrumentation`: augment the program with a meta-program, that monitors its behavior

### Compiler optimization

Use many different algorithms to optimize the compiler

- `Graphs`: control flow graphs, constraints graphs, dependence graphs, strongly connected components, graph coloring
- Lattices and the Fixed-Point Theory
- Many different types of Induction: structural induction (proofs are based on induction)
- Dynamic programming techniques
- Type Theory
- Integer Linear Programming

### Programs representation

- Abstract Syntax Trees
- Control Flow Graphs
- Program Dependence Graphs
- Constraint Systems

## Program Representation: Control Flow Graphs

The frontend uses a AST (Abstract Syntax Tree) to represent the source code. The middle-end uses a CFG (Control Flow Graphs) in the compiler optimization.

Control Flow Graphs are directed graphs

- Nodes or vertices are known as _basic blocks_
- Edges represent the program execution flow from node X to node Y

A basic block is a sequence of consecutive instructions.

Leaders: the first instruction of a basic block.

- The first instruction in the intermediate code is a leader
- Any instruction that's a target of a conditional or unconditional jump is a leader
- Any instruction that immediately follows a conditional or unconditional jump is a leader

For each leader, its basic block consists of the leader itself, plus all the instructions until the next leader.

Example: turning source code into a control flow graph

```c
int fact(int n) {
	int ans = 1;
	while (n > 1) {
		ans *= n;
		n--;
	}
	return ans;
}
```

How each basic block is structured:

```tsx
// basic block 1
entry:
	int n;
	int ans = 1;
	while condition

// basic block 2
while condition:
	n > 1
	// Posibilities
	// - True
	// - False

// basic block 3
while body:
	ans *= n;
	n--;

// basic block 4
while end:
	return ans;
```
