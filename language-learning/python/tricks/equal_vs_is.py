a = [1, 2, 3]
b = a

print(a == b)
# => True

print(a is b)
# => True

c = list(a)

# == evaluates to true if the objects referred by the variables are equal
print(a == c)
# => True

# is evaluates to true if both variables point to the same object
print(a is c)
# => false
