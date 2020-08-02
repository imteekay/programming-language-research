x = [True, True, False]

if any(x):
    print("At least one True")

if all(x):
    print("No one False")

if any(x) and not all(x):
    print("At least one True and one False")
