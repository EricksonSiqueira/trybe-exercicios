def imc (peso, altura):
    return round(peso / (altura / 100) ** 2, 2)

print(imc(100, 185));
print(imc(altura = 185, peso = 100))
