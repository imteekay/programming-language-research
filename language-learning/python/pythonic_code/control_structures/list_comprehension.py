from_zero_to_hundred = range(0, 101)
print(from_zero_to_hundred)

# harmful
even_numbers = []
for number in from_zero_to_hundred:
    if number % 2 == 0:
        even_numbers.append(number)

print(even_numbers)

# pythonic
even_numbers = [number for number in from_zero_to_hundred if number % 2 == 0]
print(even_numbers)
