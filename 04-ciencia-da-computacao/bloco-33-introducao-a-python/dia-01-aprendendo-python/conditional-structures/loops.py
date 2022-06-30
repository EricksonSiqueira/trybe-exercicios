phantehon_of_arton = [
    {'name': 'Wiker', 'domain': 'Magic'},
    {'name': 'Kaler', 'domain': 'Luck'},
    {'name': 'Dalinoir', 'domain': 'Sword master'},
]

domains = []
for god in phantehon_of_arton:
    domains.append(god['domain'])

# print(domains)

domains2 = [
    god
    for god in phantehon_of_arton
    if god['domain'] != 'Luck'
]

# print(domains2)

domains3 = [
    god['domain']
    for god in domains2
    if god != 'Luck'
]

# print(domains3)

teste = [x for x in range(1, 16)]
teste.extend([y for y in range(len(teste) + 1, len(teste) + 16)])
teste.extend([y for y in range(len(teste) + 1, len(teste) + 16)])
print(teste)


squares = [x*x for x in range(11)]
# print(squares)
