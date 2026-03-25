def sort_words():
    text = input("Words (comma separated): ")
    words = [w.strip() for w in text.split(",") if w.strip()]
    if words:
        words.sort()
        print("Sorted:", ",".join(words))
    else:
        print("No words found")

def longest_word():
    sentence = input("Sentence: ")
    words = sentence.split()
    if not words:
        print("No words found")
        return
    longest = words[0]
    for w in words:
        if len(w) > len(longest):
            longest = w
    print("Longest:", longest)

while True:
    print("\n1 = sort   2 = longest   0 = exit")
    ch = input("Choice: ").strip()
    if ch == "1":
        sort_words()
    elif ch == "2":
        longest_word()
    elif ch == "0":
        print("Bye!")
        break
    else:
        print("Use 0, 1 or 2")