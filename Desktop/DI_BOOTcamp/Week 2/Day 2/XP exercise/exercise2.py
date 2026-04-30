# ========================================
# Exercise: Bank Account System
# ========================================

class BankAccount:
    def __init__(self, username, password, initial_balance=0):
        self.username = username
        self.password = password
        self.balance = initial_balance
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            print(f"✅ Welcome, {self.username}!")
            return True
        return False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("❌ You must log in first!")
        if amount <= 0:
            raise Exception("❌ Deposit amount must be positive!")
        self.balance += amount
        print(f"✅ Deposited ${amount}. New balance: ${self.balance}")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("❌ You must log in first!")
        if amount <= 0:
            raise Exception("❌ Withdrawal amount must be positive!")
        if amount > self.balance:
            raise Exception("❌ Insufficient funds!")
        self.balance -= amount
        print(f"✅ Withdrew ${amount}. New balance: ${self.balance}")


# Part II: Minimum Balance Account (Inheritance)
class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, initial_balance=0, minimum_balance=0):
        super().__init__(username, password, initial_balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("❌ You must log in first!")
        if amount <= 0:
            raise Exception("❌ Withdrawal amount must be positive!")
        if self.balance - amount < self.minimum_balance:
            raise Exception(f"❌ Cannot withdraw! Minimum balance of ${self.minimum_balance} must be maintained.")
        if amount > self.balance:
            raise Exception("❌ Insufficient funds!")
        
        self.balance -= amount
        print(f"✅ Withdrew ${amount}. New balance: ${self.balance}")


# Part IV: BONUS - ATM Class
class ATM:
    def __init__(self, account_list, try_limit=2):
        # Validate account_list
        if not isinstance(account_list, list):
            raise Exception("account_list must be a list!")
        
        for acc in account_list:
            if not isinstance(acc, (BankAccount, MinimumBalanceAccount)):
                raise Exception("All items in account_list must be BankAccount or MinimumBalanceAccount!")

        # Validate try_limit
        if not isinstance(try_limit, (int, float)) or try_limit <= 0:
            print("⚠️ Invalid try_limit. Setting to default value 2.")
            try_limit = 2

        self.account_list = account_list
        self.try_limit = int(try_limit)
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        print("\n" + "="*40)
        print("          WELCOME TO THE ATM")
        print("="*40)

        while True:
            print("\n1. Log In")
            print("2. Exit")
            choice = input("Choose an option (1/2): ").strip()

            if choice == "1":
                self.log_in()
            elif choice == "2":
                print("Thank you for using our ATM. Goodbye!")
                break
            else:
                print("Invalid option. Please choose 1 or 2.")

    def log_in(self):
        while self.current_tries < self.try_limit:
            username = input("\nEnter username: ").strip()
            password = input("Enter password: ").strip()

            # Check all accounts
            for account in self.account_list:
                if account.authenticate(username, password):
                    self.show_account_menu(account)
                    return

            # No match
            self.current_tries += 1
            print(f"❌ Invalid credentials. Attempts left: {self.try_limit - self.current_tries}")

        print("\n❌ You have reached the maximum number of attempts.")
        print("The ATM will now shut down for security reasons.")
        exit()

    def show_account_menu(self, account):
        print(f"\n✅ Logged in as {account.username}")
        
        while True:
            print("\n--- Account Menu ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Check Balance")
            print("4. Logout")
            
            choice = input("Choose an option (1-4): ").strip()

            try:
                if choice == "1":
                    amount = float(input("Enter deposit amount: "))
                    account.deposit(amount)
                elif choice == "2":
                    amount = float(input("Enter withdrawal amount: "))
                    account.withdraw(amount)
                elif choice == "3":
                    print(f"Current balance: ${account.balance}")
                elif choice == "4":
                    account.authenticated = False
                    print("Logged out successfully.")
                    return
                else:
                    print("Invalid option.")
            except Exception as e:
                print(f"Error: {e}")


# ========================================
#               TESTING
# ========================================

if __name__ == "__main__":
    print("Creating accounts...\n")

    # Create some accounts
    acc1 = BankAccount("john", "1234", 500)
    acc2 = MinimumBalanceAccount("sarah", "pass123", 300, minimum_balance=100)
    acc3 = BankAccount("mike", "abc", 1000)

    accounts = [acc1, acc2, acc3]

    # Start the ATM
    atm = ATM(accounts, try_limit=3)