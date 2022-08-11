def missing_on_shelf(shelf):
  seted_shelf = set(shelf)
  all_itens = set(range(1, 21))

  missing_items = all_itens - seted_shelf;

  return missing_items


print(missing_on_shelf([1, 4, 5 ,6 ,8 ,9, 10 , 11, 14, 16, 18]))