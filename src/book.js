function createTitle(title) {
  title = "The " + title;
  return title;
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return mainCharacter;
}

function saveReview(review, reviews) {
  var isDuplicate = false;
  for (var i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) {
      isDuplicate = true;
    }
  }
  if (isDuplicate) {
  } else {
    reviews.push(review);
  }
  return reviews;
}

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.length * 20
  return pageCount
}

function writeBook(title, mainCharacter, genre) {
  var pageCount = calculatePageCount(title); 
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    genre: genre,
    pageCount: pageCount,
  };
  return book;
}

function editBook(title) {
  var originalPageCount = title.pageCount;
  title.pageCount = originalPageCount * 0.75;
  return title;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}