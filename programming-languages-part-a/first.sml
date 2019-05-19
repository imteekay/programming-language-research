(*
  Mindset: treat ML (meta language) as a new thing
  Using the REPL to run programs: `sml` + `use first.sml

  - Language:
      - Syntax: it is how you write something. Examples:
        - keyword `val` defines variable
        - punctuation `;` defines end of statement
        - `(* *)` defines a form of comment
      - Semantics: it is what something means
        - type-checking to extend static environment
        - evaluation expression to extend dynamic environment
      - Expressions (rules of expressions):
        - All expressions have:
          - Syntax
          - Type checking rules: produce a type or fails
          - Evaluation rules: produce a value after type check
        - Ex: boolean, sum, division, conditional

  Example of Adition expression: e1 + e2
    - syntax: receives two expressions and a + symbol between those expressions
    - type checking: if e1 and e2 are int, then e1 + e2 has type int
    - evaluation: e1 evaluates to v1 and e2 evaluates to v2, then e1 + e2 evaluates to the sum of v1 and v2
*)

(* Our first program starts here. *)

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
