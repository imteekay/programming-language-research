vals = []

for x in range(10):
    if x % 2 != 0:
        vals.append(x * x)

for val in vals:
    print(val)

print('--------------------')

# list comprehension
vals = [x * x for x in range(10) if x % 2 != 0]

for val in vals:
    print(val)

print('--------------------')

# list comprehension with else

objs = ['hi', 'hello', 'mom', None, 'dad', 'sad']
vals = []

for obj in objs:
    if obj is not None:
        vals.append(obj)
    else:
        vals.append('')

for val in vals:
    print(val)

print('--------------------')

vals = [obj if obj is not None else '' for obj in objs]

for val in vals:
    print(val)
