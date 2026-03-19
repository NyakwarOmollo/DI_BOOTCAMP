def get_full_name(first_name, last_name, middle_name=None):
    """Returns full name. Middle name is optional."""
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    
    return full_name.title()   # Capitalizes first letter of each word


# Test cases
print(get_full_name("john", "hooker", "lee"))   
print(get_full_name("bruce", "lee"))            
print(get_full_name("ada", "lovelace"))         
