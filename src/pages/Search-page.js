import Container from 'react-bootstrap/Container'
import '../App.css';
import React from 'react'
import Search from '../components/Search'



function SearchPage() {
    return (
        <>
        <Container className="hero">
            <div className="hero-text">
                <h1>Search</h1>
                <h4>Choose one of the following search options:</h4>
                <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} authorKeyword={authorKeyword} setAuthorKeyword={setAuthorKeyword} subjectKeyword={subjectKeyword} setSubjectKeyword={setSubjectKeyword} titleKeyword={titleKeyword} setTitleKeyword={setTitleKeyword}/>
                <Search />
            </div>
        </Container>
        </>   
        )
    }

export default SearchPage