import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either radius or diameter")

    # Property for diameter (using decorator)
    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        if value <= 0:
            raise ValueError("Diameter must be positive")
        self.radius = value / 2

    # Compute Area
    def area(self):
        return math.pi * self.radius ** 2

    # String representation
    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f}, area={self.area():.2f})"

    def __repr__(self):
        return f"Circle(radius={self.radius})"

    # Add two circles → returns new circle with sum of radii
    def __add__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only add Circle to Circle")
        new_radius = self.radius + other.radius
        return Circle(radius=new_radius)

    # Greater than comparison (based on radius)
    def __gt__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare Circle with Circle")
        return self.radius > other.radius

    # Equal comparison
    def __eq__(self, other):
        if not isinstance(other, Circle):
            return False
        return self.radius == other.radius

    # Less than (needed for sorting)
    def __lt__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare Circle with Circle")
        return self.radius < other.radius


# ========================================
# TESTING THE CIRCLE CLASS
# ========================================

if __name__ == "__main__":
    print("=== Circle Class Demo ===\n")

    # Create circles using radius or diameter
    c1 = Circle(radius=5)
    c2 = Circle(diameter=20)   # radius = 10
    c3 = Circle(radius=7)
    c4 = Circle(radius=3)

    print("Created Circles:")
    print(c1)
    print(c2)
    print(c3)
    print(c4)

    print("\n--- Area ---")
    print(f"Area of c1: {c1.area():.2f}")
    print(f"Area of c2: {c2.area():.2f}")

    print("\n--- Addition ---")
    c5 = c1 + c2
    print(f"c1 + c2 = {c5}")

    print("\n--- Comparisons ---")
    print(f"c1 > c3  → {c1 > c3}")
    print(f"c4 < c1  → {c4 < c1}")
    print(f"c1 == c2  → {c1 == c2}")

    # Sorting circles
    circles = [c1, c2, c3, c4]
    circles.sort()

    print("\n--- Sorted Circles (by radius) ---")
    for circle in circles:
        print(circle)

    # Bonus: Visual representation using Turtle (Optional)
    try:
        import turtle
        print("\n--- Drawing Sorted Circles with Turtle ---")

        t = turtle.Turtle()
        t.speed(0)
        screen = turtle.Screen()
        screen.bgcolor("white")

        colors = ["red", "blue", "green", "purple"]
        x = -200

        for i, circle in enumerate(circles):
            t.penup()
            t.goto(x, 0)
            t.pendown()
            t.color(colors[i % len(colors)])
            t.circle(circle.radius * 5)   # scaled for visibility
            t.penup()
            t.goto(x, -circle.radius * 5 - 20)
            t.write(f"r={circle.radius:.1f}", align="center")
            x += circle.radius * 10 + 30

        turtle.done()

    except ImportError:
        print("\nTurtle module not available. Skipping drawing.")
    except:
        print("\nCould not open Turtle window.")