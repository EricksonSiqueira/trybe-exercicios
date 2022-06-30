phantehon_of_arton = [
    {'name': 'Wiker', 'domain': 'Magic'},
    {'name': 'Kaler', 'domain': 'Luck'},
    {'name': 'Dalinoir', 'domain': 'Sword master'},
]

from random import randint

dice_roll = randint(1, 20)

if dice_roll == 1:
  print("Dam... that's bad")
elif 2 <= dice_roll <= 15:
  print("Ahadarak, why do you toment me?!")
elif 16 <= dice_roll <= 19:
  print("Nimb, thanks for the luck!")
else:
  print("Now nobody can stop me!!!")
