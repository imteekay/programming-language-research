import random

# random floats between 0.0 and 1.0
print(random.random())

# random ints
print(random.randint(1, 10))

# random without right-hand side
print(random.randrange(1, 10))

# random floats with specific range
print(random.uniform(1, 10))

# pick random element from a list
print(random.choice(['oi', 'hello', 'こんにちは']))

# shuffling a list
greeting = ['oi', 'hello', 'こんにちは']
print(greeting)
random.shuffle(greeting)
print(greeting)

# picking a random sample
print(random.sample(['oi', 'hello', 'こんにちは'], 1))
