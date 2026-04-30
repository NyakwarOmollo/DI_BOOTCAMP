# =============================================
# EXERCISE 1: CARS
# =============================================

# 1. Copy the string
car_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# 2. Convert string into a list
manufacturers = [company.strip() for company in car_string.split(",")]

# 3. Print how many manufacturers are in the list
print(f"There are {len(manufacturers)} car manufacturers in the list.\n")

# 4. Print the list in reverse/descending order (Z-A)
print("Manufacturers in reverse order (Z-A):")
sorted_desc = sorted(manufacturers, reverse=True)
print(sorted_desc)
print()

# 5. Using loops or list comprehension

# a) How many manufacturers have the letter 'o' in their name?
count_o = sum(1 for company in manufacturers if 'o' in company.lower())
print(f"Number of manufacturers with the letter 'o': {count_o}")

# b) How many manufacturers do NOT have the letter 'i' in their name?
count_no_i = sum(1 for company in manufacturers if 'i' not in company.lower())
print(f"Number of manufacturers without the letter 'i': {count_no_i}")
print()

# 6. Bonus: Remove duplicates
duplicates_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

# Remove duplicates using set, then convert back to list and sort
unique_companies = sorted(list(set(duplicates_list)))

print("Companies without duplicates:")
print(", ".join(unique_companies))
print(f"Total unique companies: {len(unique_companies)}\n")

# 7. Bonus: Print manufacturers in ascending order (A-Z), but reverse each name
print("Manufacturers in ascending order with reversed letters:")

reversed_names = []
for company in sorted(manufacturers):
    reversed_name = company[::-1]          
    reversed_names.append(reversed_name)
    print(reversed_name)

# Alternative using list comprehension (more Pythonic):
# reversed_names = [company[::-1] for company in sorted(manufacturers)]