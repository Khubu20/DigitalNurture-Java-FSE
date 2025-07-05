package org.example.Service;
import org.example.repository.BookRepository;
public class BookService {
    private BookRepository bookRepository;

    // Setter for Spring to inject dependency
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("Adding book in service: " + bookName);
        bookRepository.saveBook(bookName);
    }
}
