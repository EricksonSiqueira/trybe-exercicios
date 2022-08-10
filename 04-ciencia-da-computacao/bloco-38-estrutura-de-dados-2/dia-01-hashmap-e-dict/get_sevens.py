rolls = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1]

def get_sevens(rolls):
  seen_before = {}
  awnser = []

  for roll in rolls:
    if 7 - roll in seen_before:
      awnser.append((7 - roll, roll))
      del seen_before[7 - roll]
    else:
      seen_before[roll] = roll
  
  return awnser


print(get_sevens(rolls))
