import re
import random
import string
from datetime import datetime

# ========================================
# Exercise 1: Upcoming Holiday
# ========================================
def upcoming_holiday():
    today = datetime.now()
    print(f"Today's date: {today.strftime('%Y-%m-%d')}")

    # List of common holidays (you can add more)
    holidays = {
        "New Year's Day": datetime(today.year + 1, 1, 1),
        "Valentine's Day": datetime(today.year, 2, 14),
        "Independence Day": datetime(today.year, 7, 4) if today.month <= 7 else datetime(today.year + 1, 7, 4),
        "Christmas": datetime(today.year, 12, 25) if today.month <= 12 else datetime(today.year + 1, 12, 25),
        "New Year's Eve": datetime(today.year, 12, 31) if today.month <= 12 else datetime(today.year + 1, 12, 31),
    }

    # Find the next upcoming holiday
    next_holiday = None
    holiday_name = ""
    min_days = float('inf')

    for name, date in holidays.items():
        if date > today:
            days_left = (date - today).days
            if days_left < min_days:
                min_days = days_left
                next_holiday = date
                holiday_name = name

    if next_holiday:
        print(f"The next holiday is **{holiday_name}** in {min_days} days!")
    else:
        print("No upcoming holidays found this year.")


# ========================================
# Exercise 2: Age on Different Planets
# ========================================
def age_on_planets(seconds):
    earth_year_seconds = 31557600  # 365.25 days

    planets = {
        "Earth": 1.0,
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    }

    print(f"\nYou are {seconds:,} seconds old.")
    print("-" * 50)
    for planet, factor in planets.items():
        age = seconds / (earth_year_seconds * factor)
        print(f"{planet:10}: {age:.2f} years old")


# ========================================
# Exercise 3: Extract Numbers from String
# ========================================
def return_numbers(text):
    numbers = re.findall(r'\d', text)   # find all digits
    result = ''.join(numbers)
    print(f"Input: {text}")
    print(f"Extracted numbers: {result}")
    return result


# ========================================
# Exercise 4: Validate Full Name
# ========================================
def validate_name():
    while True:
        name = input("\nEnter your full name (e.g. John Doe): ").strip()
        
        # Check if it contains only letters and exactly one space
        if re.match(r'^[A-Z][a-z]+ [A-Z][a-z]+$', name):
            print(f"✅ Valid name: {name}")
            return name
        else:
            print("❌ Invalid name! Rules:")
            print("   • Must contain exactly one space")
            print("   • First letter of each name must be uppercase")
            print("   • Only letters allowed (no numbers or special characters)")


# ========================================
# Exercise 5: Password Generator + Validator
# ========================================
def is_valid_password(password):
    """Test function to check password validity"""
    if len(password) < 6 or len(password) > 30:
        return False
    if not re.search(r'[0-9]', password):
        return False
    if not re.search(r'[a-z]', password):
        return False
    if not re.search(r'[A-Z]', password):
        return False
    if not re.search(r'[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]', password):
        return False
    return True


def generate_password(length):
    """Generate a strong password of given length"""
    if not 6 <= length <= 30:
        raise ValueError("Password length must be between 6 and 30")

    # Define character sets
    lower = string.ascii_lowercase
    upper = string.ascii_uppercase
    digits = string.digits
    special = "!@#$%^&*()_+-=[]{}|;:,.<>?"

    # Ensure at least one of each required character
    password = [
        random.choice(lower),
        random.choice(upper),
        random.choice(digits),
        random.choice(special)
    ]

    # Fill the rest with random characters
    all_chars = lower + upper + digits + special
    password += [random.choice(all_chars) for _ in range(length - 4)]

    # Shuffle the password
    random.shuffle(password)
    return ''.join(password)


def test_password_generator():
    """Test the password generator 100 times"""
    print("\nTesting password generator 100 times...")
    for i in range(1, 101):
        length = random.randint(8, 20)
        pwd = generate_password(length)
        if not is_valid_password(pwd) or len(pwd) != length:
            print(f"❌ Test {i} failed!")
            return False
    print("✅ All 100 tests passed! Password generator is working correctly.")
    return True


# ========================================
# MAIN MENU
# ========================================
def main():
    while True:
        print("\n" + "="*55)
        print("           PYTHON CHALLENGES")
        print("="*55)
        print("1. Upcoming Holiday")
        print("2. How Old Are You on Jupiter? (and other planets)")
        print("3. Extract Numbers from String (Regex)")
        print("4. Validate Full Name (Regex)")
        print("5. Strong Password Generator")
        print("0. Exit")
        print("="*55)

        choice = input("\nChoose an option (0-5): ").strip()

        if choice == "0":
            print("Goodbye! 👋")
            break

        elif choice == "1":
            print("\n--- Exercise 1: Upcoming Holiday ---")
            upcoming_holiday()

        elif choice == "2":
            print("\n--- Exercise 2: Age on Planets ---")
            try:
                seconds = int(input("Enter your age in seconds: "))
                age_on_planets(seconds)
            except ValueError:
                print("Please enter a valid number!")

        elif choice == "3":
            print("\n--- Exercise 3: Extract Numbers ---")
            text = input("Enter a string with numbers: ")
            return_numbers(text)

        elif choice == "4":
            print("\n--- Exercise 4: Validate Name ---")
            validate_name()

        elif choice == "5":
            print("\n--- Exercise 5: Password Generator ---")
            # First test the generator
            test_password_generator()

            # Then generate one for user
            while True:
                try:
                    length = int(input("\nEnter password length (6-30): "))
                    if 6 <= length <= 30:
                        password = generate_password(length)
                        print(f"\n✅ Your strong password is:")
                        print(f"   {password}")
                        print("\n💡 Keep this password safe!")
                        break
                    else:
                        print("Length must be between 6 and 30.")
                except ValueError:
                    print("Please enter a valid number.")

        else:
            print("Invalid option! Please choose 0-5.")

        input("\nPress Enter to continue...")


if __name__ == "__main__":
    main()