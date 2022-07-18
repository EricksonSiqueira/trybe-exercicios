from parsel import Selector
import requests
from operator import itemgetter

base_url = "https://www.pichau.com.br/search?q=rx%206600&sort=price-asc&page="

products = []
loop = True
i = 1
search = "RX 6600"

while loop == True:
    response = requests.get(base_url + str(i))
    selector = Selector(text=response.text)
    new_products_title = selector.css("h2::text").getall()
    new_products_prices = selector.css(".jss69::text").getall()

    try:
        while True:
            new_products_prices.remove("R$")
    except:
        pass

    only_searched_products = []
    for index, product in enumerate(new_products_title):
        if(search in product):
            product_dict = {"title": product, "price": new_products_prices[index]}
            only_searched_products.append(product_dict)

    if (len(new_products_prices) == 0):
        loop = False

    products.extend(only_searched_products)
    i += 1

print(products)

sorted_products = sorted(products, key=itemgetter('price'))
cheapest_product = sorted_products[0]
print(cheapest_product)
