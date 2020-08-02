def my_function(a, b, c):
    print(a, b, c)

elements_list = [1, 2, 3]
my_function(*elements_list)

elements_tuple = (1, 2, 3)
my_function(*elements_tuple)

elements_dict = { 'a': 1, 'b': 2, 'c': 3 }
my_function(**elements_dict)
