

// 1. Interface Book
interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;           // Optional property
}

// 2. Base Class: Library
class Library {
    private books: Book[] = [];   // Private array to store books

    // Public method to add a book
    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`✅ Book added: "${book.title}" by ${book.author}`);
    }

    // Public method to get book details by ISBN
    public getBookDetails(isbn: string): Book | undefined {
        const book = this.books.find(b => b.isbn === isbn);
        
        if (book) {
            return book;
        } else {
            console.log(`❌ No book found with ISBN: ${isbn}`);
            return undefined;
        }
    }

    // Protected method to get all books (useful for subclass)
    protected getAllBooks(): Book[] {
        return this.books;
    }
}

// 3. Subclass: DigitalLibrary (Inheritance)
class DigitalLibrary extends Library {
    public readonly website: string;   // Readonly property

    constructor(website: string) {
        super();                       // Call parent constructor
        this.website = website;
    }

    // Public method to list all book titles
    public listBooks(): string[] {
        return this.getAllBooks().map(book => book.title);
    }

    // Bonus: Method to list books with more details
    public listAllBooksDetails(): void {
        console.log(`\n📚 Books available on ${this.website}:`);
        this.getAllBooks().forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.publishedYear})`);
        });
    }
}


// Testing the Library System


console.log("🚀 Starting Digital Library System...\n");

// Create instance of DigitalLibrary
const myDigitalLibrary = new DigitalLibrary("https://digitallibrary.com");

// Add some books
myDigitalLibrary.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    publishedYear: 1925,
    genre: "Fiction"
});

myDigitalLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    publishedYear: 1949,
    genre: "Dystopian"
});

myDigitalLibrary.addBook({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0446310789",
    publishedYear: 1960
});

// Get details of a specific book
const bookDetails = myDigitalLibrary.getBookDetails("978-0743273565");
if (bookDetails) {
    console.log("\n📖 Book Details:");
    console.log(`Title: ${bookDetails.title}`);
    console.log(`Author: ${bookDetails.author}`);
    console.log(`ISBN: ${bookDetails.isbn}`);
    console.log(`Year: ${bookDetails.publishedYear}`);
    console.log(`Genre: ${bookDetails.genre || "Not specified"}`);
}

// List all book titles
console.log("\n📚 List of All Book Titles:");
const titles = myDigitalLibrary.listBooks();
titles.forEach((title, i) => {
    console.log(`${i + 1}. ${title}`);
});

// Show all books with details
myDigitalLibrary.listAllBooksDetails();

console.log(`\n🌐 Visit our website: ${myDigitalLibrary.website}`);