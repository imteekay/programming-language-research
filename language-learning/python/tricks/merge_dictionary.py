x = { 'a': 1, 'b': 2 }
y = { 'b': 3, 'c': 4 }

# Python 3.5+
z = { **x, **y }
print(z)

# Python 2.X
w = dict(x, **y)
print(w)

# iterating
i = x

for key, value in y.items():
    i[key] = value

print(i)
