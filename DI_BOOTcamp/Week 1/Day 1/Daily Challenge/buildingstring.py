import random

# 1. Ask for user input
user_input = input("Enter a string that is exactly 10 characters long: ")

# 2. Check the length
length = len(user_input)

if length < 10:
    print("String not long enough.")
elif length > 10:
    print("String too long.")
else:
    # Exactly 10 characters → proceed
    print("Perfect string")
    
    # 3. Print first and last characters
    print(f"First character : {user_input[0]}")
    print(f"Last character  : {user_input[-1]}")
    
    # 4. Build and print the string character by character (progressive)
    print("\nBuilding the string progressively:")
    current = ""
    for char in user_input:
        current += char
        print(current)
    
    # 5. Bonus: Jumble the string
    print("\nBonus - Jumbled version:")
    
    # Convert string to list so we can shuffle it
    chars = list(user_input)
    random.shuffle(chars)
    
    # Join the shuffled characters back into a string
    jumbled = ''.join(chars)
    print(jumbled)