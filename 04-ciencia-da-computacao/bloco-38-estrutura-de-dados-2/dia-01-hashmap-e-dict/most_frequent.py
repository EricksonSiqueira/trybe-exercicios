teste1 = [1 ,2, 3, 4]
# 1

teste2 = []
# None

teste3 = [1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4]

def most_frequent(nums):
  if(len(nums) == 0):
    return None
  
  most_frequent_num = nums[0]
  frequent = {}

  for num in nums:
    if(num not in frequent.keys()):
      frequent[num] = 1
    else:
      frequent[num] += 1
    
    if(frequent[most_frequent_num] < frequent[num]):
      most_frequent_num = num
  
  return most_frequent_num


print(most_frequent(teste1))
print(most_frequent(teste2))
print(most_frequent(teste3))