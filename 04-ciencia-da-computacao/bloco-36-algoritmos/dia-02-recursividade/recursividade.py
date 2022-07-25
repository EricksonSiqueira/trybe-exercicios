def countdown(n):
  if n == 0:
    print("FIM")
  else:
    print(n)
    countdown(n - 1)


def countup(start, max):
  if(start > max):
    print("FIM")
  else:
    print(start)
    countup(start + 1, max)

countup(0, 10)
