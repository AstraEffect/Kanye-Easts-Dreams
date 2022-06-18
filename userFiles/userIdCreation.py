import string    
import random
S = 40
ran = ''.join(random.choices(string.ascii_uppercase + string.digits, k = S))    
print("The randomly generated user id is : " + str(ran))