d = { 'a': 1, 'b': 2, 'c': 3 }

print(d)
# {'a': 1, 'b': 2, 'c': 3}

import json
print(json.dumps(d, indent=4, sort_keys=True))
# {
#     "a": 1,
#     "b": 2,
#     "c": 3
# }
