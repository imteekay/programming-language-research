operating_systems = ['macos', 'windows', 'linux']

# harmful
index = 0
for os in operating_systems:
    print(index, os)
    index += 1

# pythonic
for index, os in enumerate(operating_systems):
    print(index, os)
