import random
import time
from timeit import default_timer as timer
nums = []
score = 0
start = True
print ('Welcome To KidKalc!')
time.sleep(2)
print ('Welcome To The Future Of Bright Minds!')
time.sleep(3)
print ('In This Test You Will Be Answering Infinite Questions\nVarying In Difficulty Depending On Your Grade.')
time.sleep(4)
name = input('But First, Enter Your Name Please: ')
time.sleep(0.5)
accgrade = input('Next, Enter Your Grade: ')
print('And now you may begin')
time.sleep(2)
print('3')
time.sleep(1)
print('2')
time.sleep(1)
print('1')
time.sleep(1)
print('GO')
begin = timer()
def kindergarten():
    global score
    global nums
    global question
    global accans
    num1 = 500
    num2 = 500
    accans = num1 + num2
    while accans > 10:
        num1 = random.randint(0,10)
        num2 = random.randint(0,10)
        accans = num1 + num2
    question = str(num1)+' + '+ str(num2)+ ' = '
    accans = num1 + num2
    
        
def grade1():
    global score
    global nums
    
    global question
    global accans
    operations = ['+','-']
    quesoper   = random.choice(operations)
    if quesoper =='+':
        num1 = 500
        num2 = 500
        accans = num1 + num2
        while accans > 20:
            num1 = random.randint(0,20)
            num2 = random.randint(0,20)
            accans = num1 + num2
        question = str(num1)+' + '+ str(num2)+ ' = '
        accans = num1 + num2


    elif quesoper == '-':
        num1 = random.randint(0,20)
        num2 = random.randint(0,20)
        nums.clear()
        nums.append(num1)
        nums.append(num2)
        nums.sort()
        question = str(nums[1])+' - '+ str(nums[0])+ ' = '
        accans = nums[1] - nums[0]

def grade2():
    global score
    global nums
    global question
    global accans
    operations = ['+','-']
    quesoper   = random.choice(operations)

    if quesoper =='+':   
        num1 = 500
        num2 = 500
        accans = num1 + num2
        while accans > 200:
            num1 = random.randint(0,200)
            num2 = random.randint(0,200)
            accans = num1 + num2
        question = str(num1)+' + '+ str(num2)+ ' = '
        accans = num1 + num2

    elif quesoper == '-':
        num1 = random.randint(0,200)
        num2 = random.randint(0,200)
        nums.clear()
        nums.append(num1)
        nums.append(num2)
        nums.sort()
        question = str(nums[1])+' - '+ str(nums[0])+ ' = '
        accans = nums[1] - nums[0]

def grade3():
    global score
    global nums
    global question
    global accans
    operations = ['+','-','*']
    quesoper   = random.choice(operations)
    
    if quesoper =='+':
        num1 = 500
        num2 = 500
        accans = num1 + num2
        while accans > 500:
            num1 = random.randint(0,500)
            num2 = random.randint(0,500)
            accans = num1 + num2   
        question = str(num1)+' + '+ str(num2)+ ' = '
        accans = num1 + num2

    elif quesoper =='-':
        num1 = random.randint(0,500)
        num2 = random.randint(0,500)
        nums.clear()
        nums.append(num1)
        nums.append(num2)
        nums.sort()
        question = str(nums[1])+' - '+ str(nums[0])+ ' = '
        accans = nums[1] - nums[0]

    elif quesoper == '*':
        num1 = random.randint(0,5)
        num2 = random.randint(0,5)
        question = str(num1)+' * '+ str(num2)+ ' = '
        accans = num1 * num2

    
def grade4():
    global question
    global score
    global nums
    global accans
    operations = ['+','-','*','/']
    quesoper   = random.choice(operations)
    
    if quesoper =='+':
        num1 = 1000
        num2 = 1000
        accans = num1 + num2
        while accans > 1000:
            num1 = random.randint(0,1000)
            num2 = random.randint(0,1000)
            accans = num1 + num2   
        question = str(num1)+' + '+ str(num2)+ ' = '
        accans = num1 + num2

    elif quesoper =='-':
        num1 = random.randint(0,1000)
        num2 = random.randint(0,1000)
        nums.clear()
        nums.append(num1)
        nums.append(num2)
        nums.sort()
        question = str(nums[1])+' - '+ str(nums[0])+ ' = '
        accans = nums[1] - nums[0]

    elif quesoper == '*':
        num1 = random.randint(0,10)
        num2 = random.randint(0,10)
        question = str(num1)+' * '+ str(num2)+ ' = '
        accans = num1 * num2

    elif quesoper == '/':
        num2 = random.randint(1,10)
        timestable = [[1,2,3,4,5,6,7,8,9,10],
                      [2,4,6,8,10,12,14,16,18,20],
                      [3,6,9,12,15,18,21,24,27,30],
                      [4,8,12,16,20,24,28,32,36,40,],
                      [5,10,15,20,25,30,35,40,45,50],
                      [6,12,18,24,30,36,42,48,54,60],
                      [7,14,21,28,35,42,49,56,63,70],
                      [8,16,24,32,40,48,56,64,72,80],
                      [9,18,27,36,45,54,63,72,81,90,],
                      [10,20,30,40,50,60,70,80,90,100]]
        num1 = random.choice(timestable[num2-1])
        question = str(num1)+' / '+ str(num2)+ ' = '
        accans = num1//num2
        
def grade5():
    global question
    global score
    global nums
    global accans
    operations = ['+','-','*','/']
    quesoper   = random.choice(operations)
    
    if quesoper =='+':
        num1 = 5000
        num2 = 5000
        accans = num1 + num2
        while accans > 5000:
            num1 = random.randint(0,5000)
            num2 = random.randint(0,5000)
            accans = num1 + num2   
        question = str(num1)+' + '+ str(num2)+ ' = '
        accans = num1 + num2

    elif quesoper =='-':
        num1 = random.randint(0,5000)
        num2 = random.randint(0,5000)
        nums.clear()
        nums.append(num1)
        nums.append(num2)
        nums.sort()
        question = str(nums[1])+' - '+ str(nums[0])+ ' = '
        accans = nums[1] - nums[0]

    elif quesoper == '*':
        num1 = random.randint(0,12)
        num2 = random.randint(0,12)
        question = str(num1)+' * '+ str(num2)+ ' = '
        accans = num1 * num2

    elif quesoper == '/':
        num2 = random.randint(1,12)
        timestable = [[1,2,3,4,5,6,7,8,9,10,11,12],
                      [2,4,6,8,10,12,14,16,18,20,22,24],
                      [3,6,9,12,15,18,21,24,27,30,33,36],
                      [4,8,12,16,20,24,28,32,36,40,44,48],
                      [5,10,15,20,25,30,35,40,45,50,55,60],
                      [6,12,18,24,30,36,42,48,54,60,66,72],
                      [7,14,21,28,35,42,49,56,63,70,77,84],
                      [8,16,24,32,40,48,56,64,72,80,88,96],
                      [9,18,27,36,45,54,63,72,81,90,99,108],
                      [10,20,30,40,50,60,70,80,90,100,110,120],
                      [11,22,33,44,55,66,77,88,99,110,121,132],
                      [12,24,36,48,60,72,84,96,108,120,132,144]]
        num1 = random.choice(timestable[num2-1])
        question = str(num1)+' / '+ str(num2)+ ' = '
        accans = num1//num2

def checkans():
    global begin
    global accans
    global score
    global question
    global name
    userans = int(input(question))
    if userans == accans:
        time.sleep(0.5)
        promptgood = "Well Done "+name+'! '+str(userans)+' Is Correct!'
        print(promptgood)
        score = score + 1
        promptscr = 'Your Score Is Currently '+str(score)+'.'
        time.sleep(1)
        print(promptscr)
    elif userans != accans:
        promptbad = "Sorry "+name+'. '+str(userans)+' Is Incorrect!'
        time.sleep(0.5)
        print(promptbad)
        print("The Actual Answer Is",accans)
        if score > 0:
            score = score -1
        time.sleep(1)
        promptscr = 'Your Score Is Currently '+str(score)+'.'
        print(promptscr)

    new = timer()
    worktime = str(new-begin)
    seconds = worktime[0]
    print('You have now been working for',seconds,'seconds.')
    time.sleep(0.5)
    print('--')
        
if accgrade.lower() == 'kindergarten' or accgrade.lower()== 'kindergarden':
    while start == True:
        kindergarten()
        checkans()

elif accgrade.lower() == 'grade 1':
    while start == True:
        grade1()
        checkans()

elif accgrade.lower() == 'grade 2':
    while start == True:
        grade2()
        checkans()

elif accgrade.lower() == 'grade 3':
    while start == True:
        grade3()
        checkans()

elif accgrade.lower() == 'grade 4':
    while start == True:
        grade4()
        checkans()

elif accgrade.lower() == 'grade 5':
    while start == True:
        grade5()
        checkans()
