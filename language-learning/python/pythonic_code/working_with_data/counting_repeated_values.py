fruits = [
    'banana',
    'apple',
    'mango',
    'mango',
    'banana',
    'pineapple'
]

# iterating
fruits_counter = {}

for fruit in fruits:
    if fruit in fruits_counter:
        fruits_counter[fruit] += 1
    else:
        fruits_counter[fruit] = 1

print(fruits_counter)

# using Counter from collections
from collections import Counter
print(Counter(fruits))
