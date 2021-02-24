import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class TextContainer extends Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col md={8}> 
                        {/* props.children recup content de ma page About */}
                            {this.props.children} 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default TextContainer;