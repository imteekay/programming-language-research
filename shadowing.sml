val a = 10
(* a : int
   a -> 10 *)

val b = a * 2
(* b : int
   b -> 20 *)

val a = 5 (* this is not an assignment statement - this creates a second variable a *)
(* a -> 5,
   b -> 20 *)

val c = b
(* a -> 5,
   b -> 20
   c -> 20 *)

val d = a
(* a -> 5,
   d -> 5 *)

val a = a + 1
(* a -> 6 *)

val f = a * 2
(* a -> 6
   f -> 12 *)

(* Another exercise of shadowing *)

val x = 12
(* x -> 12 *)

val n = 2 + x
(* x -> 12
   n -> 14 *)

val x = n − 14
(* x -> 0
   n -> 14 *)

val n = n ∗ x
(* x -> 0
   n -> 0 *)

val b = if n = x then 8 else 5
(* x -> 0
   n -> 0
   b -> 8 *)

val a = if b = 5 then x else b
(* b -> 8
   a -> 8 *)
