import random
import json
from pathlib import Path

# ========================================
# EXERCISE 1: Random Sentence Generator
# ========================================

def get_words_from_file(file_path="words.txt"):
    """Read words from a file and return them as a list."""
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
            words = content.split()          # split on whitespace
            # Optional: clean words (remove punctuation, make lowercase)
            words = [word.strip(".,!?\"'()[]{}").lower() for word in words if word.strip()]
            return words
    except FileNotFoundError:
        print(f" Error: File '{file_path}' not found!")
        print("Please make sure 'words.txt' is in the same folder as this script.")
        exit()
    except Exception as e:
        print(f" Error reading file: {e}")
        exit()


def get_random_sentence(length):
    """Generate a random sentence of given length."""
    words = get_words_from_file()
    
    if length < 2 or length > 20:
        raise ValueError("Sentence length must be between 2 and 20.")
    
    # Select random words
    selected_words = [random.choice(words) for _ in range(length)]
    
    # Join into sentence and make lowercase
    sentence = " ".join(selected_words)
    return sentence


def main_ex1():
    """Main function for Exercise 1"""
    print(" Random Sentence Generator ")
    print("This program generates a random sentence from a word list.\n")
    
    try:
        length = int(input("How long should the sentence be? (2-20 words): "))
        sentence = get_random_sentence(length)
        print("\nGenerated Sentence:")
        print(sentence.capitalize() + ".")
        
    except ValueError as e:
        print(f" Invalid input: {e}")
    except Exception as e:
        print(f" An error occurred: {e}")


# ========================================
# EXERCISE 2: Working with JSON
# ========================================

def process_json():
    """Exercise 2: Access nested key, add birth_date, and save to file"""
    
    sampleJson = """{ 
       "company":{ 
          "employee":{ 
             "name":"emma",
             "payable":{ 
                "salary":7000,
                "bonus":800
             }
          }
       }
    }"""
    
    # Step 1: Parse JSON string into Python dictionary
    data = json.loads(sampleJson)
    
    # Step 2: Access nested "salary" key
    salary = data["company"]["employee"]["payable"]["salary"]
    print(f"Employee salary: ${salary}")
    
    # Step 3: Add new key "birth_date" to employee
    data["company"]["employee"]["birth_date"] = "1995-08-15"
    
    # Step 4: Save modified JSON to file
    with open("updated_employee.json", "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4, ensure_ascii=False)
    
    print(" Modified JSON has been saved to 'updated_employee.json'")
    print("File contains the new 'birth_date' field.")


# ========================================
# MAIN PROGRAM MENU
# ========================================

def main():
    while True:
        print("\n" + "="*50)
        print("          PYTHON EXERCISES")
        print("="*50)
        print("1. Exercise 1 → Random Sentence Generator")
        print("2. Exercise 2 → Working with JSON")
        print("0. Exit")
        print("="*50)
        
        choice = input("\nEnter your choice (0-2): ").strip()
        
        if choice == "0":
            print("Goodbye! ")
            break
        elif choice == "1":
            main_ex1()
        elif choice == "2":
            print("\n--- Exercise 2: JSON Processing ---")
            process_json()
        else:
            print(" Invalid choice! Please enter 0, 1, or 2.")
        
        input("\nPress Enter to continue...")


if __name__ == "__main__":
    main()