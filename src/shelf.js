function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    for (let i = shelf.length; i > 0; i--) {
      shelf[i] = shelf[i - 1];
    }
    shelf[0] = book; 
  }
}

function unshelfBook(bookTitle, shelf) {
  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      for (let j = i; j < shelf.length - 1; j++) {
        shelf[j] = shelf[j + 1];
      }
      shelf.pop(); 
    }
  }
}

function listTitles(shelf) {
  if (shelf.length === 0) {
    return "";
  }
  let titles = "";
  for (let i = 0; i < shelf.length; i++) {
    titles += shelf[i].title;
    if (i < shelf.length - 1) {
      titles += ", "; 
    }
  }
  return titles;
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};