dict_1 = dict()
dict_2 = {}

dict_1['string como chave'] = 'qualquer coisa pode ser valor'
dict_1[1] = 'inteiros podem ser chave'
dict_1[(1, 2)] = 'tuplas podem ser chave'

dict_2[['lista não']] = 1
dict_2[{'conjuntos também não'}] = 2


print(dict_1.get(1))
print(dict_1.keys(1)) # somente as chaves
print(dict_1.values()) # somente os valores
print(dict_1.items()) # chaves e valores
