# clear the list
elements = [1, 2, 3, 4, 5]
del elements[:]
print(elements)

# replace all elements
elements = [1, 2, 3, 4, 5]
elements[:] = [5, 4, 3, 2, 1]
print(elements)

# copy the list
elements = [1, 2, 3, 4, 5]
copy_of_elements = elements[:]
print(copy_of_elements is elements)
