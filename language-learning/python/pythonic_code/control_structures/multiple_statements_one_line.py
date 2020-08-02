def print_hello():
    print('hello')

def print_hi():
    print('hi')

# harmful
if True: print_hello(); print_hi();

# pythonic
if True:
    print_hello()
    print_hi()
