class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }

   set state(newState) {
      if (newState < 0) {
         this._state = 0;
      } else if (newState > 100) {
         this._state = 100;
      } else {
         this._state = newState;
      }
   }

   get state() {
      return this._state;
   }

   fix() {
      this.state *= 1.5;
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
   }
}

class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
         console.log(`Книга "${book.name}" добавлена в библиотеку.`);
      } else {
         console.log(`Книга "${book.name}" не может быть добавлена из-за низкого состояния.`);
      }
   }

   findBookBy(type, value) {
      const foundBook = this.books.find(book => book[type] === value);
      return foundBook || null;
   }

   giveBookByName(bookName) {
      const index = this.books.findIndex(book => book.name === bookName);
      if (index !== -1) {
         const givenBook = this.books[index];
         this.books.splice(index, 1);
         console.log(`Книга "${givenBook.name}" выдана читателю.`);
         return givenBook;
      } else {
         console.log(`Книга "${bookName}" не найдена в библиотеке.`);
         return null;
      }
   }
}