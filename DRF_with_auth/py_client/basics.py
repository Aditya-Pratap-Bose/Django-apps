from urllib import response
import requests


# endpoint = "https://httpbin.org/status/200/"
# endpoint = "https://httpbin.org/anything"
endpoint = "http://localhost:8000/api"

get_response = requests.post(endpoint, json={"query": "Hello World"}) #HTTP request
# print(get_response.text)#print raw text response
# print(get_response.status_code)


# HTML Request -> HTML
# REST API HTTP Request -> JSON
# JavaScripts object Notion ~ Python Dict
try:
    print(response.json())
except Exception as e:
    print("JSON decode error:", e)
