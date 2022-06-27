phantehon_of_arton = [
    {'name': 'Wiker', 'domain': 'Magic'},
    {'name': 'Kaler', 'domain': 'Luck'},
    {'name': 'Dalinoir', 'domain': 'Sword master'},
]

domains = []
for god in phantehon_of_arton:
    domains.append(god['domain'])

print(domains)

domains2 = [
    god
    for god in phantehon_of_arton
    if god['domain'] != 'Luck'
]

print(domains2)

domains3 = [
    god['domain']
    for god in domains2
    if god != 'Luck'
]

print(domains3)
