class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}   # empty dictionary to store animal: count

    def add_animal(self, animal_type=None, count=1, **kwargs):
        """
        Add animals in two ways:
        1. Old way: add_animal('cow', 5)
        2. New way (bonus): add_animal(cow=5, sheep=2, goat=12)
        """
        # Handle the **kwargs style (bonus part)
        if kwargs:
            for animal, qty in kwargs.items():
                self._add_one_animal(animal, qty)
            return

        # Handle the original style: animal_type + count
        if animal_type:
            self._add_one_animal(animal_type, count)

    def _add_one_animal(self, animal_type, count):
        """Helper method to avoid code duplication"""
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        if not self.animals:
            return f"{self.name}'s farm\n\n    E-I-E-I-0!"

        result = [f"{self.name}'s farm\n"]
        for animal, qty in sorted(self.animals.items()):
            result.append(f"{animal} : {qty}")
        result.append("\n    E-I-E-I-0!")
        
        return "\n".join(result)

    # ──────────────── Bonus ────────────────

    def get_animal_types(self):
        """Returns a sorted list of all animal types"""
        return sorted(self.animals.keys())

    def get_short_info(self):
        """Returns something like: McDonald's farm has cows, goats and sheep."""
        types = self.get_animal_types()
        if not types:
            return f"{self.name}'s farm has no animals."

        animal_list = []
        for animal in types:
            count = self.animals[animal]
            name = animal if count == 1 else animal + "s"
            animal_list.append(name)

        # Join with commas and "and" before last item
        if len(animal_list) == 1:
            animals_str = animal_list[0]
        elif len(animal_list) == 2:
            animals_str = f"{animal_list[0]} and {animal_list[1]}"
        else:
            animals_str = ", ".join(animal_list[:-1]) + f" and {animal_list[-1]}"

        return f"{self.name}'s farm has {animals_str}."


# ────────────────────────────────────────
#               Testing
# ────────────────────────────────────────

print("=== Test 1 – Basic usage ===")
macdonald = Farm("McDonald")

macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')          
macdonald.add_animal('sheep')          
macdonald.add_animal('goat', 12)

print(macdonald.get_info())

print("\n=== Test 2 – Bonus: kwargs style + short info ===")
macdonald2 = Farm("Old")

macdonald2.add_animal(cow=5, sheep=2, goat=12, dog=1)

print(macdonald2.get_info())
print()
print(macdonald2.get_short_info())

print("\n=== Test 3 – Animal types ===")
print("Animal types:", macdonald2.get_animal_types())