## Learn you a Haskell

Haskell:
- is a purely functional programming language
- is lazy
- is statically typed
- is elegant and concise
- was made by some really smart guys (with PhDs)

`ghci` on terminal:

```haskell
2 + 15
49 * 100
1892 - 1472
5 / 2
True && False
True || False
not False
```

The `+` operator expects to have a number in the lesft and the right side.

```haskell
1 + 2
1 + "2"
-- error:
--   • No instance for (Num [Char]) arising from a use of ‘+’
--   • In the expression: 1 + "2"
--     In an equation for ‘it’: it = 1 + "2"
```

Using some functions (without parentheses):

```haskell
min 9 10
max 9 10
succ 9
```

Parentheses don't denote function application. Spaces are used for function application:

```haskell
min 9 10 -- apply min to 9 and 10
min 10 min 11 12 -- this is why the compiler throw an error here. we apply min to 10, min, 11, and 12
min 10 (min 11 12) -- the right way: 10
```
