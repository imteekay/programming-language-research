-- not :: Bool -> Bool
-- isDigit :: Char -> Bool

-- currying: functions with multiple arguments are also possible
-- by returning functions as results
add :: Int -> Int -> Int
add x y =  x + y

mult :: Int -> Int -> Int -> Int
mult x y z = x*y*z
