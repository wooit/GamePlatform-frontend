import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
 class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="mt-5">
                    <Container fluid={true}>
                        {/*  utiliser md={3} pour space mon footer si bcp de text => mes COL se superposeront*/}
                        <Row className="border-top justify-content-between p-3">
                            <Col className="p-0" md={3} sm={12}>
                                @copyright Geo
                            </Col>
                            {/* <Col className="p-0 d-flex justify-content-end" md={3}>
                                TBD reseaux sociaux
                            </Col> */}
                        </Row>
                    </Container>
                </footer>
            </div>
        )
    }
}
 export default Footer;