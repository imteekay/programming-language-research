first_variable = 1
second_variable = 2

# harmful
useless_temporary_variable = first_variable
first_variable = second_variable
second_variable = useless_temporary_variable

print(first_variable)
print(second_variable)

# ------------------------------------------

first_variable = 1
second_variable = 2

# pythonic
(first_variable, second_variable) = (second_variable, first_variable)

print(first_variable)
print(second_variable)
