(* tuples are just syntatic sugar for records with fields named 1, 2, ... n *)

val a_pair = (3+1, 4+2);
(* a_pair = (4, 6) : int * int *)

val a_record = {first=4, second=6};
(* a_record = {first=4, second=6} : {first:int * second:int} *)

val another_pair = {2=5, 1=6};
(* another_pair = (5,6) : int * int *)

val y = {3="hi", 2=true, 1=2+3};
(* y = ("hi", true, 5) : string * bool * int *)
