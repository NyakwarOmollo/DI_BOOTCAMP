class AnagramChecker:
    def __init__(self, word_list_file='words.txt'):
        """Load the word list into a set (lowercase)."""
        try:
            with open(word_list_file, 'r', encoding='utf-8', errors='ignore') as f:
                self.word_list = set(word.strip().lower() for word in f if word.strip())
            print(f"✅ Successfully loaded {len(self.word_list):,} words from {word_list_file}")
        except FileNotFoundError:
            print(f"❌ ERROR: File '{word_list_file}' not found!")
            print("   Please make sure 'words.txt' is in the same folder as your Python files.")
            self.word_list = set()
        except Exception as e:
            print(f"❌ Error reading word list: {e}")
            self.word_list = set()

    def is_valid_word(self, word):
        """Check if the given word is a valid English word."""
        if not word or not word.isalpha():
            return False
        return word.strip().lower() in self.word_list

    def is_anagram(self, word1, word2):
        """Check if two words are anagrams."""
        return sorted(word1.strip().lower()) == sorted(word2.strip().lower())

    def get_anagrams(self, word):
        """Return a list of all anagrams (excluding the original word)."""
        word = word.strip().lower()
        if not self.is_valid_word(word):
            return []

        anagrams = []
        sorted_word = sorted(word)
        for w in self.word_list:
            if sorted(w) == sorted_word and w != word:
                anagrams.append(w)
        return sorted(anagrams)