function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(library, book) {
  var genre = book.genre;
  if (library.shelves[genre]) {
    library.shelves[genre].push(book);
  }
}

function checkoutBook(library, bookTitle, genre) {
  if (library.shelves[genre]) {
    for (var i = 0; i < library.shelves[genre].length; i++) {
      var book = library.shelves[genre][i];
      if (book.title === bookTitle) {
        library.shelves[genre].splice(i, 1);
        return `You have now checked out ${bookTitle} from the ${library.name}.`;
      }
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`;
}

function takeStock(library, genre) {
  if (genre) {
    if (library.shelves[genre]) {
      const count = library.shelves[genre].length;
      return `There are a total of ${count} ${genre} books at the ${library.name}.`;
    } else {
      return `There are currently no ${genre} books at the ${library.name}.`;
    }
  } else {
    let totalCount = 0;
    for (const shelf in library.shelves) {
      totalCount += library.shelves[shelf].length;
    }
    return `There are a total of ${totalCount} books at the ${library.name}.`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};