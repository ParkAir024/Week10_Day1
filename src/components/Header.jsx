import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container >
                <Navbar.Brand as={ NavLink } to="/">Anime Lists!</Navbar.Brand> 
                <Nav.Link as={ NavLink } to="/users">Users</Nav.Link>
                <Nav.Link as={ NavLink } to="/posts">Anime</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Link to='/login'>Login</Link>

            </Container>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
        </Navbar>
    )
}