import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About';
import Home from './pages/Home';
import Bookcase from './pages/Bookcase'
import SearchPage from './pages/Search-page'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');
  const [authorKeyword, setAuthorKeyword] = useState('');
  const [subjectKeyword, setSubjectKeyword] = useState('');
  const [titleKeyword, setTitleKeyword] = useState('');
  const [bookcase, setBookcase] = useState([]);
// console.log(titleKeyword)
  
function addBook (title, id) {
    const newBookList = books.filter(book => book.id !== id);
    const chosenBook = books.filter(book => book.id === id);
    setBooks(newBookList);
    setBookcase([...bookcase, ...chosenBook]);
  console.log(`The Book ${title} with the id of ${id} was added. there is now ${bookcase.length + 1} books on your shelf`);
 }

 function removeBook(id) {
   const newBookcaseList = bookcase.filter(book => book.id !== id);
   setBookcase(newBookcaseList);
   console.log(`The Book with the id of ${id} was removed. there is now ${bookcase.length - 1} books on your shelf`);
 }

 useEffect(() => {
  document.title = `${bookcase.length} books in bookcase`;
  ReactDOM.render(`You have ${bookcase.length} books in bookcase`, document.getElementById('shelf'));
}, [bookcase]);

async function findBooks(value, authorValue, titleValue, subjectValue) {
  let url;

	if(titleValue){
		url = `https://www.googleapis.com/books/v1/volumes?q=${value}+intitle:${titleValue}&maxResults=40`
	} else if (authorValue) {
		url = `https://www.googleapis.com/books/v1/volumes?q=${value}+inauthor:${authorValue}&maxResults=40`
	} else if (subjectValue) {
		url = `https://www.googleapis.com/books/v1/volumes?q=${value}+subject:${subjectValue}&maxResults=40`
	} else {
		url = `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=40`
  }
  console.log(url);
  const results = await
fetch(
  url
).then(res => res.json());
console.log(results)
setBooks(results.items)
}

  return (
    <>    
    <Router basename='blackcodher-react-mybookcase2'>
      <Route exact path="/" render= {() => (
        <React.Fragment>
           <Header />
          <Home />
          <Footer />
        </React.Fragment>
      )} />
            <Route exact path="/search" render= {() => (
        <React.Fragment>
              <Header />
              <SearchPage />
          <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} authorKeyword={authorKeyword} setAuthorKeyword={setAuthorKeyword} subjectKeyword={subjectKeyword} setSubjectKeyword={setSubjectKeyword} titleKeyword={titleKeyword} setTitleKeyword={setTitleKeyword}/>
          <BookList books={books} addBook={addBook} />
          <Footer />
        </React.Fragment>
      )} />
            <Route exact path="/about" render= {() => (
        <React.Fragment>
    <Header />
          <About />
          <Footer />
        </React.Fragment>
      )} />
            <Route exact path="/bookcase" render= {() => (
        <React.Fragment>
          <Header />
          <Bookcase />

          <BookList books={bookcase} removeBook={removeBook}/>
          <Footer />
        </React.Fragment>
      )} />
    </Router>
    </>
  )
 }

export default App;
