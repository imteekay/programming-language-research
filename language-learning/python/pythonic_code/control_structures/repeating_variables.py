name = 'TK'

# harmful
def name_ok():
	if name == 'Kazumi' or name = 'Kaio' or name = 'Petr':
		return True
	else:
		return False

# pythonic
def name_ok():
	if name in ('Kazumi', 'Kaio', 'Petr'):
		return True
	else:
		return False

# refactoring
def name_ok():
	return name in ('Kazumi', 'Kaio', 'Petr')

