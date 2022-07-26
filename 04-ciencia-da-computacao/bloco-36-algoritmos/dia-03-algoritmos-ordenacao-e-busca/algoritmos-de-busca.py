def linear_search(numbers, target):
    n = len(numbers)
    for index in range(0, n):
        if numbers[index] == target:
            return index

    return -1


def binary_search(numbers, target):
    start = 0
    end = len(numbers)

    while start <= end:
        mid = (start + end) // 2

        if numbers[mid] == target:
            return mid

        if target < numbers[mid]:
            end = mid - 1

        else:
            start = mid + 1


element = 5
array = [1, 2, 3, 4, 5, 6, 7]
print(binary_search(array, element))
