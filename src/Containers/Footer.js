import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Footer } from '../Components'

function FooterContainer() {
  return (
    <Footer>
        <Container>
        <Row>
            <Col>
                <Footer.Credit><span>wknd@</span>2020</Footer.Credit>
            </Col>
            <Col>
                <Footer.Version><span>alpha version 0.1</span></Footer.Version>
            </Col>
        </Row>
        </Container>
    </Footer>
  )
}

export default FooterContainer