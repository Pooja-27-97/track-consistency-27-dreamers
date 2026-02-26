import random, sys, math
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