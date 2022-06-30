characters_file = open("my-favorites-characters.txt", mode='w')

characters_file.write('John snow\nKaladin\nRengar')

print('Ed', file=characters_file)

more_characters = ['Sonic\n', 'Asta\n']

characters_file.writelines(more_characters)

characters_file.close()

#leitura

file = open("my-favorites-characters.txt", mode='r')
content = file.read()
print(content)
file.close()
