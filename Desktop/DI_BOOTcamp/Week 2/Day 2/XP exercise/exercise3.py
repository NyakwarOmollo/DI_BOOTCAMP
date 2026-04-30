import time
import os
from copy import deepcopy

# ==================== Conway's Game of Life ====================

class GameOfLife:
    def __init__(self, rows=10, cols=20, initial_state=None):
        self.rows = rows
        self.cols = cols
        
        # Create empty grid (0 = dead, 1 = alive)
        self.grid = [[0 for _ in range(cols)] for _ in range(rows)]
        
        # If initial state is provided, set it
        if initial_state:
            self.set_initial_state(initial_state)

    def set_initial_state(self, alive_cells):
        """alive_cells is a list of (row, col) tuples"""
        for r, c in alive_cells:
            if 0 <= r < self.rows and 0 <= c < self.cols:
                self.grid[r][c] = 1

    def count_neighbors(self, r, c):
        """Count live neighbors with fixed borders (cells outside = dead)"""
        count = 0
        for i in range(-1, 2):
            for j in range(-1, 2):
                if i == 0 and j == 0:
                    continue  # skip self
                nr, nc = r + i, c + j
                if 0 <= nr < self.rows and 0 <= nc < self.cols:
                    count += self.grid[nr][nc]
        return count

    def next_generation(self):
        """Create the next generation according to the rules"""
        new_grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]
        
        for r in range(self.rows):
            for c in range(self.cols):
                neighbors = self.count_neighbors(r, c)
                current = self.grid[r][c]
                
                if current == 1:  # Live cell
                    if neighbors < 2 or neighbors > 3:
                        new_grid[r][c] = 0  # dies
                    else:
                        new_grid[r][c] = 1  # lives
                else:  # Dead cell
                    if neighbors == 3:
                        new_grid[r][c] = 1  # born
                    else:
                        new_grid[r][c] = 0
        
        self.grid = new_grid

    def display(self):
        """Clear screen and print the current grid"""
        os.system('cls' if os.name == 'nt' else 'clear')  # clear terminal
        print(" Conway's Game of Life ".center(self.cols * 2))
        print("=" * (self.cols * 2))
        
        for row in self.grid:
            line = ""
            for cell in row:
                line += "■ " if cell == 1 else "· "
            print(line)
        print("=" * (self.cols * 2))

    def run(self, generations=50, delay=0.3):
        """Run the simulation for a number of generations"""
        for gen in range(generations + 1):
            self.display()
            print(f"Generation: {gen}   (Press Ctrl+C to stop)")
            if gen < generations:
                self.next_generation()
                time.sleep(delay)


# ==================== Some Cool Initial Patterns ====================

# 1. Glider (moves across the grid)
glider = [
    (1, 2), (2, 3), (3, 1), (3, 2), (3, 3)
]

# 2. Blinker (oscillator)
blinker = [
    (5, 5), (5, 6), (5, 7)
]

# 3. Toad (oscillator)
toad = [
    (8, 4), (8, 5), (8, 6),
    (9, 3), (9, 4), (9, 5)
]

# 4. Beacon (oscillator)
beacon = [
    (2, 2), (2, 3), (3, 2), (3, 3),
    (4, 4), (4, 5), (5, 4), (5, 5)
]

# 5. Random small pattern (you can make bigger)
random_pattern = [
    (3, 5), (3, 6), (4, 4), (4, 7), (5, 5), (5, 6)
]


# ==================== Run the Game ====================

if __name__ == "__main__":
    print("Welcome to Conway's Game of Life!\n")
    
    # Choose a pattern
    game = GameOfLife(rows=15, cols=30, initial_state=glider)
    # Try other patterns:
    # game = GameOfLife(rows=15, cols=30, initial_state=blinker)
    # game = GameOfLife(rows=15, cols=30, initial_state=toad)
    # game = GameOfLife(rows=15, cols=30, initial_state=beacon)

    try:
        game.run(generations=100, delay=0.25)
    except KeyboardInterrupt:
        print("\n\nGame stopped by user. Goodbye! 👋")