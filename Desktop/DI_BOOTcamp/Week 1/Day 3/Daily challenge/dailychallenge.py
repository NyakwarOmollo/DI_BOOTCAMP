# =============================================
# CHALLENGE 1: Letter Index Dictionary
# =============================================

print("=== Challenge 1: Letter Index Dictionary ===\n")

word = input("Enter a word: ").strip().lower()   

char_index = {}

for index, letter in enumerate(word):
    if letter in char_index:
        char_index[letter].append(index)
    else:
        char_index[letter] = [index]

print(char_index)
print("-" * 60)


# =============================================
# CHALLENGE 2: Affordable Items
# =============================================

print("\n=== Challenge 2: Affordable Items ===\n")

# Given data for items and wallet   
items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"

# Clean wallet amount
wallet_clean = wallet.replace("$", "").replace(",", "")
money = int(wallet_clean)

basket = []

# Go through items in the order they appear in the dictionary
for item, price_str in items_purchase.items():
    # Clean the price string
    price_clean = price_str.replace("$", "").replace(",", "")
    price = int(price_clean)
    
    # If we can afford it, buy it and reduce money
    if money >= price:
        basket.append(item)
        money -= price

# Final Output
if not basket:
    print("Nothing")
else:
    basket.sort()        
    print(basket)