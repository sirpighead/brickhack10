import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class StudentPage extends Component {
    static defaultProps = {}
    state = {

    }

    render = () => {
        return (
            <div id={"mainMenuNavBar"}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#profile">Profile</Nav.Link>
                            <Nav.Link href="#courses">Courses</Nav.Link>
                            <Nav.Link href="#learn">Learn</Nav.Link>
                            <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default StudentPage;