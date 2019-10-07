(define (is-greater-than n1 n2)
  (> n1 n2))

(define (sum-of-square n1 n2)
  (+ (* n1 n1) (* n2 n2)))

(define (is-first-greater n1 n2 n3)
  (and (is-greater-than n1 n2)
       (is-greater-than n1 n3)
       (is-greater-than n2 n3)))

(define (is-first-two-greater-than-the-third n1 n2 n3)
  (or
    (is-first-greater n1 n2 n3)
    (is-first-greater n2 n1 n3)))

(define (square-of-larger-numbers a b c)
  (cond
    ((is-first-two-greater-than-the-third a b c) (sum-of-square a b))
    ((is-first-two-greater-than-the-third b c a) (sum-of-square b c))
    (else (sum-of-square a c))))

(square-of-larger-numbers 1 2 3)
