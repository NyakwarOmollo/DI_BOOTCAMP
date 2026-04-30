# 1. Circle
class Circle:
    def __init__(self, r=1): self.r = r
    def area(self): return 3.14 * self.r ** 2
    def peri(self): return 6.28 * self.r

# 2. MyList
class MyList:
    def __init__(self, lst): self.lst = lst
    def rev(self): return self.lst[::-1]
    def sort(self): return sorted(self.lst)

# 3. Menu
class MenuManager:
    def __init__(self):
        self.items = [
            {"name":"Soup", "price":10},
            {"name":"Hamburger", "price":15},
            {"name":"Salad", "price":18}
        ]
    def add(self, name, price):
        self.items.append({"name":name, "price":price})
    def show(self):
        for x in self.items: print(x["name"], x["price"])

# Examples
print("Circle:")
c = Circle(4)
print(c.area())

print("\nMyList:")
m = MyList(["c", "a", "b"])
print(m.sort())

print("\nMenu:")
menu = MenuManager()
menu.show()
menu.add("Pizza", 22)
menu.show()