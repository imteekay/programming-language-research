(define (p) (p))

(define (test x y)
  (if (= x 0)
      0
      y))

(test 0 (p))

; normal-order evaluation
; (if (= x 0) 0 y)
; (if (= 0 0) 0 y)
; (if true 0 y)
; 0

; applicative-order evaluation
; (if (= x 0) 0 y)
; (if (= 0 0) 0 y)
; (if true 0 p)
; (if true 0 p)
; p recursively call itself without termination
