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

## Source code to data

Converting code to a syntax tree

```typescript
function welcome(str: string) {
  console.log(str);
}

const msg: string = 'Hello, World!';

welcome(msg); // Hello, World!
```

It creates the syntax tree using a [scanner](https://github.com/microsoft/TypeScript/blob/main/src/compiler/scanner.ts) and and a [parser](https://github.com/microsoft/TypeScript/blob/main/src/compiler/parser.ts).

### Scanner

The `scanner` receives the text (source code) and outputs a sequence of tokens.

```typescript
const msg: string = 'Hello, World';
```

It transforms this source code into tokens like this:

`ConstKeyword` `WhitespaceTrivia` `Identifier` `ColonToken` `WhitespaceTrivia` `StringKeyword` `WhitespaceTrivia` `EqualsToken` `WhitespaceTrivia` ...

The `scanner` also has diagnostics, an expressive way to show users their JavaScript/TypeScript code is invalid, has errors, or is missing any thing.

No closing quote to the open quote:

```typescript
const noEnd = '; // => Unterminated string literal.
```

An invalid character:

```typescript
const 🇯🇵 = 'Japan Flag'; // Invalid character
```

Numeric separators can't be consecutive:

```typescript
const num = 1__0; // Multiple consecutive numeric separators are not permitted.
```

And so on.
