# TypeScript compiler

## Program

The project coordinator:

- `Read the TSConfig`: setup the program, get starting files
- `Pre-process files`: follow imports to discover all possible files
- `Tokenize and Parse`: convert text to a syntax tree
- `Binder`: convert identifiers in syntax tree to symbols
- `Type Check`: use binder and syntax tree to look for issues in code
- `Transform`: changes the syntax tree to match tsconfig options
- `Emit`: prints the syntax tree into .js, .d.ts, and other files

Let's see how tht API looks like:

```typescript
import * as ts from 'typescript';

// code to syntax tree
const program = ts.createProgram(files, opts);

// binding and type checking
const checker = program.getTypeChecker();

// syntax tree to code
program.emit();
```
