(*
  can have any number of elements
  but all list elements have the same type
*)

[]; (* a list *)
[4,3];  (* int list *)
[(1+2),3+4,7]; (* [3,7,7] *)  (* int list *)
[true,true,false];  (* bool list *)

(* binding a list to a variable *)
val l = [1,2,3,4,5];
0::l; (* [0,1,2,3,4,5] *)
9::9::l (* [9,0,1,2,3,4,5] *)

(* Accessing a list *)
null l; (* null function takes a list and returns false if the list is not an empty list or false if it is *)
null []; (* true *)

hd l; (* head of list - 1 *)
tl l; (* tail of list - [2,3,4,5] *)

(* getting the 6 element *)
val x = [5,1,6,8];
tl x; (* [1,6,8] *)
tl tl x; (* [6,8] *)
hd tl tl x; (* 6 *)
