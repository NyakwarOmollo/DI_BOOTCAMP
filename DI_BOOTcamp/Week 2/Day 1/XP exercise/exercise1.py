# Python OOP Exercises - All in One File
# Exercises: Cats, Dogs, Song, Zoo

# ────────────────────────────────────────
# Exercise 1: Cats
# ────────────────────────────────────────
class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age


def get_oldest_cat(*cats):
    oldest = cats[0]
    for cat in cats[1:]:
        if cat.age > oldest.age:
            oldest = cat
    return oldest


# ────────────────────────────────────────
# Exercise 2: Dogs
# ────────────────────────────────────────
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")


# ────────────────────────────────────────
# Exercise 3: Song
# ────────────────────────────────────────
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


# ────────────────────────────────────────
# Exercise 4: Zoo
# ────────────────────────────────────────
class Zoo:
    def __init__(self, name):
        self.name = name
        self.animals = []

    def add_animal(self, *new_animals):
        for animal in new_animals:
            if animal not in self.animals:
                self.animals.append(animal)

    def sell_animal(self, animal):
        if animal in self.animals:
            self.animals.remove(animal)
            print(f"→ {animal} was sold.")
        else:
            print(f"→ {animal} not found in the zoo.")

    def get_animals(self):
        if not self.animals:
            print("→ The zoo is empty.")
        else:
            print("Animals:", ", ".join(sorted(self.animals)))

    def sort_animals(self):
        self.animals.sort()
        groups = {}
        for animal in self.animals:
            letter = animal[0].upper()
            if letter not in groups:
                groups[letter] = []
            groups[letter].append(animal)
        return groups

    def get_groups(self):
        groups = self.sort_animals()
        if not groups:
            print("→ No animals to show.")
        else:
            print(f"\n{self.name} - Animal groups:")
            for letter in sorted(groups):
                print(f"  {letter}: {', '.join(groups[letter])}")


# ────────────────────────────────────────
# Demo / Menu
# ────────────────────────────────────────
def show_menu():
    print("\n" + "=" * 40)
    print("   OOP EXERCISES MENU")
    print("=" * 40)
    print("1. Cats - find oldest cat")
    print("2. Dogs - bark & jump + compare")
    print("3. Song - sing lyrics")
    print("4. Zoo - manage animals")
    print("0. Exit")
    print("=" * 40)


def main():
    while True:
        show_menu()
        choice = input("Enter number (0-4): ").strip()

        if choice == "0":
            print("\nGoodbye! 🌟\n")
            break

        elif choice == "1":
            print("\n--- Cats ---")
            cat1 = Cat("Whiskers", 4)
            cat2 = Cat("Luna", 7)
            cat3 = Cat("Milo", 2)
            oldest = get_oldest_cat(cat1, cat2, cat3)
            print(f"The oldest cat is {oldest.name}, {oldest.age} years old.")

        elif choice == "2":
            print("\n--- Dogs ---")
            davids_dog = Dog("Rex", 50)
            sarahs_dog = Dog("Teacup", 20)

            print(f"{davids_dog.name}: {davids_dog.height} cm")
            davids_dog.bark()
            davids_dog.jump()

            print(f"\n{sarahs_dog.name}: {sarahs_dog.height} cm")
            sarahs_dog.bark()
            sarahs_dog.jump()

            if davids_dog.height > sarahs_dog.height:
                print(f"\n{davids_dog.name} is bigger!")
            elif sarahs_dog.height > davids_dog.height:
                print(f"\n{sarahs_dog.name} is bigger!")
            else:
                print("\nSame size!")

        elif choice == "3":
            print("\n--- Song ---")
            stairway = Song([
                "There’s a lady who's sure",
                "All that glitters is gold",
                "And she’s buying a stairway to heaven"
            ])
            print("Stairway to Heaven:")
            stairway.sing_me_a_song()

        elif choice == "4":
            print("\n--- Zoo ---")
            zoo = Zoo("Nairobi Safari")
            zoo.add_animal("Zebra", "Lion", "Giraffe", "Baboon", "Cat", "Bear", "Cougar")
            zoo.get_animals()

            zoo.sell_animal("Bear")
            zoo.get_animals()

            zoo.get_groups()

        else:
            print("Please choose 0, 1, 2, 3 or 4")


if __name__ == "__main__":
    main()