tk = {
    'first_name': 'Leandro',
    'last_name': 'Kinoshita',
    'nicknames': ['TK', 'Dinho'],
    'age': 24
}

print(tk['first_name'])
print(tk['last_name'])
print(tk['nicknames'])
print(tk['age'])

tk['marriage'] = False
print(tk['marriage'])

del tk['marriage']
print('-----------')
print(tk)

dictionary_tk = {
  "name": "Leandro",
  "nickname": "Tk",
  "nationality": "Brazilian",
  "age": 24
}

print("My name is %s" %(dictionary_tk["name"])) # My name is Leandro
print("But you can call me %s" %(dictionary_tk["nickname"])) # But you can call me Tk
print("And by the way I'm %i and %s" %(dictionary_tk["age"], dictionary_tk["nationality"])) # And by the way I'm Brazilian

print(dictionary_tk)
