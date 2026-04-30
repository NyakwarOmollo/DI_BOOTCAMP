import random

# ========================================
# EXERCISE 1: Temperature (Best Design - SOLID Friendly)
# ========================================

class Temperature:
    """Base class for all temperature scales"""
    
    def __init__(self, value: float):
        self.value = value

    def to_celsius(self) -> float:
        raise NotImplementedError("Subclasses must implement to_celsius()")

    def to_fahrenheit(self) -> float:
        raise NotImplementedError("Subclasses must implement to_fahrenheit()")

    def to_kelvin(self) -> float:
        raise NotImplementedError("Subclasses must implement to_kelvin()")

    def __str__(self):
        return f"{self.value:.2f} {self.__class__.__name__}"


class Celsius(Temperature):
    def to_celsius(self):
        return self.value

    def to_fahrenheit(self):
        return (self.value * 9/5) + 32

    def to_kelvin(self):
        return self.value + 273.15


class Fahrenheit(Temperature):
    def to_celsius(self):
        return (self.value - 32) * 5/9

    def to_fahrenheit(self):
        return self.value

    def to_kelvin(self):
        return (self.value - 32) * 5/9 + 273.15


class Kelvin(Temperature):
    def to_celsius(self):
        return self.value - 273.15

    def to_fahrenheit(self):
        return (self.value - 273.15) * 9/5 + 32

    def to_kelvin(self):
        return self.value


# ========================================
# EXERCISE 2: Quantum Particle
# ========================================

class QuantumParticle:
    """Represents a quantum particle with position, momentum, and spin."""

    def __init__(self, x: int = None, p: float = None):
        self.position = x if x is not None else random.randint(1, 10000)
        self.momentum = p if p is not None else round(random.uniform(0, 1), 4)
        self.spin = random.choice([0.5, -0.5])
        self.entangled_with = None   # Reference to another particle if entangled

    def measure_position(self):
        self._apply_disturbance()
        new_pos = random.randint(1, 10000)
        self.position = new_pos
        print(f"Position measured: {new_pos}")
        return new_pos

    def measure_momentum(self):
        self._apply_disturbance()
        new_momentum = round(random.uniform(0, 1), 4)
        self.momentum = new_momentum
        print(f"Momentum measured: {new_momentum}")
        return new_momentum

    def measure_spin(self):
        self._apply_disturbance()
        # If entangled, opposite spin is set on the other particle
        if self.entangled_with:
            self.spin = -self.entangled_with.spin
            print(f"Spin measured (entangled): {self.spin}")
        else:
            self.spin = random.choice([0.5, -0.5])
            print(f"Spin measured: {self.spin}")
        return self.spin

    def _apply_disturbance(self):
        """Every measurement causes quantum disturbance"""
        self.position = random.randint(1, 10000)
        self.momentum = round(random.uniform(0, 1), 4)
        print("⚠️  Quantum Interference!!")

    def entangle(self, other_particle):
        """Entangle this particle with another QuantumParticle"""
        if not isinstance(other_particle, QuantumParticle):
            raise TypeError("Can only entangle with another QuantumParticle!")

        if self is other_particle:
            raise ValueError("A particle cannot entangle with itself!")

        self.entangled_with = other_particle
        other_particle.entangled_with = self

        print(f"🌌 Spooky Action at a Distance!")
        print(f"Particle 1 and Particle 2 are now entangled!")

    def __repr__(self):
        status = f"entangled with another particle" if self.entangled_with else "not entangled"
        return (f"QuantumParticle(position={self.position}, "
                f"momentum={self.momentum}, spin={self.spin}, status={status})")


# ========================================
# TESTING BOTH EXERCISES
# ========================================

if __name__ == "__main__":
    print("=== EXERCISE 1: Temperature Conversion ===\n")

    c = Celsius(25)
    f = Fahrenheit(77)
    k = Kelvin(298.15)

    print(f"Celsius(25)     → Fahrenheit: {c.to_fahrenheit():.2f}°F")
    print(f"Fahrenheit(77)  → Celsius:    {f.to_celsius():.2f}°C")
    print(f"Kelvin(298.15)  → Celsius:    {k.to_celsius():.2f}°C")
    print(f"Celsius(25)     → Kelvin:     {c.to_kelvin():.2f} K\n")

    print("=== EXERCISE 2: Quantum Particle ===\n")

    p1 = QuantumParticle()
    p2 = QuantumParticle()

    print("Initial particles:")
    print("p1:", p1)
    print("p2:", p2)

    print("\n--- Measurements ---")
    p1.measure_position()
    p2.measure_momentum()
    p1.measure_spin()

    print("\n--- Entanglement ---")
    p1.entangle(p2)

    print("\nAfter entanglement - Measuring spin of p1:")
    p1.measure_spin()   # Should affect p2 as well

    print("\nFinal state:")
    print("p1:", p1)
    print("p2:", p2)