<samp>

# Reconstructing TypeScript

`Synthesizing types`: computing types from expressions going bottom-up from the AST leaves to the tree root.

The AST is a tree where

- each expression is a node in the tree
- each with its subexpressions as children
- the leaves are atomic expressions like literal values.

With that in mind, we can compute a new type based on the expressions

- for an atomic expression, return the corresponding type: "foo" has type string, true has type boolean, and so on; and
- for a compound expression, find the types of its subexpressions, then combine them according to the top-level operation of the expression.

```ts
type A = { x: 7; y: 9 };
```

- `x` is `number`
- `y` is `number`

So type `A` is `{ x: number, y: number }`.

`Subtyping`: a type A is a subtype of a type B when all the operations supported on B are also supported on A.

- `reflexive`: A is a subtype of A, for any type A
- `transitive`: if A is a subtype of B and B is a subtype of C then A is a subtype of C, for any types A, B, and C.

```ts
type A = { x: number; y: number };
```

Objects like this are compatible:

```ts
{ x: number, y: number }
{ x: number, y: number, z: number }
{ x: number, y: number, foo: string }
```

Because they support the same operations (`x` and `y` as `number`).

Objects like this aren't:

```ts
{ x: number, y: string }
{ x: number }
boolean
```

## Resources

- [Reconstructing TypeScript, part 0: intro and background](https://jaked.org/blog/2021-09-07-Reconstructing-TypeScript-part-0)

</samp>
