(* This is a comment. This is our first program. *)

(* `val` is the statement to define a variable *)

(* dynamic environment: x --> 34 *)
(* static environment: x : int *)
val x = 34;

(* dynamic environment: y --> 17 *)
(* static environment: y : int *)
val y = 17;

(* dynamic environment: x --> 34, y --> 17, z --> 70 *)
(* static environment: x : int, y : int, z : int *)
val z = (x + y) + (y + 2);

(* dynamic environment: x --> 34, y --> 17, z --> 70, q --> 71 *)
(* static environment: x : int, y : int, z : int, q : int *)
val q = z + 1;

(* dynamic environment: x --> 34, y --> 17, z --> 70, q --> 71, abs_of_z --> 70 *)
(* static environment: abs_of_z : int *)
val abs_of_z = if z < 0 then 0 - 2 else z;

(* type `sml` and use this program in the REPL: `use first.sml` *)
