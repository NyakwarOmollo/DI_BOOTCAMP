class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        message = f"{self.phone_number} called {other_phone.phone_number}"
        print(message)
        self.call_history.append(message)

    def show_call_history(self):
        if not self.call_history:
            print("No calls yet.")
        else:
            print(f"Call history for {self.phone_number}:")
            for call in self.call_history:
                print("  •", call)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")
        print(f"  → {content}")
        
        # Save to sender's outgoing messages
        self.messages.append(message)
        
        # Also save to receiver's incoming messages (same dict)
        other_phone.messages.append(message)

    def show_outgoing_messages(self):
        print(f"\nOutgoing messages from {self.phone_number}:")
        found = False
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(f"  → to {msg['to']}: {msg['content']}")
                found = True
        if not found:
            print("  (no outgoing messages)")

    def show_incoming_messages(self):
        print(f"\nIncoming messages to {self.phone_number}:")
        found = False
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(f"  ← from {msg['from']}: {msg['content']}")
                found = True
        if not found:
            print("  (no incoming messages)")

    def show_messages_from(self, other_phone):
        number = other_phone.phone_number
        print(f"\nMessages between {self.phone_number} and {number}:")
        found = False
        for msg in self.messages:
            if (msg["from"] == number and msg["to"] == self.phone_number) or \
               (msg["from"] == self.phone_number and msg["to"] == number):
                direction = "→" if msg["from"] == self.phone_number else "←"
                print(f"  {direction} {msg['content']}")
                found = True
        if not found:
            print("  (no messages found)")


# ───────────────────────────────────────
#    Testing the code
# ───────────────────────────────────────

print("=== Testing Phones ===\n")

# Create two phones
iphone = Phone("+254-712-345-678")
samsung = Phone("+254-723-987-654")

# Make some calls
iphone.call(samsung)
samsung.call(iphone)
iphone.call(samsung)

print()
iphone.show_call_history()
print()
samsung.show_call_history()

# Send some messages
iphone.send_message(samsung, "Hey, are you free tonight?")
samsung.send_message(iphone, "Yes! Movie at 8?")
iphone.send_message(samsung, "Perfect, see you there!")

# Show messages
print("\n" + "="*40)
iphone.show_outgoing_messages()
iphone.show_incoming_messages()

print("\n" + "="*40)
samsung.show_outgoing_messages()
samsung.show_incoming_messages()

# Messages from a specific person
print("\n" + "="*40)
print("Messages Calvin sent to Sarah:")
iphone.show_messages_from(samsung)

print("\n" + "="*40)
print("Messages Sarah sent to Calvin:")
samsung.show_messages_from(iphone)