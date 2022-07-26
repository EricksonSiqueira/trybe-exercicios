def bubble_sort(numbers):
  n = len(numbers)

  for ordered_elements in range(n - 1):
    for item in range(0, n - 1 - ordered_elements):
      if numbers[item] > numbers[item + 1]:
        numbers[item], numbers[item + 1] = numbers[item + 1], numbers[item]


  return numbers


numbers = [5, 2 ,6 ,7, 9 ,8]
print(bubble_sort(numbers))