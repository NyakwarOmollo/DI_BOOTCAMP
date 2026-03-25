import string
import random
from datetime import datetime

# ========================================
# EXERCISE 1: Currency Class
# ========================================
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        raise TypeError("Unsupported operand type")

    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        else:
            raise TypeError("Unsupported operand type")
        return self


# ========================================
# EXERCISE 2: Sum Function (from func.py)
# ========================================
def sum_two_numbers(a, b):
    """Simulates the function from func.py"""
    result = a + b
    print(f"The sum of {a} and {b} is {result}")
    return result


# ========================================
# MAIN MENU
# ========================================
def main():
    while True:
        print("\n" + "=" * 60)
        print("          PYTHON EXERCISES - ALL IN ONE")
        print("=" * 60)
        print("1. Exercise 1  → Currency Class (Dunder Methods)")
        print("2. Exercise 2  → Import & Function")
        print("3. Exercise 3  → Random String (string module)")
        print("4. Exercise 4  → Current Date")
        print("5. Exercise 5  → Time until January 1st")
        print("6. Exercise 6  → Minutes lived since birth")
        print("7. Exercise 7  → Faker - Generate Fake Users")
        print("0. Exit")
        print("=" * 60)

        choice = input("\nEnter your choice (0-7): ").strip()

        if choice == "0":
            print("Thank you! Goodbye 👋")
            break

        elif choice == "1":
            print("\n--- Exercise 1: Currency Class ---")
            c1 = Currency('dollar', 5)
            c2 = Currency('dollar', 10)
            c3 = Currency('shekel', 1)

            print(c1)                    # 5 dollars
            print(int(c1))               # 5
            print(repr(c1))              # 5 dollars
            print(c1 + 5)                # 10 dollars
            print(c1 + c2)               # 15 dollars

            c1 += 5
            print(c1)                    # 10 dollars

            c1 += c2
            print(c1)                    # 20 dollars

        elif choice == "2":
            print("\n--- Exercise 2: Import & Function ---")
            sum_two_numbers(15, 27)
            sum_two_numbers(100, 250)

        elif choice == "3":
            print("\n--- Exercise 3: Random String ---")
            all_letters = string.ascii_letters
            random_string = ''.join(random.choice(all_letters) for _ in range(5))
            print("Generated random string of 5 letters:", random_string)

        elif choice == "4":
            print("\n--- Exercise 4: Current Date ---")
            today = datetime.now()
            print("Today's date:", today.strftime("%Y-%m-%d"))
            print("Full date & time:", today.strftime("%B %d, %Y - %H:%M:%S"))

        elif choice == "5":
            print("\n--- Exercise 5: Time until January 1st ---")
            today = datetime.now()
            next_year = today.year + 1
            new_year = datetime(next_year, 1, 1)
            time_left = new_year - today

            days = time_left.days
            hours = time_left.seconds // 3600
            minutes = (time_left.seconds % 3600) // 60

            print(f"Time left until January 1st, {next_year}:")
            print(f"→ {days} days, {hours} hours, and {minutes} minutes")

        elif choice == "6":
            print("\n--- Exercise 6: Minutes Lived ---")
            birth_str = input("Enter your birthdate (YYYY-MM-DD): ").strip()
            try:
                birth_date = datetime.strptime(birth_str, "%Y-%m-%d")
                today = datetime.now()
                minutes_lived = int((today - birth_date).total_seconds() // 60)
                print(f"You have lived approximately {minutes_lived:,} minutes so far!")
            except ValueError:
                print("❌ Invalid date format! Please use YYYY-MM-DD (e.g., 2000-05-15)")

        elif choice == "7":
            print("\n--- Exercise 7: Faker Module ---")
            try:
                from faker import Faker
                fake = Faker()

                num = int(input("How many fake users do you want to generate? "))
                if num < 1:
                    print("Please enter a number greater than 0.")
                    continue

                print(f"\nGenerating {num} fake users...\n")
                for i in range(1, num + 1):
                    user = {
                        "name": fake.name(),
                        "address": fake.address().replace("\n", ", "),
                        "language_code": fake.language_code()
                    }
                    print(f"User {i}:")
                    print(f"   Name     : {user['name']}")
                    print(f"   Address  : {user['address']}")
                    print(f"   Language : {user['language_code']}")
                    print("-" * 50)

            except ImportError:
                print("❌ Faker module is not installed.")
                print("   Please run this command in your terminal:")
                print("   pip install faker")
            except ValueError:
                print("❌ Please enter a valid number.")

        else:
            print("❌ Invalid choice! Please enter a number between 0 and 7.")

        input("\nPress Enter to continue...")


if __name__ == "__main__":
    main()