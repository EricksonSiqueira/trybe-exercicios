import random

random_number = random.randint(1, 10)
guess = ""
chances = 0;

while guess != random_number and chances < 3:
  guess = int(input('Qual o seu palpite? (1 a 10)'))
  chances += 1


if(guess == random_number):
  print("Parabéns, você acertou o número", guess, "!")
else:
  print("Suas chances acabaram, e você não acertou :(\nO número era ", guess)

