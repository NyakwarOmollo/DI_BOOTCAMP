# Print hello 5 times
print(*["Hello World"]*5)

#Calculation
result=(99**3)*8
print(result)
print("Comparison results:")
print("-------------------")
print("5 < 3              →", 5 < 3)                  
print("3 == 3             →", 3 == 3)                 
print("3 == \"3\"          →", 3 == "3")              
print("\"Hello\" == \"hello\" →", "Hello" == "hello")  

#My computer brand
computer_brand= "Lenovo"
print(f"I have a {computer_brand} computer.")

#My information
name = "Calvin"
shoe_size = 42
age = 18

info = f"I'm {name} and I have a pair of black Air Force 1s in size {shoe_size}. I got them when I was {age} years old."

print(info)

# A and B
a= 43
b= 56

# check if a is greater than b
if a>b:
     print("Hello world")

#What is your name
# Grok's funny name checker

print("Hey there! I'm Calvin, nice to meet you!")
print("-" * 40)

# Ask for the user's name
user_name = input("What's your name? ").strip().title()

# My name (case-insensitive comparison)
my_name = "Calvin"

if user_name.lower() == my_name.lower():
    print("\nWHOA WAIT A MINUTE!!")
    print(f"You’re also named {user_name}?!")
    print("Are we... long-lost twins separated at the AI factory?!")
    print("Quick — do you also answer existential questions at 3 a.m. in your pajamas?")
    print("We should start a band called 'Calvin & Calvin'")
else:
    print("\nHmm... " + user_name + ", huh?")
    print(f"Not quite '{my_name}'... but honestly, that's probably for the best.")
    print("Two Calvins in the world might cause a reality glitch.")
    print("The universe can only handle so much maximum truth-seeking at once")
    print(f"Nice to meet you anyway, {user_name}!")

print("\nThanks for playing name roulette with me!")

# Simple Odd

print("This program will tell you if a number is odd or even.")
print("Even numbers can be divided by 2 with no remainder.")
print("Odd numbers have 1 left over when divided by 2.\n")

# Get input from user
user_input = input("Please enter a number: ")

# Try to convert to integer
try:
    number = int(user_input)
    
    # Check remainder when divided by 2
    if number % 2 == 0:
        print(number, "is an EVEN number.")
    else:
        print(number, "is an ODD number.")
        
except ValueError:
    print("Sorry, that's not a valid number. Please enter digits only (no letters or spaces).")


print("Roller Coaster Height Checker")
print("-" * 40)

# Ask the user for their height
try:
    height = float(input("Enter your height in centimeters: ").strip())
    
    if height > 145:
        print(f"\nGreat news! At {height} cm, you're tall enough to ride!")
        print("Buckle up and enjoy the ride!")
    else:
        print(f"\nSorry, at {height} cm you're not quite tall enough yet.")
        print(f"You need to grow a bit more — aim for over 145 cm! 🌱")
        print("Come back when you've had a few more growth spurts!")
        
except ValueError:
    print("\nOops! Please enter a valid number (e.g. 152 or 140.5).")