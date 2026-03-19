# =============================================
# EXERCISE 1 + 2 + 3: Birthday Look-up (Advanced)
# =============================================

# Exercise 1: Create the dictionary
birthdays = {
    "Alice": "2005/03/15",
    "Bob": "2004/07/22",
    "Charlie": "2006/11/08",
    "Dana": "2005/01/30",
    "Eli": "2007/05/12"
}

print("🎉 Welcome to the Birthday Dictionary! 🎉")
print("You can look up the birthdays of the people in the list!\n")

# Exercise 3: Add a new birthday
print("First, let's add a new person to the dictionary:")
new_name = input("Enter person's name: ").strip().title()

new_birthday = input(f"Enter {new_name}'s birthday (YYYY/MM/DD): ").strip()

# Add to dictionary
birthdays[new_name] = new_birthday
print(f"✅ Added {new_name}'s birthday successfully!\n")

# Exercise 2: Show all names
print("Here are all the people in the dictionary:")
for name in birthdays.keys():
    print(f"• {name}")
print()

# Ask user whose birthday they want to look up
name_to_find = input("Whose birthday would you like to look up? ").strip().title()

# Check if name exists
if name_to_find in birthdays:
    print(f"\n{name_to_find}'s birthday is on: {birthdays[name_to_find]}")
else:
    print(f"\nSorry, we don’t have the birthday information for {name_to_find}.")

print("-" * 50)


# =============================================
# EXERCISE 4: Fruit Shop
# =============================================

print("\n=== Fruit Shop Inventory ===\n")

items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

# Part 1: Print all items with their prices
print("Item Prices:")
for fruit, price in items.items():
    print(f"{fruit.capitalize():8} : ${price}")

print("-" * 30)

# Part 2: Advanced version with stock
stock_items = {
    "banana": {"price": 4,  "stock": 10},
    "apple":  {"price": 2,  "stock": 5},
    "orange": {"price": 1.5,"stock": 24},
    "pear":   {"price": 3,  "stock": 1}
}

print("Stock & Total Value:")
total_value = 0

for fruit, info in stock_items.items():
    price = info["price"]
    stock = info["stock"]
    value = price * stock
    total_value += value
    
    print(f"{fruit.capitalize():8} | Price: ${price:5} | Stock: {stock:2} | Value: ${value:6.2f}")

print("-" * 50)
print(f"Total value of all stock: ${total_value:.2f}")