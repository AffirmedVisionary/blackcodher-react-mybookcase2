import React, { Fragment, useState }from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import '../App.css'

const Search = (props) => {

    const [keyword, setKeyword] = useState('');
    const [authorKeyword, setAuthorKeyword] = useState('');
    const [subjectKeyword, setSubjectKeyword] = useState('');
    const [titleKeyword, setTitleKeyword] = useState('');
  

function handleSubmit(event) {
    console.log(event)
    event.preventDefault();
    props.findBooks(keyword, authorKeyword, titleKeyword, subjectKeyword);
    setKeyword("");
    setAuthorKeyword("");
    setTitleKeyword("");
    setSubjectKeyword("");
}

    return (
        <Fragment>
            <div className="search-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Row lg="auto">
                        <Col>
                        <Form.Label srOnly>Search Keyword</Form.Label>
                        <Form.Control className="search-field" type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Keyword" />
                        </Col>

                        <Col>
                        <Form.Label srOnly>Search by Author</Form.Label>
                        <Form.Control className="search-field" type="text" value={authorKeyword} onChange={(e) => setAuthorKeyword(e.target.value)} placeholder="Author" />
                        </Col>

                        <Col>
                        <Form.Label srOnly>Search by Title</Form.Label>
                        <Form.Control className="search-field" type="text" value={titleKeyword} onChange={(e) => setTitleKeyword(e.target.value)} placeholder="Title" />
                        </Col>

                        <Col>
                        <Form.Label srOnly>Search by Subject</Form.Label>
                        <Form.Control className="search-field" type="text" value={subjectKeyword} onChange={(e) => setSubjectKeyword(e.target.value)} placeholder="Subject" />
                        </Col>

                        <Button variant="outline-warning" as="input" type="submit" value="Submit" block />{' '}
                    
                    </Form.Row>
                </Form>
            </div>
          </Fragment>
    )
}

export default Search

    //  <form className="search-form" onSubmit={handleSubmit}>
    //     <label>Search </label>
    //     <input type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)} />
    //     <label>Search Author </label>
    //     <input type="text" value={props.authorKeyword} onChange={(e) => props.setAuthorKeyword(e.target.value)} />
    //     <label>Search Title </label>
    //     <input type="text" value={props.titleKeyword} onChange={(e) => props.setTitleKeyword(e.target.value)} />
    //     <label>Search Subject </label>
    //     <input type="text" value={props.subjectKeyword} onChange={(e) => props.setSubjectKeyword(e.target.value)} />
    //     <button>Submit</button>
    // </form>
