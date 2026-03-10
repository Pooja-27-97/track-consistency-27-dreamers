import random, sys, math, copy
# name = input("Enter your name : ")
# print(len(name))
# print(int(27.97))
# print(27 == 27.0)
# print(89 == '89')
# print(True or False)
# print(not False)

# year = 2032
# if(year % 4 == 0):
#     if(year % 100 != 0):
#         print("Leap year")
#     else:
#         if(year % 400 == 0):
#             print("Leap year")
#         else:
#             print("Not a leap year")
# else:
#     print("Not a leap year")


# num = random.randint(1, 51)
# guess = int(input("Guess the number (1-50): "))

# while(True):
#     if(guess == num or guess == 0):
#         sys.exit()
#     if(guess < num):
#         guess = int(input("Try with higer value: "))
#     elif (guess > num):
#         guess = int(input("Try with lower value: "))

# if(guess == num):
#     print("Congrats! Right guess")
# else :
#     print("Out of the game")


# n = 10
# i = 1
# while( i <= n):
#     if(i == 7):
#         i = i+1
#         continue
#     print(i)
#     i = i+1
    

# for i in range (10, 0, -2):
#     print(i)

# sum = 0
# for i in range (1, 101):
#     sum =sum +i
# print(sum)

# fact = 1
# for i in range(1, 6):
#     fact = fact * i
# print(fact)


# def check_even_odd(num):
#     if(num % 2 == 0):
#         return "Even"
#     else:
#         return "Odd"
    
# num = int(input("Enter an integer: "))
# print(check_even_odd(num))


# def sum_of_digits(num):
#     sum = 0
#     while(num > 0):
#         last_digit = num % 10
#         sum = sum + last_digit
#         num = int(num / 10)
#     return sum
    
# num = int(input("Enter an integer: "))
# print("Sum of given digits: " + str(sum_of_digits(num)))


# print(math.remainder(49, 2))


# def print_remainder(num1, num2):
#     try:
#         return (num1/num2)
#     except ZeroDivisionError:
#         print("Cannot divide by zero")

# num1 = int(input("Enter Divisor: "))
# num2 = int(input("Enter divider: "))
# print(print_remainder(num1, num2))



# arr = (1, 2) 'apple', 27.97]
# for i in range (0, len(arr)):
#     print(arr[i])

# lst = [["Hill", "Johan", "Fah", "Arithit"],["Easter", "North", "Phoon", "Dao"]]
# print(ls([-1]))
# print(ls([0][))
# print(len(lst[0][1]))
# print(len("still with you"))


# lst = ["Muzan", "Sukuna", "Ametio"]
# del lst[-1]
# print(lst)
# print(lst)
# lst[0] = "Loid"
# print(lst)
# lst[1] = lst[2]
# print(lst)


# top = ["Hill", "Johan", "Fah", "Arithit"]
# print("Fah" not in top)
# bottom = ["Easter", "North", "Phoon", "Dao"]
# hill, johan, fah, arithit = bottom
# print(fah)

# print(top+bottom)
# print(top[1]*5)


# fruit = ['apple']
# fruit += 'grapes'
# fruit *= 2
# print(fruit)


# fruits = ["Apple", "banana", "Cherry", "Dragin fruit", "Egg fruit", "Fig fruit"]
# try:
#     print(fruits.index("Fig fruit"))
# except ValueError:
#     print("Not in the list")
    
# fruits.append("Grapes")
# fruits.insert(2, "kiwi")
# print(fruits)
# fruits.remove("kiwi")
# print(fruits)


# top = ["Hill", "Johan", "Fah", "Arithit"]
# top.sort()
# print(top)


# name = input("Enter your name: ")
# for i in top:
#     print("********************************** " + i + " **********************************")


# print(type(("hello",)))

# lst = [1, 2, 3, 4]
# tup = tuple(lst)
# print(lst)
# print(tup)

# tup = (1, 2, 3)
# lst = list(tup)
# print(lst)
# print(tup)

# print(tuple("kandy"))

# arr1 = [1, 2, 3]
# arr2 = copy.deepcopy(arr1)
# arr2.append(5)
# print(arr1)
# print(arr2)


# couples = {"Johan":"North", "TonFah":"Typhoon", "Hill":"Easter", "Arithit":"Dao"}
# couples["Tiger"] = "Naoi"
# couples.setdefault('name','Fourever you')
# print(couples.get('Johan'))
# print(couples)

# print("Hill" not in couples.values())
# print(couples.keys())
# print(type(couples))
# print(couples["TonFah"])


# lst1 = [2, 4, 6]
# lst2 = [4, 6, 2]
# print(lst1 == lst2)

# dict1 = {2, 4, 6}
# dict2 = {4, 6, 2}
# print(dict1 == dict2)

# print('North is Johan\'s wife.\tThey have special episodes.\nThey are the one who stole the spotlight.')

# print('''North,
#     I had a crush on the from
#         past 3 year''')

# str = 'Dreams are powerful'
# print(str.find('powerful'))


# print('Hello'.replace('l','p'))

# caps = 'dReamS'.upper()
# sml = caps.lower()
# print(caps.islower())
# print(sml.isupper())

# print('dreams are powerful'.capitalize())

# print('hello'.isalpha())
# print('hello56'.isalnum())
# print('1258265'.isdecimal())
# print('\n'.isspace())
# print('Dreams Are Powerful'.istitle())

# print("Hello".endswith('Hello'))

# fruits = ["Apple", "banana", "Cherry", "Dragin fruit", "Egg fruit", "Fig fruit"]
# print('$'.join(fruits))


# print("Apple$banana$Cherry$Dragin fruit$Egg fruit$Fig fruit".split('$'))

# print('-'.join('I win every single day'))
# print('Am unstoppable today'.split(' '))

# print('hello'.rjust(10, '*'))
# print('dreams'.ljust(20, '-'))
# print('anya'.center(10, '$'))

# print('$$$$$$$Hello$$$world$$$$$'.strip('$'))
