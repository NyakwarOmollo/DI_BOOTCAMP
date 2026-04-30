import requests
import time

def measure_load_time(url, timeout=10):
    """Measure how long it takes to fully load a webpage."""
    try:
        start = time.perf_counter()           # Start timing
        response = requests.get(url, timeout=timeout)
        end = time.perf_counter()             # End timing
        
        load_time = end - start
        
        print(f"{url:40} → {load_time:.3f} seconds")
        return load_time
        
    except Exception as e:
        print(f"{url:40} → Error: {e}")
        return None


# Test with multiple websites
if __name__ == "__main__":
    sites = [
        "https://www.google.com",
        "https://www.ynet.co.il",
        "https://www.imdb.com",
        "https://www.python.org",
        "https://www.github.com",
        "https://www.wikipedia.org"
    ]
    
    print(" Webpage Load Time Tester\n")
    print("-" * 65)
    
    for site in sites:
        measure_load_time(site)