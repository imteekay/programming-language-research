import operator

d = { 'one': 1, 'three': 3, 'two': 2, 'six': 6, 'zero': 0 }

print(sorted(d.items(), key=operator.itemgetter(1)))
