import React from 'react';
import '../App.css'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Book = (props) => {

    let {id, volumeInfo: {title, authors, description, imageLinks},
        saleInfo:{listPrice}} 
        = props.book;
   
        const noImage = "https://www.canva.com/design/DAEM1_kIyoM/tWhtP5_4HSWxkfJwLN2R6g/view?utm_content=DAEM1_kIyoM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"

        // let chosenImage ;

        

        // if (imageLinks.smallThumbnail !== ""){
        //     chosenImage = imageLinks.smallThumbnail
        // } else if (imageLinks.thumbnail !== "") {
        //     chosenImage = imageLinks.thumbnail
        // } else chosenImage = noImage

        return (
        <>
        <Container>
                    <Row className="align-items-center justify-content-md-center book">
            <h2 className="bookTitle">{title}</h2>
        </Row>
        <Row className="align-items-center justify-content-md-center book">
            <h3 className="bookAuthor">by {authors}</h3>
        </Row>
        <Row className="align-items-center justify-content-md-center book">
            <Col lg="2">
            {imageLinks ? <img src={imageLinks.smallThumbnail || imageLinks.thumbnail} alt={title}/> : <img src={noImage} alt={title} className="bookImage" />}
            </Col>
            <Col lg="8">
            <p className="bookDescription">{description}</p>
            </Col>
            <Col lg="2">
            <p className="bookPrice">Retail Price: £{listPrice && listPrice.amount}</p>
            {props.addBook && (
                <Button variant="warning" onClick={() => props.addBook(title, id)}>Add +</Button>
            )}
            {props.removeBook && (
                <Button variant="warning" onClick={() => props.removeBook(id)}>Remove</Button>
            )}            
            </Col>
        </Row>
        </Container>
                <hr></hr>
</>
    );
}

Book.propTypes = {
    volumeInfo: PropTypes.shape(
        {title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        description: PropTypes.string,
        imageLinks: PropTypes.shape(
            {thumbnail: PropTypes.string, 
            smallThumbnail: PropTypes.string})
        }),
        saleInfo: PropTypes.shape({listPrice: PropTypes.shape({amount: PropTypes.number})})
   };

   Book.defaultProps ={
       authors: "No Known Authors"
   }
   

export default Book;