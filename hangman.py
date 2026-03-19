import random

# Starter code
wordslist = [
    'correction', 'childish', 'beach', 'python', 'assertive',
    'interference', 'complete', 'share', 'credit card', 'rush', 'south'
]
word = random.choice(wordslist)

# Game setup
guessed_letters = set()
wrong_guesses = 0
max_wrong = 6

# Create display word (replace letters with *)
display_word = ["*" if char != " " else " " for char in word]

# Hangman stages
stages = [
    "",
    " O ",
    " O \n | ",
    " O \n/| ",
    " O \n/|\\",
    " O \n/|\\\n/ ",
    " O \n/|\\\n/ \\"
]


def display_game():
    print("\nWord: " + "".join(display_word))
    print("\nWrong guesses:", wrong_guesses)
    print(stages[wrong_guesses])
    print("Guessed letters:", ", ".join(sorted(guessed_letters)))


def play():
    global wrong_guesses

    print("🎮 Welcome to Hangman!")

    while True:
        display_game()

        guess = input("\nGuess a letter: ").lower()

        # Validate input
        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single valid letter.")
            continue

        if guess in guessed_letters:
            print("You already guessed that letter.")
            continue

        guessed_letters.add(guess)

        # Check if guess is correct
        if guess in word:
            print("✅ Correct guess!")

            for i in range(len(word)):
                if word[i] == guess:
                    display_word[i] = guess
        else:
            print("❌ Wrong guess!")
            wrong_guesses += 1

        # Check win
        if "*" not in display_word:
            print("\n🎉 You win! The word was:", word)
            break

        # Check lose
        if wrong_guesses == max_wrong:
            display_game()
            print("\n💀 Game over! The word was:", word)
            break


# Run the game
if __name__ == "__main__":
    play()