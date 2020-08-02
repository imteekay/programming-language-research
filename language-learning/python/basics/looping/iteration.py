# List Iteration

bookshelf = [
  "The Effective Engineer",
  "The 4 hours work week",
  "Zero to One",
  "Lean Startup",
  "Hooked"
]

for book in bookshelf:
    print(book)

print('------------')

# Dictionary Iteration

dictionary = { "some_key": "some_value" }
for value in dictionary:
    print("%s" %(value))

dictionary = { "some_key": "some_value" }

for key in dictionary:
    print("%s --> %s" %(key, dictionary[key]))

for key, value in dictionary.iteritems():
    print("%s --> %s" %(key, value))

dictionary_tk = {
  "name": "Leandro",
  "nickname": "Tk",
  "nationality": "Brazilian",
  "age": 24
}

for attribute, value in dictionary_tk.iteritems():
    print("My %s is %s" %(attribute, value))
