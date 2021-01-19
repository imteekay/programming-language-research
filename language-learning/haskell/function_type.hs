not :: Bool -> Bool
isDigit :: Char -> Bool

add :: (Int,Int) -> Int
add (x,y) = x+y

zeroto :: Int -> [Int]
zeroto (n) = [0..n]

-- curried functions: a function that takes each argument one by one
add' :: Int -> (Int -> Int)
add' x y = x+y

mult :: Int -> (Int -> (Int -> Int))
mult x y z = x*y*z

-- partially apply functions
-- f a + b -- meaning f(a) + b, rather than f(a + b) -- `f` apply to `a`
-- f a b -- f(a, b)
-- f (g x) -- f(g(x))
-- f x (g y) -- f(x, g(y))
-- f x * g y -- f(x) * g(y)

min 9 10
max 9 10
succ 9

min 9 10 -- apply min to 9 and 10
min 10 min 11 12 -- this is why the compiler throw an error here. we apply min to 10, min, 11, and 12
min 10 (min 11 12) -- the right way: 10
