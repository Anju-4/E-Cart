import React from 'react'
import { Row,Card,Col,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'


function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch= useDispatch()
  return (
    <div  style={{marginTop:'100px'}}>
      <Row>
        {
          wishlistArray.length>0?
          wishlistArray.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '16rem',height:'29rem' }}>
            <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
            <Card.Body>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Text>
               <p>{product?.description.slice(0,55)}...</p>
               <h5>$ {product?.price}</h5>
              </Card.Text>
            <div className='d-flex justify-content-between'>  
              <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'>
                <i className='fa-solid fa-trash text-danger fa-2x'></i>
              </Button>
              <Button className='btn btn-light'>
                <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
              </Button>
              </div>
            </Card.Body>
          </Card>
            </Col>
          
         )): <div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'250px'} src="https://eonbazar.com/images/loading_cart_2.gif" alt="" />
              <h3 className='fw-bolder text-primary'>Your Wishlist is Empty</h3>
              <Link style={{textDecoration:'none'}} to={'/'}>Back to home</Link>
       </div>
          }
        </Row>
      </div>
    
  )
}

export default Wishlist