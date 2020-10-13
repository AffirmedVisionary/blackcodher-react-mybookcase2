import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About';
// import logo from './logo.svg';
// import './App.css';

const App = (props) => {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');

  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    setBooks(newBookList);
    console.log(`The Book ${title} with the id of ${id} was clicked.`);
  }

  async function findBooks(value) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((res) => res.json());
    setBooks(results.items);
  }

  return (
    <>
      <Router basename='blackcodher-react-mybookcase2'>
        <Route
          exact
          path='/'
          render={() => (
            <React.Fragment>
              <Header />
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <BookList books={books} addBook={addBook} />
              <Footer />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path='/pages/About'
          render={() => (
            <React.Fragment>
              <Header />
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <About />
              <Footer />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path='/bookcase'
          render={() => (
            <React.Fragment>
              <Header />
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <Footer />
            </React.Fragment>
          )}
        />
      </Router>
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
