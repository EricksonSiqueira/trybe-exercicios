import requests

response = requests.get("http://httpbin.org/image/png")
print(response.content)
