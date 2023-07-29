# Variable Declaration

case SyntaxKind.VariableDeclaration:
return checkVariableDeclaration(node as VariableDeclaration);

- checkVariableDeclaration
- checkVariableLikeDeclaration
- const symbol = getSymbolOfDeclaration(node);

Diagnostics.Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2

errorNextVariableOrPropertyDeclarationMustHaveSameType

getTypeOfVariableOrParameterOrProperty
getSymbolLinks // get links type: get it from the cache or generate a new type

---

binder: handling symbols

- declareSymbol
-
