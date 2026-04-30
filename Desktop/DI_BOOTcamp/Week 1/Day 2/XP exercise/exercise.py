# =============================================
# PYTHON EXERCISES - COMPLETE SOLUTIONS
# =============================================

print("=== Exercise 1: Sets ===\n")

# 1. Create my_fav_numbers
my_fav_numbers = {7, 12, 23, 45, 67}

# Add two new numbers
my_fav_numbers.add(88)
my_fav_numbers.add(99)

print("After adding two numbers:", my_fav_numbers)

# Remove the last number you added (99)
my_fav_numbers.remove(99)

print("After removing last added number:", my_fav_numbers)

# Create friend's favorite numbers
friend_fav_numbers = {3, 15, 23, 45, 78}

# Concatenate both sets (union)
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# Alternative: our_fav_numbers = my_fav_numbers | friend_fav_numbers

print("Our favorite numbers together:", our_fav_numbers)
print("-" * 50)


print("\n=== Exercise 2: Tuple ===\n")

numbers = (10, 20, 30, 40, 50)

# Try to add more numbers - This will cause an error
# numbers.append(60)     # AttributeError: 'tuple' object has no attribute 'append'

print("Tuple is immutable, so we cannot add items directly.")
print("Original tuple:", numbers)
print("To add items, we must create a new tuple:")
new_numbers = numbers + (60, 70, 80)
print("New tuple:", new_numbers)
print("-" * 50)


print("\n=== Exercise 3: List Manipulation ===\n")

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")           # Remove Banana
basket.remove("Blueberries")      # Remove Blueberries
basket.append("Kiwi")             # Add Kiwi at the end
basket.insert(0, "Apples")        # Add Apples at the beginning

print("Current basket:", basket)
print("Apples appears", basket.count("Apples"), "time(s)")

basket.clear()                    # Empty the list
print("Basket after clearing:", basket)
print("-" * 50)


print("\n=== Exercise 4: Floats ===\n")

# Generate sequence: 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
sequence = []
for i in range(3, 11):
    sequence.append(i / 2)

print("Generated sequence:", sequence)
print("-" * 50)


print("\n=== Exercise 5: For Loop ===\n")

print("All numbers from 1 to 20:")
for i in range(1, 21):
    print(i, end=" ")
print("\n")

print("Numbers from 1 to 20 with even index (0-based):")
for i in range(1, 21):
    if i % 2 == 0:          # even numbers (1-based index would be odd here)
        print(i, end=" ")
print("\n")
print("-" * 50)


print("\n=== Exercise 6: While Loop ===\n")

while True:
    name = input("Enter your name: ").strip()
    
    if len(name) >= 3 and not name.isdigit():
        print("Thank you!")
        break
    else:
        print("Invalid name! Name must be at least 3 letters and not only digits.\n")
print("-" * 50)


print("\n=== Exercise 7: Favorite Fruits ===\n")

fruits = input("Enter your favorite fruits (separated by space): ").strip().split()

chosen = input("Enter the name of any fruit: ").strip()

if chosen in fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")
print("-" * 50)


print("\n=== Exercise 8: Pizza Toppings ===\n")

toppings = []
base_price = 10
topping_price = 2.5

print("Enter pizza toppings (type 'quit' to finish):")

while True:
    topping = input("Add topping: ").strip()
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

print("\nYour pizza toppings:", toppings)

total_cost = base_price + len(toppings) * topping_price
print(f"Total cost: ${total_cost:.2f}")
print("-" * 50)


print("\n=== Exercise 9: Cinemax Tickets ===\n")

total_cost = 0
family = []

while True:
    age_input = input("Enter age (or 'done' to finish): ").strip()
    if age_input.lower() == 'done':
        break
    try:
        age = int(age_input)
        family.append(age)
        
        if age < 3:
            price = 0
        elif 3 <= age <= 12:
            price = 10
        else:
            price = 15
        total_cost += price
    except ValueError:
        print("Please enter a valid number or 'done'.")

print(f"\nTotal ticket cost for the family: ${total_cost}")

# Bonus: Teenagers restricted movie (16-21)
print("\n--- Bonus: Restricted Movie (16-21) ---")
attendees = []

while True:
    age_str = input("Enter age for restricted movie (or 'done'): ").strip()
    if age_str.lower() == 'done':
        break
    try:
        age = int(age_str)
        if 16 <= age <= 21:
            attendees.append(age)
        else:
            print(f"Age {age} is not allowed for this movie.")
    except ValueError:
        print("Please enter a valid age.")

print("Final attendees:", attendees)