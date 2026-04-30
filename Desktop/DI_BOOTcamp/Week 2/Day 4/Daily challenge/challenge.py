import string
import re
from collections import Counter

# ========================================
# Part I: Text Class
# ========================================

class Text:
    def __init__(self, text: str):
        self.text = text.strip()

    def word_frequency(self, word: str):
        """Return how many times a word appears in the text"""
        if not word:
            return 0
        words = self.text.lower().split()
        count = words.count(word.lower())
        return count if count > 0 else None

    def most_common_word(self):
        """Return the most common word in the text"""
        if not self.text:
            return None
        words = self.text.lower().split()
        word_counts = Counter(words)
        most_common = word_counts.most_common(1)
        return most_common[0][0] if most_common else None

    def unique_words(self):
        """Return a list of unique words"""
        words = self.text.lower().split()
        return sorted(list(set(words)))

    @classmethod
    def from_file(cls, file_path: str):
        """Create a Text object from a file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            return cls(content)
        except FileNotFoundError:
            print(f"Error: File '{file_path}' not found.")
            return None
        except Exception as e:
            print(f"Error reading file: {e}")
            return None

    def __str__(self):
        return f"Text object with {len(self.text.split())} words"


# ========================================
# Part II: TextModification Class (Inheritance + Bonus)
# ========================================

class TextModification(Text):
    """Inherits from Text and adds text cleaning methods"""

    def remove_punctuation(self):
        """Remove all punctuation from the text"""
        translator = str.maketrans('', '', string.punctuation)
        clean_text = self.text.translate(translator)
        return clean_text

    def remove_stop_words(self):
        """Remove common English stop words"""
        stop_words = {
            'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 
            'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 
            'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 
            'will', 'would', 'shall', 'should', 'can', 'could', 'may', 
            'might', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 
            'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their'
        }
        
        words = self.text.lower().split()
        filtered_words = [word for word in words if word not in stop_words]
        return " ".join(filtered_words)

    def remove_special_characters(self):
        """Remove special characters using regex"""
        # Keep only letters, numbers, and spaces
        clean_text = re.sub(r'[^a-zA-Z0-9\s]', '', self.text)
        return clean_text

    def clean_text(self):
        """Apply all cleaning methods in sequence"""
        text = self.remove_punctuation()
        text = TextModification(text)  # Create new instance for next cleaning
        text = text.remove_stop_words()
        text = TextModification(text)
        text = text.remove_special_characters()
        return text


# ========================================
# TESTING THE CLASSES
# ========================================

if __name__ == "__main__":
    print("=== Text Analysis Program ===\n")

    # Sample text
    sample_text = """Hello world! This is a test. Hello again. 
                     Python is amazing. Python is powerful."""

    # Exercise 1: Using Text class
    text_obj = Text(sample_text)

    print("Original Text:")
    print(text_obj)
    print("-" * 50)

    print(f"Frequency of 'python': {text_obj.word_frequency('python')}")
    print(f"Frequency of 'hello': {text_obj.word_frequency('hello')}")
    print(f"Most common word: {text_obj.most_common_word()}")
    print(f"Unique words: {text_obj.unique_words()[:10]}...")  # first 10

    # Exercise 2: Using TextModification class
    print("\n" + "="*50)
    print("TEXT CLEANING DEMO")
    print("="*50)

    mod_text = TextModification(sample_text)

    print("1. After removing punctuation:")
    print(mod_text.remove_punctuation())

    print("\n2. After removing stop words:")
    print(mod_text.remove_stop_words())

    print("\n3. After removing special characters:")
    print(mod_text.remove_special_characters())

    print("\n4. Fully cleaned text:")
    print(mod_text.clean_text())

    # Bonus: Reading from file (if you have a file)
    # text_from_file = Text.from_file("sample.txt")
    # if text_from_file:
    #     print("\nText loaded from file successfully!")