admin_user = {'Erickson'}
data_squad = {'Erickson', 'Claudio', 'Lucas', 'Pedro'}
all_users = {'Cleiton', 'Sheila', 'Juliana', 'Adilson', 'Claudio', 'Erickson', 'Leticia', 'Guilherme'}

print(admin_user.intersection(data_squad))

standard_acess_user = all_users.difference(admin_user)
print(standard_acess_user)

admin_user = admin_user.union(all_users)
print(admin_user)

set_test = set()
set_test.add('Ericksonzada')
print(set_test)

permissions = frozenset(['member', 'group'])
print(permissions)