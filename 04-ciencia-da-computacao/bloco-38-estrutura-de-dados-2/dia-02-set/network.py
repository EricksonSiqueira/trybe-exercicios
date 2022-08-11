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

def network_set(friends):
  unique_friends = {}

  for friend1, friend2 in friends:

    if friend1 not in unique_friends:
      unique_friends[friend1] = set()

    if friend2 not in unique_friends:
      unique_friends[friend2] = set()
    
    unique_friends[friend1].add(friend2)
    unique_friends[friend2].add(friend1)

  return unique_friends


print(network_set(friends))
