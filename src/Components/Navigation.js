
import { FormControl, Navbar, Form, Nav } from 'react-bootstrap';
import logo from '../eslLogo.png' ;

const Navigation = (props) => {

return(
<Navbar fixed='top'  variant='dark' className="nav-bar">
    <Navbar.Brand>
        <img
            src={logo}
            height="50"
            className="d-inline-block align-middle"
            alt="Elder Scrolls Legends Logo"
        />
        </Navbar.Brand>
        <Nav className="ml-auto">
        <Form className="d-flex">
            <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={props.query}
            onChange={props.handleSearch}
            />
        </Form>  
        </Nav>
    </Navbar>
)
}

export default Navigation;