friends = [
    ("Dani", "Ali"),
    ("Ali", "Dani"),
    ("Fabi", "Zizu"),
    ("Gabi", "Ito"),
    ("Fabi", "Rafa"),
    ("Ali", "Fabi"),
    ("Rafa", "Lulu"),
    ("Gabi", "Hos"),
    ("Eli", "Hos"),
    ("Hos", "Dani"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
]

def unique_friends(friends):
  unique_friends_variable = set()

  for friend1, friend2 in friends:
    unique_friends_variable.add(friend1)
    unique_friends_variable.add(friend2)

  return len(unique_friends_variable)


print(unique_friends(friends))
