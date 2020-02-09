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
