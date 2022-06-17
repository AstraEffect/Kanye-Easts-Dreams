from time import sleep
import os

while True:
    sleep(600)
#10 min timer
    os.system("ssh update@auth ./valid.sh")