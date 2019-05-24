(*
  binding local variables inside a function
  let expressions give an idea of a local scope where the binding is in the environment
*)

fun silly1 (z : int) =
  let
    val x = if z > 0 then z else 34
    val y = x + z + 9
  in
    if x > y then x * 2 else y * y
  end

(*
  The first let expression binds the x
  The second assign the x with 2 and result in x + 2
  The third uses the x to assign the y --> the x used is the x defined in the first let expression. It has no access to the second let
*)
fun silly2 () =
  let
    val x = 1
  in
    (let val x = 2 in x + 1 end) + (let val y = x + 2 in y + 1 end)
  end
