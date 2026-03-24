import random

# ========================================
# CORE CLASSES 
# ========================================

class Gene:
    """A single gene: either 0 or 1. It can mutate (flip)."""
    def __init__(self):
        self.value = random.choice([0, 1])

    def mutate(self):
        self.value = 1 - self.value   


class Chromosome:
    """10 Genes. Mutates by giving each gene a 50% chance to flip."""
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:      
                gene.mutate()

    def is_perfect(self):
        return all(gene.value == 1 for gene in self.genes)

    def __str__(self):
        return "".join(str(g.value) for g in self.genes)


class DNA:
    """10 Chromosomes. Mutates the same way a Chromosome does."""
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chrom in self.chromosomes:
            if random.random() < 0.5:
                chrom.mutate()

    def is_perfect(self):
        return all(chrom.is_perfect() for chrom in self.chromosomes)

    def __str__(self):
        return "\n".join(str(chrom) for chrom in self.chromosomes)


class Organism:
    """An organism has a DNA and lives in an environment that controls
       how likely its DNA is to mutate each generation."""
    def __init__(self, environment=0.1):   
        self.dna = DNA()
        self.environment = environment

    def mutate(self):
        """With probability = environment, the DNA mutates."""
        if random.random() < self.environment:
            self.dna.mutate()

    def is_perfect(self):
        return self.dna.is_perfect()


# ========================================
# SIMULATION
# ========================================

def simulate_evolution(population_size=200, max_generations=50000, environment=0.08):
    """Run until one organism reaches a perfect all-1s DNA."""
    population = [Organism(environment) for _ in range(population_size)]
    generation = 0

    print("Starting evolution simulation...\n")
    while generation < max_generations:
        generation += 1
        
        for organism in population:
            organism.mutate()
            if organism.is_perfect():
                print(f"🎉 PERFECT DNA FOUND in generation {generation}!")
                return generation

        if generation % 5000 == 0:
            print(f"  Generation {generation} – still searching...")

    print("Reached maximum generations without finding perfect DNA.")
    return None


# ========================================
# RUN THE EXPERIMENT
# ========================================

if __name__ == "__main__":
    generations_needed = simulate_evolution(
        population_size=200,
        environment=0.08,      
        max_generations=50000
    )