import requests
from dmHandling import *
message = "ping!"

# r = requests.get('http://localhost:6969/')
# message = r.text
send = requests.post('http://localhost:4200/', data=message)