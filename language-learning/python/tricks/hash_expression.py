def print_all(h):
    print(h[True])
    print(h[1])
    print(h[1.0])
    print()

h = { True: 1 }
print_all(h)

h[1] = 2
print_all(h)

h[1.0] = 3
print_all(h)

print(True == 1 == 1.0)
