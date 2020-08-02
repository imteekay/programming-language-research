integers = [1, 2, 3, 4, 5]

# using lambda
print(list(map(lambda x: x + 1, integers)))


# using function
def increase_by_one(n):
    return n + 1

print(list(map(increase_by_one, integers)))
