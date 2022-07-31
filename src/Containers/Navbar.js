import { Navbar } from "../Components";
import { Row, Col } from "react-bootstrap";

export default function NavbarContainer({ children }) {
    return(
        <Navbar>
            <Navbar.UserInfo className="mt-2">
                <Row>
                    <Col xs={2}>
                        <Navbar.UserPhoto src="/images/icon/user1.png" />
                    </Col>
                    <Col xs={10}>
                        <Navbar.UserGreet>Good Morning</Navbar.UserGreet>
                        <Navbar.UserName>Fellas</Navbar.UserName>
                    </Col>
                </Row>
            </Navbar.UserInfo>
        </Navbar>
    )
}