import requests

response = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})
print(response.text)
