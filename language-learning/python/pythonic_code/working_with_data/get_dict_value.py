people = {'tk': 25, 'kazumi': 29, 'kaio': 10}
default_age = 20

# harmful
if 'tk' in people:
    age = people['tk']
else:
    age = default_age

print(age)

# pythonic
age = people.get('tk', default_age)
print(age)
