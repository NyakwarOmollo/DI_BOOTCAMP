import random

# ========================================
# Exercise 1: Pets (Inheritance + Polymorphism)
# ========================================

class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    pass   # No special behavior needed


# Test Exercise 1
print("=== Exercise 1: Pets ===")
all_cats = [
    Bengal("Tiger", 3),
    Chartreux("Luna", 5),
    Siamese("Shadow", 2)
]

sara_pets = Pets(all_cats)
sara_pets.walk()


# ========================================
# Exercise 2: Dogs
# ========================================

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        
        if my_power > other_power:
            return f"{self.name} won the fight against {other_dog.name}!"
        elif other_power > my_power:
            return f"{other_dog.name} won the fight against {self.name}!"
        else:
            return f"It's a tie between {self.name} and {other_dog.name}!"


# Test Exercise 2
print("\n=== Exercise 2: Dogs ===")
dog1 = Dog("Max", 5, 20)
dog2 = Dog("Buddy", 3, 15)
dog3 = Dog("Rocky", 7, 30)

print(dog1.bark())
print(f"{dog2.name}'s speed: {dog2.run_speed():.1f}")
print(dog1.fight(dog2))
print(dog3.fight(dog1))


# ========================================
# Exercise 3: PetDog (Inheritance + super())
# ========================================

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [self.name]
        for dog in args:
            names.append(dog.name)
        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", 
                      "stands on his back legs", 
                      "shakes your hand", 
                      "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet.")


# Test Exercise 3
print("\n=== Exercise 3: PetDog ===")
pet1 = PetDog("Fido", 2, 10)
pet2 = PetDog("Buddy", 4, 18)
pet3 = PetDog("Max", 1, 8)

pet1.train()
pet1.play(pet2, pet3)
pet1.do_a_trick()
pet2.do_a_trick()   


# ========================================
# Exercise 4: Family and Person
# ========================================

class Person:
    def __init__(self, first_name, age, last_name=""):
        self.first_name = first_name
        self.age = age
        self.last_name = last_name

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_member = Person(first_name, age, self.last_name)
        self.members.append(new_member)
        print(f"Welcome {first_name} {self.last_name} to the family!")

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name.lower() == first_name.lower():
                if member.is_18():
                    print(f"You are over 18, your parents accept that you will go out with your friends.")
                else:
                    print(f"Sorry, you are not allowed to go out with your friends.")
                return
        print(f"{first_name} is not a member of this family.")

    def family_presentation(self):
        print(f"\n=== {self.last_name} Family ===")
        for member in self.members:
            print(f"{member.first_name} - {member.age} years old")


# Test Exercise 4
print("\n=== Exercise 4: Family ===")
smith_family = Family("Smith")

smith_family.born("John", 40)
smith_family.born("Jane", 38)
smith_family.born("Emma", 17)
smith_family.born("Liam", 12)

smith_family.family_presentation()

smith_family.check_majority("Emma")
smith_family.check_majority("Liam")
smith_family.check_majority("John")