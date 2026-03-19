import random

# =============================================
# EXERCISE 1: What Are You Learning?
# =============================================
def display_message():
    print("I am learning about functions in Python.")

display_message()
print("-" * 50)


# =============================================
# EXERCISE 2: What’s Your Favorite Book?
# =============================================
def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")
print("-" * 50)


# =============================================
# EXERCISE 3: Some Geography
# =============================================
def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik", "Iceland")
describe_city("Paris")
describe_city("Nairobi", "Kenya")
print("-" * 50)


# =============================================
# EXERCISE 4: Random
# =============================================
def compare_numbers(user_number):
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print("Success! 🎉")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

compare_numbers(42)
print("-" * 50)


# =============================================
# EXERCISE 5: Let’s Create Some Personalized Shirts!
# =============================================
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

# Calls as requested
make_shirt()                          # Large with default message
make_shirt("medium")                  # Medium with default message
make_shirt("small", "Hello World")    # Custom size and text

# Bonus: Using keyword arguments
make_shirt(size="extra large", text="Python is Awesome!")
print("-" * 50)


# =============================================
#