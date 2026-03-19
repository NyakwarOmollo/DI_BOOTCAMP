# Count Occurrence Program

# Get input from user
text = input("Enter a string: ")
char = input("Enter a character to count: ")

# Count the occurrences
count = 0

for letter in text:
    if letter == char:
        count += 1

# Display the result
print(f"\nString: {text}")
print(f"Character: {char}")
print(count)
