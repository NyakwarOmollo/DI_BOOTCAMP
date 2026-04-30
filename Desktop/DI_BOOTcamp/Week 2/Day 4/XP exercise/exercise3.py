import json
import random
import re

# ========================================
# EXERCISE 1: Restaurant Menu Manager (Valentine's Special)
# ========================================

class MenuManager:
    def __init__(self):
        self.menu = self.load_menu()

    def load_menu(self):
        try:
            with open("restaurant_menu.json", "r", encoding="utf-8") as f:
                return json.load(f)
        except FileNotFoundError:
            return {"items": [], "valentines_items": []}

    def save_menu(self):
        try:
            with open("restaurant_menu.json", "w", encoding="utf-8") as f:
                json.dump(self.menu, f, indent=4)
            print("✅ Menu saved successfully to restaurant_menu.json!")
            return True
        except Exception as e:
            print(f"❌ Error saving menu: {e}")
            return False

    def add_valentine_item(self, name: str, price: str):
        # Rule 1 & 2: Starts with V, proper capitalization
        if not re.match(r'^V([a-z]+ )*[A-Z][a-z]+(?: [a-z]+)*$', name):
            print(" Name must start with 'V' and each word must be properly capitalized.")
            return False

        # Rule 3: At least two 'e' or 'E'
        if name.lower().count('e') < 2:
            print(" Item name must contain at least two 'e' letters.")
            return False

        # Rule 4: No numbers in name
        if re.search(r'\d', name):
            print(" Item name cannot contain numbers.")
            return False

        # Rule 5: Price format XX,XX (e.g. 25,50)
        if not re.match(r'^\d{1,3},\d{2}$', price):
            print(" Price must be in format XX,XX (example: 35,50)")
            return False

        price_float = float(price.replace(',', '.'))
        new_item = {"name": name, "price": price_float}
        
        self.menu["valentines_items"].append(new_item)
        print(f" Successfully added Valentine's item: {name}")
        return True

    def show_valentine_menu(self):
        print("\n" + "" * 25)
        print("      VALENTINE'S SPECIAL MENU ")
        print("" * 25)
        if not self.menu.get("valentines_items"):
            print("   No Valentine's items yet.")
        else:
            for item in self.menu["valentines_items"]:
                print(f"   {item['name']:<30} ${item['price']:.2f}")
        print("" * 25)

    def show_heart(self):
        heart = [
            "   ***     ***   ",
            " *****   *****  ",
            "******* ******* ",
            " *************  ",
            "  ***********   ",
            "   *********    ",
            "    *******     ",
            "     *****      ",
            "      ***       ",
            "       *        "
        ]
        for line in heart:
            print(line.center(50))


# ========================================
# EXERCISE 2: Dungeons & Dragons Character Generator
# ========================================

class Character:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        self.attributes = self._roll_attributes()

    def _roll_attributes(self):
        abilities = ["Strength", "Dexterity", "Constitution", 
                    "Intelligence", "Wisdom", "Charisma"]
        stats = {}
        for ability in abilities:
            rolls = sorted([random.randint(1, 6) for _ in range(4)], reverse=True)
            stats[ability] = sum(rolls[:3])
        return stats

    def __str__(self):
        output = f"\n{'='*45}\n"
        output += f"   CHARACTER: {self.name.upper()} (Age: {self.age})\n"
        output += f"{'='*45}\n"
        for attr, value in self.attributes.items():
            output += f"{attr:15} : {value}\n"
        return output


class Game:
    def __init__(self):
        self.characters = []

    def create_characters(self):
        try:
            num = int(input("How many characters do you want to create? "))
            for i in range(num):
                print(f"\n--- Character {i+1} ---")
                name = input("Enter character name: ").strip()
                age = int(input("Enter character age: "))
                char = Character(name, age)
                self.characters.append(char)
                print(char)
        except ValueError:
            print(" Please enter valid numbers.")

    def save_to_txt(self):
        with open("dnd_characters.txt", "w", encoding="utf-8") as f:
            for char in self.characters:
                f.write(str(char))
                f.write("\n" + "-"*50 + "\n")
        print(" Characters saved to 'dnd_characters.txt'")

    def save_to_json(self):
        data = [{"name": c.name, "age": c.age, "attributes": c.attributes} 
                for c in self.characters]
        with open("dnd_characters.json", "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4)
        print(" Characters saved to 'dnd_characters.json'")


# ========================================
# MAIN PROGRAM MENU
# ========================================

def main():
    while True:
        print("\n" + "="*60)
        print("          PYTHON FINAL PROJECT")
        print("="*60)
        print("1. Restaurant Menu Manager (Valentine's Special)")
        print("2. Dungeons & Dragons Character Generator")
        print("0. Exit")
        print("="*60)

        choice = input("\nEnter your choice (0-2): ").strip()

        if choice == "0":
            print("Thank you for using the program! Goodbye ")
            break

        elif choice == "1":
            manager = MenuManager()
            while True:
                print("\n" + "-"*50)
                print("     VALENTINE'S MENU MANAGER")
                print("-"*50)
                print("1. Show Regular Menu")
                print("2. Show Valentine's Menu")
                print("3. Add Valentine Item")
                print("4. Show Heart ")
                print("5. Save & Back to Main Menu")
                print("-"*50)

                sub_choice = input("Choose option: ").strip()

                if sub_choice == "1":
                    print("\nRegular Menu:")
                    for item in manager.menu["items"]:
                        print(f"{item['name']:<25} ${item['price']:.2f}")
                elif sub_choice == "2":
                    manager.show_valentine_menu()
                elif sub_choice == "3":
                    name = input("Enter item name (must start with V): ").strip()
                    price = input("Enter price (e.g. 35,50): ").strip()
                    manager.add_valentine_item(name, price)
                elif sub_choice == "4":
                    manager.show_heart()
                elif sub_choice == "5":
                    manager.save_menu()
                    break
                else:
                    print("Invalid option.")

        elif choice == "2":
            print("\n DUNGEONS & DRAGONS CHARACTER GENERATOR ")
            game = Game()
            game.create_characters()
            game.save_to_txt()
            game.save_to_json()

        else:
            print(" Invalid choice! Please select 0, 1, or 2.")

        input("\nPress Enter to continue...")


if __name__ == "__main__":
    main()