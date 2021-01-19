-- A type is a name for a collection of related values.
-- Bool is a type for the values False and True

-- The notation of a type is: e :: t, where e is the expression and t is the type
"string" :: String

-- list of type: [Bool], [Char]
[False, True, False] :: [Bool]
['a', 'b', 'c'] :: [Char]

-- Tuple is a sequence of values of different types
(False, True) :: (Bool, Bool)
(False, 'a') :: (Bool, Char)
