input = ['Duration', 'F0', 'F1', 'F2', 'F3']
# output = {'Duration': 0, 'F0': 1, 'F1': 2, 'F2': 3, 'F3': 4}

output = {f:i for f, i in zip(input, range(len(input)))}
print(output)

output = dict(zip(input, range(len(input))))
print(output)

print(enumerate(input))
print(list(enumerate(input)))
print(dict(enumerate(input)))

output = {f:i for f, i in enumerate(input)}
