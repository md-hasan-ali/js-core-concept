var book = {
    Id:22,
    Price:2555,
    color:"red",
    author:"Denial Cropt",
}
console.log(book);
console.log(book.color);

book.color = "yellow";
console.log(book);

book["id"] = 200;
console.log(book);

var bookauthor = "author";
book[bookauthor] = "Jhon Due";

console.log(book);