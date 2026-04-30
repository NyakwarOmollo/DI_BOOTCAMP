# Challenge 1: Sorting words separated by commas
print("Challenge 1 - Sort words")
text = input("Enter words (comma separated): ")
words = text.split(",")

# Remove extra spaces and empty items
clean_words = []
for w in words:
    cleaned = w.strip()
    if cleaned:
        clean_words.append(cleaned)

clean_words.sort()
print("→ Result:", ",".join(clean_words))
print()


# Challenge 2: Find the longest word in a sentence
print("Challenge 2 - Longest word")
sentence = input("Enter a sentence: ")
words = sentence.split()

if words:  # make sure we have at least one word
    longest = words[0]
    for word in words:
        if len(word) > len(longest):
            longest = word
    print("→ Longest word:", longest)
else:
    print("→ No words found")