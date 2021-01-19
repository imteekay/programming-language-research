-- a function that its type contains one or more type variables
length :: [a] -> Int
length [False, True] -- a = Bool, and result is Int: 2
length [1,2,3,4] -- a = Int, and result is Int: 4

-- Some standard prelude polymorphic functions
fst :: (a,b) -> a
head :: [a] -> a
take :: Int -> [a] -> [a]
zip :: [a] -> [b] -> [(a,b)]
id :: a -> a