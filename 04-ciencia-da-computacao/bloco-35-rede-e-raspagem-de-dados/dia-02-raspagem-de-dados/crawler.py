from parsel import Selector
import requests

base_url = "https://www.pichau.com.br/search?q=rx%206600&sort=price-asc"

response = requests.get(base_url)
selector = Selector(text=response.text)
products = selector.css(".jss69::text").getall()

try:
    while True:
        products.remove("R$")
except:
  pass

print(products)
