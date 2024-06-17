document.addEventListener("DOMContentLoaded", function () {
    const bookTitle = document.getElementById("inputBookTitle");
    const bookAuthor = document.getElementById("inputBookAuthor");
    const bookYear = document.getElementById("inputBookYear");
    const bookIsComplete = document.getElementById("inputBookIsComplete");
    const submitBook = document.getElementById("bookSubmit");
    const incompleteBookList = document.getElementById("incompleteBookshelfList");
    const completeBookList = document.getElementById("completeBookshelfList");
    const searchBookForm = document.getElementById("searchBook");

    const bookData = JSON.parse(localStorage.getItem("book")) || [];
    let books = bookData;

    submitBook.addEventListener("click", (e) => {
      e.preventDefault();
      addBook();
    });

    searchBookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      searchBook();
    });

    function addBook() {
      const { value: title } = bookTitle;
      const { value: author } = bookAuthor;
      const { value: year } = bookYear;
      const isComplete = bookIsComplete.checked;

      if (!title || !author || !year || isNaN(year)) {
        alert("Mohon lengkapi semua data buku, dan pastikan tahun berisi angka!");
        return;
      }

      const newBook = {
        id: +new Date(),
        title,
        author,
        year: parseInt(year, 10),
        isComplete,
      };
      books.push(newBook);
      saveBookToLocalStorage();

      isComplete
        ? addToCompleteBookshelf(newBook)
        : addToIncompleteBookshelf(newBook);

      clearForm();
      saveBookToLocalStorage();
    }

    function addToCompleteBookshelf(book) {
      completeBookList.appendChild(createBookData(book));
    }

    function addToIncompleteBookshelf(book) {
      incompleteBookList.appendChild(createBookData(book));
    }

    function searchBook() {
      const searchTitle = document
        .getElementById("searchBookTitle")
        .value.toLowerCase();
      const searchResults = books.filter((book) =>
        book.title.toLowerCase().includes(searchTitle)
      );

      clearBookshelves();

      searchResults.forEach((result) => {
        result.isComplete
          ? addToCompleteBookshelf(result)
          : addToIncompleteBookshelf(result);
      });
    }

    function createBookData(book) {
      const bookItem = document.createElement("article");
      bookItem.classList.add("book_item");
      bookItem.dataset.id = book.id;

      const bookTitle = document.createElement("h3");
      bookTitle.innerText = `Judul buku: ${book.title}`;
      bookItem.appendChild(bookTitle);

      const bookAuthor = document.createElement("p");
      bookAuthor.innerText = `Penulis: ${book.author}`;
      bookItem.appendChild(bookAuthor);

      const bookYear = document.createElement("p");
      bookYear.innerText = `Tahun: ${book.year}`;
      bookItem.appendChild(bookYear);

      const divWrapper = document.createElement("div");
      divWrapper.classList.add("action");
      bookItem.appendChild(divWrapper);

      const buttonCheck = document.createElement("button");
      buttonCheck.classList.add(book.isComplete ? "red" : "green");
      buttonCheck.innerText = book.isComplete
        ? "Belum selesai di Baca"
        : "Selesai dibaca";
      buttonCheck.addEventListener("click", () => toggleBookStat(book));
      divWrapper.appendChild(buttonCheck);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add(book.isComplete ? "red" : "green");
      deleteButton.innerText = "Hapus buku";
      deleteButton.addEventListener("click", () => deleteBook(book));
      divWrapper.appendChild(deleteButton);

      return bookItem;
    }

    function toggleBookStat(book) {
      book.isComplete = !book.isComplete;

      const bookItem = document.querySelector(`[data-id="${book.id}"]`);
      const buttonCheck = bookItem.querySelector("button");

      buttonCheck.classList.remove(book.isComplete ? "red" : "green");
      buttonCheck.classList.add(book.isComplete ? "green" : "red");
      buttonCheck.innerText = book.isComplete
        ? "Belum selesai di Baca"
        : "Selesai dibaca";

      book.isComplete
        ? completeBookList.appendChild(bookItem)
        : incompleteBookList.appendChild(bookItem);

      saveBookToLocalStorage();
    }

    function deleteBook(book) {
      const bookItem = document.querySelector(`[data-id="${book.id}"]`);
      const bookList = book.isComplete ? completeBookList : incompleteBookList;

      bookList.removeChild(bookItem);

      const bookIndex = books.findIndex((item) => item.id === book.id);
      books.splice(bookIndex, 1);

      saveBookToLocalStorage();
    }

    function clearForm() {
      [bookTitle, bookAuthor, bookYear].forEach((input) => (input.value = ""));
      bookIsComplete.checked = false;
    }

    function saveBookToLocalStorage() {
      localStorage.setItem("book", JSON.stringify(books));
    }

    function loadBooksFromLocalStorage() {
      const storedBooks = JSON.parse(localStorage.getItem("book")) || [];
      storedBooks.forEach((book) =>
        book.isComplete
          ? addToCompleteBookshelf(book)
          : addToIncompleteBookshelf(book)
      );
      books = storedBooks;
    }

    function clearBookshelves() {
      [incompleteBookList, completeBookList].forEach(
        (list) => (list.innerHTML = "")
      );
    }

    loadBooksFromLocalStorage();
    console.log(books);
  });