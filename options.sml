(*
  Options: it is a type

  NONE: option with zero items
  SOME:
*)

fun old_max (xs : int list) =
  if null xs
  then 0
  else if null (tl xs)
  then hd xs
  else
    let val tl_ans = good_max(tl xs)
    in
      if hd xs > tl_ans
      then hd xs
      else tl_ans
    end

fun max1 (xs : int list) =
  if null xs
  then NONE
  else
    let val tl_ans = max1(tl xs)
    in if isSome tl_ans andalso valOf tl_ans > hd xs
       then tl_ans
       else SOME (hd xs)
    end
