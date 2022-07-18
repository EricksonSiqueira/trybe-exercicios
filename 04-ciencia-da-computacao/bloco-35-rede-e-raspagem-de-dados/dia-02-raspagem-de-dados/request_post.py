import requests

response = requests.post("http://httpbin.org/post", data="some content")
print(response.text)
