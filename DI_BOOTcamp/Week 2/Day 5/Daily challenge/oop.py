import random

class Card:
    """Represents a single playing card."""
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        """Nice string representation when printing the card."""
        return f"{self.value} of {self.suit}"


class Deck:
    """Represents a deck of 52 playing cards. Does NOT inherit from Card."""
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    def __init__(self):
        """Initialize a full deck of 52 cards."""
        self.cards = []
        for suit in Deck.suits:
            for value in Deck.values:
                self.cards.append(Card(suit, value))

    def shuffle(self):
        """Make sure the deck has all 52 cards, then shuffle randomly."""
        # Reset to full deck if needed
        if len(self.cards) != 52:
            self.cards = []
            for suit in Deck.suits:
                for value in Deck.values:
                    self.cards.append(Card(suit, value))
        
        random.shuffle(self.cards)
        print("Deck has been shuffled!")

    def deal(self):
        """Deal (remove and return) one card from the top of the deck."""
        if not self.cards:
            print("No cards left in the deck!")
            return None
        return self.cards.pop()   # pop() removes from the end (top)


# ================== Testing the Code ==================

if __name__ == "__main__":
    deck = Deck()
    print(f"Initial deck size: {len(deck.cards)} cards")

    deck.shuffle()

    print("\nDealing 5 cards:")
    for _ in range(5):
        card = deck.deal()
        if card:
            print(card)

    print(f"\nCards remaining in deck: {len(deck.cards)}")