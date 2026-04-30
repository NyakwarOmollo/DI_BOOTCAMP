# =========================
# Exercise 1: Insert item at index
# =========================
def insert_at(lst, index, item):
    lst.insert(index, item)
    return lst


# =========================
# Exercise 2: Count spaces in a string
# =========================
def count_spaces(s):
    count = 0
    for char in s:
        if char == " ":
            count += 1
    return count


# =========================
# Exercise 3: Count uppercase and lowercase letters
# =========================
def count_case(s):
    upper = 0
    lower = 0

    for char in s:
        if char.isupper():
            upper += 1
        elif char.islower():
            lower += 1

    return upper, lower


# =========================
# Exercise 4: Sum of list (no built-in)
# =========================
def my_sum(lst):
    total = 0
    for num in lst:
        total += num
    return total


# =========================
# Exercise 5: Find max number in list
# =========================
def find_max(lst):
    max_val = lst[0]
    for num in lst:
        if num > max_val:
            max_val = num
    return max_val


# =========================
# Exercise 6: Factorial of a number
# =========================
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result


# =========================
# Exercise 7: Count element in list (no .count)
# =========================
def list_count(lst, element):
    count = 0
    for item in lst:
        if item == element:
            count += 1
    return count


# =========================
# Exercise 8: L2 Norm (square root of sum of squares)
# =========================
import math

def norm(lst):
    total = 0
    for num in lst:
        total += num ** 2
    return math.sqrt(total)


# =========================
# Exercise 9: Check if list is monotonic
# =========================
def is_mono(lst):
    increasing = True
    decreasing = True

    for i in range(len(lst) - 1):
        if lst[i] > lst[i + 1]:
            increasing = False
        if lst[i] < lst[i + 1]:
            decreasing = False

    return increasing or decreasing


# =========================
# Exercise 10: Print longest word in list
# =========================
def longest_word(lst):
    longest = lst[0]
    for word in lst:
        if len(word) > len(longest):
            longest = word
    print(longest)


# =========================
# Exercise 11: Separate integers and strings
# =========================
def separate(lst):
    ints = []
    strings = []

    for item in lst:
        if isinstance(item, int):
            ints.append(item)
        elif isinstance(item, str):
            strings.append(item)

    return ints, strings


# =========================
# Exercise 12: Check palindrome
# =========================
def is_palindrome(s):
    return s == s[::-1]


# =========================
# Exercise 13: Count words longer than k
# =========================
def sum_over_k(sentence, k):
    count = 0
    words = sentence.split()

    for word in words:
        if len(word) > k:
            count += 1

    return count


# =========================
# Exercise 14: Average of dictionary values
# =========================
def dict_avg(d):
    total = 0
    count = 0

    for value in d.values():
        total += value
        count += 1

    return total / count


# =========================
# Exercise 15: Common divisors of two numbers
# =========================
def common_div(a, b):
    result = []
    for i in range(1, min(a, b) + 1):
        if a % i == 0 and b % i == 0:
            result.append(i)
    return result


# =========================
# Exercise 16: Check if number is prime
# =========================
def is_prime(n):
    if n < 2:
        return False

    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False

    return True


# =========================
# Exercise 17: Print elements with even index and even value
# =========================
def weird_print(lst):
    result = []
    for i in range(len(lst)):
        if i % 2 == 0 and lst[i] % 2 == 0:
            result.append(lst[i])
    print(result)


# =========================
# Exercise 18: Count types of keyword arguments
# =========================
def type_count(**kwargs):
    counts = {}

    for value in kwargs.values():
        t = type(value).__name__
        counts[t] = counts.get(t, 0) + 1

    return counts


# =========================
# Exercise 19: Custom split function
# =========================
def my_split(s, delimiter=" "):
    result = []
    current = ""

    for char in s:
        if char == delimiter:
            if current:
                result.append(current)
                current = ""
        else:
            current += char

    if current:
        result.append(current)

    return result


# =========================
# Exercise 20: Convert string to password format
# =========================
def mask_password(s):
    return "*" * len(s)


# =========================
# Optional: Test examples
# =========================
if __name__ == "__main__":
    print(insert_at([1,2,3], 1, 99))
    print(count_spaces("Hello world here"))
    print(count_case("Hello World"))
    print(my_sum([1,5,4,2]))
    print(find_max([0,1,3,50]))
    print(factorial(4))
    print(list_count(['a','a','t','o'],'a'))
    print(norm([1,2,2]))
    print(is_mono([7,6,5,5,2,0]))
    longest_word(["cat","elephant","dog"])
    print(separate([1,"a",2,"b"]))
    print(is_palindrome("radar"))
    print(sum_over_k('Do or do not there is no try',2))
    print(dict_avg({'a':1,'b':2,'c':8,'d':1}))
    print(common_div(10,20))
    print(is_prime(11))
    weird_print([1,2,2,3,4,5])
    print(type_count(a=1,b='string',c=1.0,d=True,e=False))
    print(my_split("a,b,c", ","))
    print(mask_password("mypassword"))