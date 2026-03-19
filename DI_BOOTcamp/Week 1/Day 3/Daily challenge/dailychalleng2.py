# =============================================
# CAESAR CIPHER PROGRAM
# =============================================

def encrypt(text, shift):
    result = ""
    for char in text:
        if char.isupper():
            # Encrypt uppercase letters
            result += chr((ord(char) - 65 + shift) % 26 + 65)
        elif char.islower():
            # Encrypt lowercase letters
            result += chr((ord(char) - 97 + shift) % 26 + 97)
        else:
            # Keep non-alphabet characters unchanged (spaces, punctuation, numbers)
            result += char
    return result


def decrypt(text, shift):
    # Decryption is just encryption with negative shift
    return encrypt(text, -shift)


# ===================== MAIN PROGRAM =====================

print("=== Caesar Cipher Program ===\n")

while True:
    mode = input("Would you like to (E)ncrypt or (D)ecrypt? ").strip().upper()
    
    if mode in ['E', 'ENCRYPT']:
        mode = 'encrypt'
        break
    elif mode in ['D', 'DECRYPT']:
        mode = 'decrypt'
        break
    else:
        print("Please enter 'E' for Encrypt or 'D' for Decrypt.\n")

# Get the message
message = input("\nEnter your message: ")

# Get the shift number
while True:
    try:
        shift = int(input("Enter the shift number (1-25): "))
        if 1 <= shift <= 25:
            break
        else:
            print("Shift must be between 1 and 25.")
    except ValueError:
        print("Please enter a valid number.")

# Perform encryption or decryption
if mode == 'encrypt':
    result = encrypt(message, shift)
    print("\n✅ Encrypted Message:")
else:
    result = decrypt(message, shift)
    print("\n✅ Decrypted Message:")

print(result)

# Bonus: Show what the other operation would be
print("-" * 40)
if mode == 'encrypt':
    print(f"Decrypted back: {decrypt(result, shift)}")
else:
    print(f"Encrypted: {encrypt(result, shift)}")