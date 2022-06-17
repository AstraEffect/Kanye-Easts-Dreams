import requests
from dmHandling import *


r = requests.get('http://localhost:6969/')
message = r.text