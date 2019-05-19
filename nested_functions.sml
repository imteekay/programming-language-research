(* functions inside another function *)

fun count (from : int, to : int) =
  if from = to
  then to::[]
  else from::count(from+1, to)

fun countup_from1(x : int) =
  count(1, x)

(*
  another implementation is to have a let expression
  to define a function inside a function

  count function is private here
*)

fun countup_from1_better(x : int) =
  let
    fun count (from : int) =
      if from = x
      then to::[]
      else from::count(from+1)
  in
    count(1)
  end

(* unlikely to be useful elsewhere *)
