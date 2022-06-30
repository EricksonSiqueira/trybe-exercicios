try:
  arquivo = open("arquivo.txt", "r")
except OSError:
  print("my-favorites-characters.txt")
else:
  print("arquivo manipulado e fechado com sucesso")
finally:
  print("Tentativa de abrir o arquivo")