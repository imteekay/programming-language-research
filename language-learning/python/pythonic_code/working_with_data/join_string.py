book_list = ['CTCI', 'Effective Engineer', 'Design Patterns']

# harmful
books_string = ''
for book in book_list:
    books_string += book

print(books_string)

# pythonic
books_string = ''.join(book_list)
print(books_string)
