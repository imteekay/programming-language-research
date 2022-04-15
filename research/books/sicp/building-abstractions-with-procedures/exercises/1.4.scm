(define (a-plus-abs-b a b)
  ((if (> b 0) + -) a b))

; if `b` is positive, we sum `a` and `b`.
; if `b` is 0 or negative, we substract `b` from `a`
; It's an interesting concept to evaluate
; an if statement and return a function
; and use this result to evaluate another expression
