# Challenge 1: Generate list of multiples
print("=== Challenge 1: Multiples List ===")

# Get inputs with basic validation
while True:
    try:
        number = int(input("Enter the base number (integer): "))
        break
    except ValueError:
        print("Please enter a valid integer.")

while True:
    try:
        length = int(input("Enter the length of the list (integer): "))
        if length <= 0:
            print("Length must be a positive integer.")
            continue
        break
    except ValueError:
        print("Please enter a valid integer.")

# Generate the list of multiples
multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)

print("Result:", multiples)
print()


# Challenge 2: Remove consecutive duplicate letters
print("=== Challenge 2: Remove Consecutive Duplicates ===")

word = input("Enter a word/string: ").strip()

# Method 1: Simple and readable (recommended for beginners)
result = ""
for char in word:
    if not result or char != result[-1]:
        result += char

# Alternative Method 2: Using list + join (also very clean)
# result_list = []
# for char in word:
#     if not result_list or char != result_list[-1]:
#         result_list.append(char)
# result = "".join(result_list)

print("Cleaned string:", result)


# Bonus: Show both original and result side by side
print("\nBefore →", repr(word))
print("After  →", repr(result))