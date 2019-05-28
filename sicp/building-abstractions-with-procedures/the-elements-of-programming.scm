;; # The Elements of Programming

;; Every powerful language has three mechanisms for accomplishing this:

;; - primitive expressions, which represent the simplest entities the language is concerned with,
;; - means of combination, by which compound elements are built from simpler ones, and
;; - means of abstraction, by which compound elements can be named and manipulated as units.

;; In programming we have two kinds of elements:

;; - procedures: descriptions of the rules for manipulating the data
;; - data: "stuff" that we want to manipulate

;; Expressions and the response from the interpreter
(+ 137 349) ;; 486
(- 1000 334) ;; 666
(* 5 99) ;; 495
(/ 10 5) ;; 2
(+ 2.7 10) ;; 12.7

;; One advantage for prefix notation: the procedure can take an arbitrary number of arguments
(+ 21 35 12 7) ;; 75
(* 25 4 12) ;; 1200

;; The second advantage: allow combination to be nested
(+ (* 3 5) (- 10 6)) ;; 19
(+ (* 3 (+ (* 2 4) (+ 3 5))) (+ (- 10 7) 6)) ;; 57

;; Naming things with define:
(define size 2)
size ;; 2
(* 5 size) ;; 10

(define pi 3.14159)
(define radius 10)
(* pi (* radius radius)) ;; 314.159

(define circumference (* 2 pi radius))
circumference ;; 62.8318

;; associating values with sym- bols and later retrieving them means that the interpreter
;; must maintain some sort of memory that keeps track of the name-object pairs.
;; This memory is called the environment

;; Evaluating combinations
;; 1. Evaluate the subexpressions of the combination.
;; 2. Apply the procedure that is the value of the leftmost subexpression (the operator)
;;    to the arguments that are the values of the other subexpressions (the operands).
;; Example: The subexpressions evaluted first

(* (+ 2 (* 4 6)) 5) ;; (* 4 6) evaluates to 24
(* (+ 2 24) 5) ;; (+ 2 24) evaluates to 26
(* 26 5) ;; 130
