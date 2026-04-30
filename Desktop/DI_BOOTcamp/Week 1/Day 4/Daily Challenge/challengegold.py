MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''


# Step 1: Convert the string into a 2D list (matrix)
lines = MATRIX_STR.strip().split('\n')
matrix = [list(line) for line in lines]

# Optional: Print the matrix to visualize
print("Matrix:")
for row in matrix:
    print(row)
print()


# Step 2 & 3: Read column by column and collect only alpha characters
decoded = ""

for col in range(len(matrix[0])):        # Iterate through each column
    for row in range(len(matrix)):       # Go down each row in that column
        char = matrix[row][col]
        if char.isalpha():               # Only keep letters
            decoded += char


# Step 4: Replace groups of symbols between letters with a single space
# We do this by building a new string and inserting space when needed

result = ""
i = 0
while i < len(decoded):
    if decoded[i].isalpha():
        result += decoded[i]
        # Skip all following non-alpha characters and add one space (if not at end)
        i += 1
        while i < len(decoded) and not decoded[i].isalpha():
            i += 1
        if i < len(decoded):          # Add space only if there's more letters after
            result += " "
    else:
        i += 1

# Final cleaning: remove trailing space if any
result = result.strip()

# Step 5: Print the secret message
print("Decoded Message:")
print(result)