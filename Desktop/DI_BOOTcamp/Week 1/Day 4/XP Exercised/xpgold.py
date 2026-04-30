import random
from datetime import datetime

# =============================================
# EXERCISE 1: When will I retire?
# =============================================

def get_age(year, month, day):
    """Calculate age based on birth date"""
    current_year = 2025   # You can change this to datetime.now().year for real-time
    current_month = 3     # Change to datetime.now().month if you want current month
    current_day = 18      # Change to datetime.now().day if you want current day

    age = current_year - year
    
    # If birthday hasn't occurred yet this year, subtract 1
    if (current_month, current_day) < (month, day):
        age -= 1
    
    return age


def can_retire(gender, date_of_birth):
    """Check if person can retire"""
    # Convert date string "YYYY/MM/DD" to integers
    year, month, day = map(int, date_of_birth.split('/'))
    
    age = get_age(year, month, day)
    
    # Retirement ages
    if gender.lower() == 'm':
        retirement_age = 67
    elif gender.lower() == 'f':
        retirement_age = 62
    else:
        print("Invalid gender! Please enter 'm' or 'f'.")
        return False
    
    if age >= retirement_age:
        return True
    else:
        return False


# User Input
print("=== Retirement Calculator ===\n")

gender = input("Enter your gender (m/f): ").strip()
dob = input("Enter your date of birth (YYYY/MM/DD): ").strip()

if can_retire(gender, dob):
    print("🎉 Congratulations! You can retire.")
else:
    print("Sorry, you cannot retire yet.")
    
print("-" * 50)


# =============================================
# EXERCISE 2: Sum (X + XX + XXX + XXXX)
# =============================================

def sum_series(x):
    """Returns X + XX + XXX + XXXX"""
    total = 0
    term = 0
    for i in range(1, 5):           
        term = term * 10 + x
        total += term
    return total


# Test
x = int(input("Enter a number (1-9): "))
result = sum_series(x)
print(f"Result for X = {x} → {result}")   
print("-" * 50)


# =============================================
# EXERCISE 3: Double Dice
# =============================================

def throw_dice():
    """Return a random number between 1 and 6"""
    return random.randint(1, 6)


def throw_until_doubles():
    """Keep throwing 2 dice until we get doubles, return number of throws"""
    throws = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        throws += 1
        if die1 == die2:
            return throws


def main():
    total_throws = 0
    results = []                   

    print("Simulating 100 doubles...\n")
    
    for i in range(100):
        throws_needed = throw_until_doubles()
        results.append(throws_needed)
        total_throws += throws_needed

    average = total_throws / 100

    print(f"Total throws to reach 100 doubles: {total_throws}")
    print(f"Average throws to reach doubles: {average:.2f}")


# Run the simulation
main()