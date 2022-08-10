orders = [
    ("fernanda", "rafa"),
    ("fran", "daniel"),
    ("mirian", "gabriel"),
    ("matheus", "yasmin"),
    ("giovanni", "fernanda"),
    ("rafa", "fran"),
    ("daniel", "mirian"),
    ("gabriel", "matheus"),
]


def get_order(orders):
    orders_dict = {person[0]: person[1] for person in orders}
    inv_orders_dict = {person[1]: person[0] for person in orders}
    first = ""

    for person in orders_dict:
        if person not in inv_orders_dict:
          first = person
          break

    queue = [first]
    while first in orders_dict:
      queue.append(orders_dict[first])
      first = orders_dict[first]
    
    return queue


print(get_order(orders))
