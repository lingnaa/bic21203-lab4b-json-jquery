// Fetch and display books from books.json
async function loadBooks() {
    const errorElem = document.getElementById("errorMessage");
    const firstBookTitleElem = document.getElementById("firstBookTitle");
    const secondBookAuthorElem = document.getElementById("secondBookAuthor");
    const genresListElem = document.getElementById("genresList");

    try {
        const response = await fetch("books.json");

        if (!response.ok) {
            throw new Error(`Failed to load books.json (HTTP status: ${response.status})`);
        }

        const data = await response.json();

        if (!data || !Array.isArray(data.books) || data.books.length < 2) {
            throw new Error("Invalid data format: 'books' array must contain at least 2 book objects.");
        }

        const books = data.books;

        // (a) Title of the first book
        firstBookTitleElem.textContent = books[0].title;

        // (b) Author of the second book
        secondBookAuthorElem.textContent = books[1].author;

        // (c) Genres of both books, clearly grouped by book title
        genresListElem.textContent = "";
        books.forEach((book) => {
            const li = document.createElement("li");
            const genresText = Array.isArray(book.genres) ? book.genres.join(", ") : "";
            li.textContent = `${book.title} — ${genresText}`;
            genresListElem.appendChild(li);
        });
    } catch (error) {
        if (errorElem) {
            errorElem.textContent = `Error: ${error.message || "Failed to load book data."}`;
            errorElem.style.display = "block";
        }
    }
}

// Load book data once DOM is parsed
document.addEventListener("DOMContentLoaded", loadBooks);
