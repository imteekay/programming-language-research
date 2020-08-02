help(sorted) # it will show the function documentation

# see that sorted has 4 arguments: iterable, cmp=None, key=None, reverse=False

full = [11.25, 18.0, 20.0, 10.75, 9.50]

# we want to pass only "reverse" parameter
full_sorted = sorted(full, reverse = True)

print(full_sorted)
