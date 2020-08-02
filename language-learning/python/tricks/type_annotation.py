def add_this(a, b):
    return a + b

print(add_this('hello ', 'world'))
print(add_this(1, 2))

def typed_add_this(a: int, b: int) -> int:
    return a + b

print(typed_add_this('hello ', 'world'))
print(typed_add_this(1, 2))
