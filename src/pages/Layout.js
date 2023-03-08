import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import './home.css';
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
    const { totalProduct } = useSelector((state) => state.cart);
    const history = useNavigate();
    const location = useLocation();
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <section className="section-products">
                <Container>
                    <Row className="text-center">

                        <Col md={10} lg={10}>
                            <div className="header">
                                {location?.pathname === '/' ?
                                    <>
                                        <h3>Featured Product</h3>
                                        <h2>Popular Products</h2>
                                    </>
                                    :
                                    <>
                                        <h2>Card List</h2>
                                    </>
                                }
                            </div>
                        </Col>
                        <Col md={1} lg={1}>
                            <div>
                                <BiShoppingBag size={20} onClick={() => history('/cardlist')} />
                                <Badge>{totalProduct ?? 0}</Badge>
                            </div>
                        </Col>
                    </Row>
                    {children}
                </Container>
            </section>
        </>

    )
}

export default Layout