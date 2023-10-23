const books = [
    {
        title: `book1`,
        author: `idk`
    },
    {
        title: `book2`,
        author: `idk`
    },
    {
        title: `book3`,
        author: `idk`
    },
    {
        title: `book4`,
        author: `idk`
    },
];

function getTheTitle(array){
    return array.map((book) => book.title);
}
    

console.log(getTheTitle(books));