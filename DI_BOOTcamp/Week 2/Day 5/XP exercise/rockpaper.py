import random

class Game:
    def get_user_item(self):
        """Ask the user to select rock, paper, or scissors and validate input."""
        while True:
            user_input = input("\nEnter your choice (rock/paper/scissors): ").strip().lower()
            
            if user_input in ['rock', 'paper', 'scissors']:
                return user_input
            else:
                print(" Invalid choice! Please enter 'rock', 'paper', or 'scissors'.")

    def get_computer_item(self):
        """Randomly select rock, paper, or scissors for the computer."""
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        """Determine the result: 'win', 'draw', or 'loss'."""
        if user_item == computer_item:
            return "draw"
        
        # Winning conditions for user
        if (user_item == "rock" and computer_item == "scissors") or \
           (user_item == "paper" and computer_item == "rock") or \
           (user_item == "scissors" and computer_item == "paper"):
            return "win"
        else:
            return "loss"

    def play(self):
        """Play one round of Rock Paper Scissors."""
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        # Print the outcome
        print(f"\nYou chose: {user_item.capitalize()}")
        print(f"Computer chose: {computer_item.capitalize()}")
        
        if result == "win":
            print(" You Win!")
        elif result == "loss":
            print(" You Lose!")
        else:
            print(" It's a Draw!")

        return result


# ====================== MENU FUNCTIONS ======================

def get_user_menu_choice():
    """Display menu and get validated user choice."""
    while True:
        print("\n" + "=" * 45)
        print("        ROCK  PAPER  SCISSORS  GAME")
        print("=" * 45)
        print("1. Play a new game")
        print("2. Show current scores")
        print("3. Quit")
        print("=" * 45)
        
        choice = input("Enter your choice (1/2/3): ").strip()
        
        if choice in ['1', '2', '3']:
            return choice
        else:
            print(" Invalid choice! Please enter 1, 2, or 3.")


def print_results(results):
    """Print the final game statistics."""
    print("\n" + "=" * 45)
    print("           GAME OVER - FINAL RESULTS")
    print("=" * 45)
    print(f" Wins:    {results['win']}")
    print(f" Losses:  {results['loss']}")
    print(f" Draws:   {results['draw']}")
    print("=" * 45)
    print("Thank you for playing! ")


# ====================== MAIN FUNCTION ======================

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    
    print("Welcome to Rock Paper Scissors! 🎮")
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == "1":
            # Play a new game
            game = Game()
            result = game.play()
            
            # Update scores
            results[result] += 1
            
            input("\nPress Enter to continue...")  # Pause before showing menu again
            
        elif choice == "2":
            # Show current scores
            print("\n" + "=" * 45)
            print("           CURRENT SCORES")
            print("=" * 45)
            print(f" Wins:    {results['win']}")
            print(f" Losses:  {results['loss']}")
            print(f" Draws:   {results['draw']}")
            print("=" * 45)
            
            input("\nPress Enter to continue...")
            
        elif choice == "3":
            # Quit and show final results
            print_results(results)
            break


if __name__ == "__main__":
    main()