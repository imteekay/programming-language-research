(*
  Record values have fields holding values
  Record types have fields holding types
*)

(* Building records *)
val x = { bar=(1+2, true andalso true), foo=3+4, baz(false, 9) };

(*
  all values are evaluated. So here we have:
  - bar stores (3, true)
  - foo stores 7
  - baz stores (false, 9)

  And has type:
  - {id : int, name : string}
*)

val my_niece = { name = "Amelia", id = 41123 - 12 };
(* val my_niece = {name = "Amelia", id = 41111} *)

(* Accessing record values *)
#id my_niece; (* val it = 41111 : int *)
