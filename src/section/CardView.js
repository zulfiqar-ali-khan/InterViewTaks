import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'
const CardView = ({ item }) => {
    return (
        <Row>
            <Col md={6}>
                <div className="single-product">
                    <div className='imgDiv'>
                        {item?.img ? <Image src={item?.img} alt="Product Img" className='img-fluid' /> : <Skeleton count={1} width={200} height={200} />}
                    </div>
                    <div className="part-2">
                        <h3 className="product-title">{item?.name ? item?.name : <Skeleton count={1} width={100} />}</h3>
                        <div>
                            <h4 className="product-price">{item?.price ? `$ ${item?.price}` : <Skeleton count={1} width={100} />}</h4>
                            <h4 className="product-price">{item?.colour ? `Color: ${item?.colour}` : <Skeleton count={1} width={100} />}</h4>
                        </div>
                        <div className='card_btn'>
                            <Button>minus</Button>
                            <span>5</span>
                            <Button>Plus</Button>
                        </div>

                    </div>
                </div>
            </Col>
            <Col md={3}>


            </Col>
        </Row>
    )
}

export default CardView