import requests

try:
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.Timeout:
    response = requests.get("http://httpbin.org/delay/3", timeout=4)
finally:
    print(response.status_code)
