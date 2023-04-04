var book1, book2;

function Book(_name) {
  this.name = _name;
}

Book.prototype.getName = function () {
  return this.name;
};
Book.prototype.getUpperName = function () {
  return this.getName().toLowerCase();
};

book1 = new Book('JavaScript with Promises');

Book.prototype.getUpperName = function () {
  return this.getName().toUpperCase();
};

Book.prototype = {
  getName: function () {
    return '"' + this.name + '"';
  },
};

book2 = new Book('JavaScript: The Definitive Guide, 6th Edition');

console.log(book2.prototype === book1.prototype); // true!!!

console.log(book1.getName()); // 'JavaScript with Promises'
console.log(book1.getUpperName()); // 'JAVASCRIPT WITH PROMISES'

console.log(book2.getName()); // "JavaScript: The Definitive Guide, 6th Edition"
console.log(book2.getUpperName()); // getUpperName is not a function
