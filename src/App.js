import React from "react";
import axios from 'axios';
import Book from "./components/Book/Book";

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
console.log(booksData)
  
  return (
    <div className="wrapper">
      <div className="app">
        <div className="app__body">
          {booksData.map(book => (
            <Book key={book.id} book={book} />
          ))}


        </div>
      </div>
    </div>
  );
}

export default App;
