async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    console.log(books)
    books.forEach(renderBookUI)
}

function renderBookUI (book){
    let bookListUI = document.getElementById('root')
    bookListUI.innerHTML += `
            <label for='${book.quantity}'>${book.title}</label>
            <input type='text' id='book${book.id}' name='${book.quantity}' value='${book.quantity}'>
            <input type='submit' value='Sumbit'>
        `
}

async function updateQuantity (id, quantity) {
    let response = await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'id':id, 'quantity':quantity,})
    ,})
}


main()

// async function maiin() {
//     let response = await fetch('http://localhost:3001/updateBook', {
//         method: 'PATCH', 
//         headers: {'Content-Type': 'application/json'}, 
//         body: JSON.stringify({ 'id':3, 'title':'Legends of Arathrae',}),});
//             let updatedBook = await response.json();
//             console.log(updatedBook)
// }
        
//         maiin()