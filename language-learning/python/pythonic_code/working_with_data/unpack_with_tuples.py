def print_books(ctci, effective_engineer, design_patterns):
    print(ctci)
    print(effective_engineer)
    print(design_patterns)


book_list = ['CTCI', 'Effective Engineer', 'Design Patterns']

# harmful
ctci = book_list[0]
effective_engineer = book_list[1]
design_patterns = book_list[2]
print_books(ctci, effective_engineer, design_patterns)

# pythonic
ctci, effective_engineer, design_patterns = book_list
print_books(ctci, effective_engineer, design_patterns)
