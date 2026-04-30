from anagram_checker import AnagramChecker

def main():
    print("🔠 Anagram Checker")
    print("=" * 50)

    # Create instance of AnagramChecker
    checker = AnagramChecker()

    while True:
        print("\nMenu:")
        print("1. Input a word")
        print("2. Exit")

        choice = input("Enter your choice (1 or 2): ").strip()

        if choice == "2":
            print("👋 Goodbye!")
            break

        elif choice == "1":
            user_input = input("\nEnter a word: ").strip()

            # Validation as requested
            if " " in user_input:
                print("❌ Error: Only a single word is allowed (no spaces).")
                continue
            if not user_input.isalpha():
                print("❌ Error: Only alphabetic characters are allowed.")
                continue
            if not user_input:
                print("❌ Error: Please enter a word.")
                continue

            # Process the word
            if checker.is_valid_word(user_input):
                anagrams = checker.get_anagrams(user_input)
                
                print(f'\nYOUR WORD : "{user_input.upper()}"')
                print("This is a valid English word.")
                
                if anagrams:
                    print("Anagrams for your word:", ", ".join(anagrams))
                else:
                    print("No anagrams found for your word.")
            else:
                print(f'\nYOUR WORD : "{user_input.upper()}"')
                print("This is NOT a valid English word.")
        
        else:
            print("❌ Invalid choice. Please enter 1 or 2.")


if __name__ == "__main__":
    main()