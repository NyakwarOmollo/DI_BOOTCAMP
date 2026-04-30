import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0  # 0-based index for current page

    def get_total_pages(self):
        """Calculate total number of pages"""
        return math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        """Return the items for the current page"""
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        """Go to a specific page (1-based)"""
        if page_num < 1 or page_num > self.get_total_pages():
            raise ValueError(f"Page number must be between 1 and {self.get_total_pages()}")
        
        self.current_idx = page_num - 1  # convert to 0-based
        return self  # for method chaining

    def first_page(self):
        """Go to the first page"""
        self.current_idx = 0
        return self

    def last_page(self):
        """Go to the last page"""
        self.current_idx = self.get_total_pages() - 1
        return self

    def next_page(self):
        """Go to the next page (if possible)"""
        if self.current_idx < self.get_total_pages() - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        """Go to the previous page (if possible)"""
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        """Bonus: Nice string representation of current page"""
        visible = self.get_visible_items()
        return "\n".join(map(str, visible))


# ========================================
#               TESTING
# ========================================

if __name__ == "__main__":
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, page_size=4)

    print("Current page:", p.get_visible_items())          

    p.next_page()
    print("Next page:", p.get_visible_items())              

    p.next_page().next_page()   # method chaining!
    print("After two more next_page():", p.get_visible_items())

    p.last_page()
    print("Last page:", p.get_visible_items())              

    # Test go_to_page
    try:
        p.go_to_page(10)
    except ValueError as e:
        print("Error:", e)

    # Beautiful printing with __str__
    print("\nCurrent page nicely printed:")
    print(p)

    # Bonus chaining example
    print("\nMethod chaining example:")
    result = p.first_page().next_page().next_page().next_page().get_visible_items()
    print(result)   # Should show ['m', 'n', 'o', 'p']