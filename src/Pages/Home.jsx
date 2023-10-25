import React from 'react'
import { Col, Row,Card,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  const dispatch = useDispatch()
  return (
    <Row className='ms-4' style={{marginTop:'100px'}}>
     { 
     data?.length>0?data?.map((product,index)=>(
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
         <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'>
           <i className='fa-solid fa-heart text-danger fa-2x'></i>
         </Button>
         <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'>
           <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
         </Button>
         </div>
       </Card.Body>
     </Card>
       </Col>
     )):<p className='text-danger fw-bolder fs-4'>Nothing to display!!!</p>
     
      }
    </Row>
  )
}

export default Home