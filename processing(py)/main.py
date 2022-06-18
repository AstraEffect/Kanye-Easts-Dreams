import requests
from dmHandling import *
message = "ping"

reqResp = requests.post('http://localhost:4200/', data=message)
response = reqResp.text