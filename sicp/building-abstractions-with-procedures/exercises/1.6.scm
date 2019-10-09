(define (square x) (* x x))

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

(define (sqrt-iter guess x)
  (if (good-enough? guess x)
    guess
    (sqrt-iter (improve guess x) x)))

(define (new-if predicate then-clause else-clause)
  (cond (predicate then-clause)
        (else else-clause)))

(define (sqrt-iter-with-new-if guess x)
  (new-if (good-enough? guess x)
    guess
    (sqrt-iter (improve guess x) x)))

(define (sqrt x)
  (sqrt-iter 1.0 x))

(sqrt 9) ; 3.00009155413138
(sqrt (+ 100 37)) ; 11.704699917758145
(sqrt (+ (sqrt 2) (sqrt 3))) ; 1.7739279023207892
(square (sqrt 1000)) ; 1000.000369924366

(define (sqrt-new-if x)
  (sqrt-iter-with-new-if 1.0 x))

(sqrt-new-if 9) ; 3.00009155413138
(sqrt-new-if (+ 100 37)) ; 11.704699917758145
(sqrt-new-if (+ (sqrt-new-if 2) (sqrt-new-if 3))) ; 1.7739279023207892
(square (sqrt-new-if 1000)) ; 1000.000369924366
