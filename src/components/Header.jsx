import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)

  return (
    <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary position-fixed top-0 w-100 mb-4">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i class="fa-solid fa-truck-fast me-2"></i>E Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded'>
            <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                <i class='fa-solid fa-heart text-danger me-2'></i>
                Wishlist
                <Badge className='ms-2 rounded bg-light'>{wishlist.length}</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link className='btn border rounded ms-5'>
            <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                <i className='fa-solid fa-cart-shopping text-warning me-2'></i>
                Cart
                <Badge className='ms-2 rounded bg-light'>{cart.length}</Badge>

            </Link>
            </Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header