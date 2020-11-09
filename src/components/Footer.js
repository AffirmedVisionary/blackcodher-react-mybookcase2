import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Button from 'react-bootstrap/Button'

function Footer() {
    return(
        <React.Fragment>
           <div className="footer">
            <hr/>
                <h3><u>Project Links</u></h3>
                <div>
                <Button className="btnSpace" variant="outline-warning" href="https://affirmedvisionary.github.io/blackcodher-bootcamp/">Contents</Button>
                <Button className="btnSpace" variant="outline-warning" href="https://affirmedvisionary.github.io/blackcodher-bootcamp/html/portfolio/index.html">Personal Profile</Button>
                <Button className="btnSpace" variant="outline-warning" href="https://affirmedvisionary.github.io/blackcodher-bootcamp/html/bookshop/index.html">Book Shop</Button>
                <Button className="btnSpace" variant="outline-warning" href="https://affirmedvisionary.github.io/blackcodher-bootcamp/javascript/quiz-along/index.html">Simple Quiz</Button>
                <Button className="btnSpace" variant="outline-warning" href="https://affirmedvisionary.github.io/blackcodher-react-mybookcase2/">My Bookcase</Button>
                </div>
                <p><Link to="mailto:iam@charlenegrant.co.uk">Charlene Grant</Link> 2020</p>
                </div>
        </React.Fragment>
    )
}

export default Footer