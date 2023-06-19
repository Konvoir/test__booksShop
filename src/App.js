import React from "react";
import axios from 'axios';
import './App.css';
import Book from "./components/Book/Book";
import BookFilter from "./components/BookFilter/BookFilter";

function App() {
const [booksData, setBooksData] = React.useState([])
const [orderBy, setOrderBy] = React.useState(false)

React.useEffect(() =>{
  getData()
},[])

async function getData(){
  try{
  let response = await axios.get('./books.json')
    setBooksData(response.data)
  }
  catch(err) {
    console.log(err)
  }
}

const filterBooks = (value) =>{
  const filteredBooks = booksData.filter(book =>{
    return book.category.toLowerCase().includes(value.toLowerCase())
  })
  setBooksData(filteredBooks)
}

const sortBooks = () => {
  const copyData = booksData.slice()
  if (orderBy) {
    const sortedData = copyData.sort((a, b) => a.price > b.price ? 1 : -1)
    setBooksData(sortedData)
    setOrderBy(!orderBy)
  }else{
    const sortedDataReverse = copyData.sort((a, b) => a.price < b.price ? 1 : -1)
    setBooksData(sortedDataReverse)
    setOrderBy(!orderBy)
  }

}
  
  return (
    <div className="wrapper">
      <div className="app">
        <div className="app__body">
          <div>
            <BookFilter orderBy={orderBy} sortBooks={sortBooks} filterBooks={filterBooks} />
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
