import  Navbar  from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import{ NavLink }  from "react-router-dom"

export default function Sidebar() {
  return (
    <Navbar sticky ='top' className='flex-column sidebar'>
        <Nav.Item>
           <Nav.Link as={ NavLink } to = '/posts'>Feed</Nav.Link> 
        </Nav.Item>
        <Nav.Item>
           <Nav.Link as={ NavLink } to = '/'>My Page</Nav.Link> 
        </Nav.Item>
        <Nav.Item>
           <Nav.Link as={ NavLink } to = '/'>Anime Journey</Nav.Link> 
        </Nav.Item>
    </Navbar>
  )
}
