(*
  &&: andalso
  ||: oralso
*)

val z = 3;
val x = if (z = 2) andalso (4 = 5 < 10)
        then 5
        else 0

true andalso false; (* false *)
true andalso true; (* true *)
not true; (* false *)
not false; (* true *)
