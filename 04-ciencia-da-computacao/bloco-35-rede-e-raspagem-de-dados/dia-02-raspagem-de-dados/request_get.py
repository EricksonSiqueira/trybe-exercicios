import requests

response = requests.get("https://www.betrybe.com/")
reponse_status_code = response.status_code
response_text = response.text
response_in_bytes = response.content
