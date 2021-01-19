-- Overloaded function is a function that its type contains one or more class constraints

-- sum function accepts a list but only a list of the class Num
sum :: Num a -> [a] -> a
sum [1,2,3] -- -> Int
sum [1.1,2.2,3.3] -- -> Float
sum ['a','b','c'] -- Type Error: Char is not a numeric type