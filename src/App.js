import React from "react";
import axios from 'axios';
import Book from "./components/Book/Book";
import BookFilter from "./components/BookFilter/BookFilter";

function App() {
const [booksData, setBooksData] = React.useState([])

React.useEffect(() =>{
  getData()
},[])

async function getData(){
  await axios.get('./books.json')
  .then(response =>{
    setBooksData(response.data)
  })
  .catch(err =>{
    console.log(err)
  })
}

const filterBooks = (value) =>{
  const filteredBooks = booksData.filter(book =>{
    return book.category.toLowerCase().includes(value.toLowerCase())
  })
  setBooksData(filteredBooks)
}
  
  return (
    <div className="wrapper">
      <div className="app">
        <div className="app__body">
          <div>
            <BookFilter filterBooks={filterBooks} />
          </div>

          {booksData.map(book => (
            <Book key={book.id} book={book} />
          ))}


        </div>
      </div>
    </div>
  );
}

export default App;
