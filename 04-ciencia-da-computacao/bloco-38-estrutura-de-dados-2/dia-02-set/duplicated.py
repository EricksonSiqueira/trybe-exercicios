def contains_duplicate(nums):
  if len(nums) != len(set(nums)):
    return True
  return False


teste1 = [1, 2, 3, 4]
teste2 = []
teste3 = [1, 2, 3, 4, 4]
teste4 = [1, 2, 3, 4, 3 , 3 , 3, 4 , 4]
print(contains_duplicate(teste4))
