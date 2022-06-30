file = open("grades.txt", mode='r')

for student in file:
  name, grade = student.split(' ')
  if(int(grade) >= 6):
    print(f"{name} aprovado")
  else:
    print(f"{name} reprovado")

file.close()
