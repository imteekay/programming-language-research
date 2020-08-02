def print_all(a, b):
    print("a: %i" %(a))
    print("b: %i" %(b))
    print()

a = 1
b = 2

print_all(a, b)

c = a
a = b
b = c

print_all(a, b)

a, b = b, a

print_all(a, b)
