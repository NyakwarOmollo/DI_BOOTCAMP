# =============================================
# PYTHON DICTIONARY EXERCISES - COMPLETE CODE
# =============================================

print("=== Exercise 1: Converting Lists into Dictionaries ===\n")

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# Method 1: Using zip() - Most Pythonic
result = dict(zip(keys, values))

# Method 2: Using dictionary comprehension - More manual but clear
# result = {keys[i]: values[i] for i in range(len(keys))}

print(result)
print("-" * 50)


print("\n=== Exercise 2: Cinemax #2 ===\n")

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0

print("Ticket prices:")

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    
    print(f"{name.capitalize()} : ${price}")
    total_cost += price

print(f"\nTotal cost for the family: ${total_cost}")
print("-" * 50)


# ------------------- BONUS -------------------
print("\n--- Bonus: User Input Version ---")

family_bonus = {}
print("Enter family members (type 'done' when finished)\n")

while True:
    name = input("Enter name (or 'done'): ").strip()
    if name.lower() == 'done':
        break
    try:
        age = int(input(f"Enter {name}'s age: "))
        family_bonus[name.lower()] = age
    except ValueError:
        print("Please enter a valid age.")

# Calculate total
total_bonus = 0
for name, age in family_bonus.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    total_bonus += price

print(f"\nTotal ticket cost: ${total_bonus}")
print("-" * 50)


print("\n=== Exercise 3: Zara ===\n")

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": ["blue"],
        "Spain": ["red"],
        "US": ["pink", "green"]
    }
}

# 1. Change number of stores
brand["number_stores"] = 2

# 2. Print sentence about clients
print(f"Zara's clients are people who wear {', '.join(brand['type_of_clothes'])} clothes.\n")

# 3. Add country_creation
brand["country_creation"] = "Spain"

# 4. Add Desigual to international competitors
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 5. Delete creation_date
brand.pop("creation_date")

# 6. Print last international competitor
print("Last international competitor:", brand["international_competitors"][-1])

# 7. Print major colors in the US
print("Major colors in the US:", brand["major_color"]["US"])

# 8. Print number of keys
print("Number of keys in brand dictionary:", len(brand))

# 9. Print all keys
print("All keys:", list(brand.keys()))

print("\nFinal brand dictionary:")
print(brand)
print("-" * 50)


# ------------------- BONUS -------------------
print("\n--- Bonus: Merge with more_on_zara ---")

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print("After merging with more_on_zara:")
print(brand)
print("-" * 50)


print("\n=== Exercise 4: Disney Characters ===\n")

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# 1. Character → Index
disney1 = {users[i]: i for i in range(len(users))}
print("1. Character to Index:", disney1)

# 2. Index → Character
disney2 = {i: users[i] for i in range(len(users))}
print("2. Index to Character:", disney2)

# 3. Sorted alphabetically → Index
sorted_users = sorted(users)
disney3 = {sorted_users[i]: i for i in range(len(sorted_users))}
print("3. Alphabetically sorted:", disney3)