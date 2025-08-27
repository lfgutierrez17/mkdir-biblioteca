class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.borrowedBy = null;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(' Libro agregado: "${book.title}" de ${book.author}');
    }

    borrowBook(title, user) {
        const book = this.books.find(b => b.title === title);
        if (!book) {
            console.log(' El libro "${title}" no existe en la biblioteca.');
            return;
        }
        if (book.isBorrowed) {
            console.log(' El libro "${title}" ya está prestado a ${book.borrowedBy}.');
        } else {
            book.isBorrowed = true;
            book.borrowedBy = user;
            console.log(' El libro "${book.title}" fue prestado a ${user}.');
        }
    }

    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (!book) {
            console.log(' El libro "${title}" no existe en la biblioteca.');
            return;
        }
        if (!book.isBorrowed) {
            console.log('El libro "${title}" no estaba prestado.');
        } else {
            console.log(' El libro "${book.title}" fue devuelto por ${book.borrowedBy}.');
            book.isBorrowed = false;
            book.borrowedBy = null;
        }
    }

    searchBook(title) {
        const results = this.books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
        if (results.length > 0) {
            console.log("🔍 Resultados de búsqueda:");
            results.forEach(b => {
                console.log(`- "${b.title}" de ${b.author} ${b.isBorrowed ? `(Prestado a ${b.borrowedBy})` : "(Disponible)"}`);
            });
        } else {
            console.log('No se encontraron libros con el título que contenga "${title}".');
        }
    }

    listBooks() {
        console.log(" Lista de libros en la biblioteca:");
        this.books.forEach(b => {
            console.log(`- ${b.title}" de ${b.author} ${b.isBorrowed ? `(Prestado a ${b.borrowedBy})` : "(Disponible)"}`);
        });
    }

    listBorrowedBooks() {
        const borrowed = this.books.filter(b => b.isBorrowed);
        if (borrowed.length > 0) {
            console.log(" Libros prestados:");
            borrowed.forEach(b => {
                console.log(- '${b.title}" (por ${b.borrowedBy})');
            });
        } else {
            console.log(" No hay libros prestados actualmente.");
        }
    }
}

const myLibrary = new Library();

myLibrary.addBook(new Book("El juego de Ender", "Orson Scott Card"));
myLibrary.addBook(new Book("Cien años de soledad", "Gabriel García Márquez"));
myLibrary.addBook(new Book("La biblioteca de Babel", "Jorge Luis Borges"));

myLibrary.listBooks();

myLibrary.borrowBook("El juego de Ender", "Felipe");
myLibrary.listBorrowedBooks();

myLibrary.returnBook("El juego de Ender");
myLibrary.listBorrowedBooks();

myLibrary.searchBook("soledad");