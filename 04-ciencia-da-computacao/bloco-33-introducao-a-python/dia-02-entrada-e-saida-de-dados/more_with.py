import json

with open('pokemons.json') as pokemons_file:
  print(json.load(pokemons_file)["results"][0])