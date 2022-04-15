double x = x + x
quadruple x = double (double x)

-- quadruple 10
-- => 40

-- take (quadruple 2) [1, 2, 3, 4, 5]
-- => [1, 2, 3, 4]

factorial n = product [1..n]
average ns = sum ns `div` length ns

-- factorial 10
-- => 3628800

-- average [1, 2, 3, 4, 5]
-- => 3
