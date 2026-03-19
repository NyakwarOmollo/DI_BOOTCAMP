sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop",     "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop",     "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500,  "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150,  "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550,  "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100,  "quantity": 2, "date": "2023-04-09"},
]

# Task 1: Total Sales by Product
total_sales = {}
for sale in sales_data:
    product = sale["product"]
    revenue = sale["price"] * sale["quantity"]
    if product in total_sales:
        total_sales[product] += revenue
    else:
        total_sales[product] = revenue

print("=== 1. Total Sales by Product ===")
for product, revenue in total_sales.items():
    print(f"{product:12} : ${revenue:,}")

# Task 2: Customer Spending Profile
customer_spending = {}
for sale in sales_data:
    cid = sale["customer_id"]
    amount = sale["price"] * sale["quantity"]
    customer_spending[cid] = customer_spending.get(cid, 0) + amount

print("\n=== 2. Customer Spending ===")
for cid, total in customer_spending.items():
    print(f"Customer {cid}: ${total:,}")

# Task 3: Add total_price to each transaction
for sale in sales_data:
    sale["total_price"] = sale["price"] * sale["quantity"]

print("\n=== 3. Sales Data Enhanced with total_price ===")
for sale in sales_data:
    print(sale)

# Task 4: High-Value Transactions (> $500)
high_value = [sale for sale in sales_data if sale["total_price"] > 500]
high_value.sort(key=lambda x: x["total_price"], reverse=True)

print("\n=== 4. High-Value Transactions (sorted) ===")
for sale in high_value:
    print(f"{sale['product']:12} | Total: ${sale['total_price']:,} | Customer: {sale['customer_id']}")

# Task 5: Customer Loyalty (more than 1 purchase)
purchase_count = {}
for sale in sales_data:
    cid = sale["customer_id"]
    purchase_count[cid] = purchase_count.get(cid, 0) + 1

loyal_customers = [cid for cid, count in purchase_count.items() if count > 1]

print("\n=== 5. Loyal Customers (2+ purchases) ===")
print(loyal_customers)

# Bonus: Additional Insights
print("\n=== Bonus: Extra Insights ===")

# Average transaction value per product
avg_transaction = {}
for product in total_sales:
    transactions = [sale for sale in sales_data if sale["product"] == product]
    avg = sum(s["total_price"] for s in transactions) / len(transactions)
    avg_transaction[product] = avg
    print(f"Average transaction for {product}: ${avg:.2f}")

# Most popular product by quantity sold
quantity_sold = {}
for sale in sales_data:
    product = sale["product"]
    quantity_sold[product] = quantity_sold.get(product, 0) + sale["quantity"]

most_popular = max(quantity_sold, key=quantity_sold.get)
print(f"\nMost popular product by quantity sold: {most_popular} ({quantity_sold[most_popular]} units)")