; factorial function
; n! = n · (n − 1) · (n − 2) · · · 3 · 2 · 1.

; Recursive approach
(define (factorial n)
  (if (= n 1)
      1
      (factorial (- n 1))))

; Linear iterative
(define (factorial n)
  (fact-iter 1 1 n))

(define (fact-iter product counter max-count)
  (if (> counter max-count)
      product
      (fact-iter (* product counter)
                 (+ counter 1)
                 max-count)))

; it is a terrible way to compute Fibonacci numbers
; because it does so much redundant computation.
(define (fib n)
  (cond ((= n 0) 0)
        ((= n 1) 1)
        (else (+ (fib (- n 1))
                 (fib (- n 2))))))

(define (fib n)
  (fib-ite 0 1 n))

(define (fib-iter a b count)
  (if (= count 0)
    a
    (fib-iter b (+ a b) (- count 1)))
