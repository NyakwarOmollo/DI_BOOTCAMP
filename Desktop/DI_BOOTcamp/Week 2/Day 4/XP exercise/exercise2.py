import json

class MenuManager:
    def __init__(self):
        self.menu = self.load_menu()

    def load_menu(self):
        """Load menu from JSON file"""
        try:
            with open("restaurant_menu.json", "r", encoding="utf-8") as file:
                return json.load(file)
        except FileNotFoundError:
            print("Warning: restaurant_menu.json not found. Starting with empty menu.")
            return {"items": []}

    def add_item(self, name: str, price: float):
        """Add new item to menu (in memory only)"""
        new_item = {"name": name, "price": price}
        self.menu["items"].append(new_item)
        print(f"Item '{name}' added successfully.")

    def remove_item(self, name: str):
        """Remove item by name. Returns True if successful, False otherwise."""
        for i, item in enumerate(self.menu["items"]):
            if item["name"].lower() == name.lower():
                del self.menu["items"][i]
                return True
        return False

    def save_to_file(self):
        """Save current menu to JSON file"""
        try:
            with open("restaurant_menu.json", "w", encoding="utf-8") as file:
                json.dump(self.menu, file, indent=4, ensure_ascii=False)
            print("Menu saved to file successfully!")
            return True
        except Exception as e:
            print(f"Error saving menu: {e}")
            return False

    def show_menu(self):
        """Display current restaurant menu"""
        print("\n" + "="*40)
        print("     RESTAURANT MENU")
        print("="*40)
        for item in self.menu["items"]:
            print(f"{item['name']:<25} ${item['price']:.2f}")
        print("="*40)