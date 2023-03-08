import React, { useEffect, useState } from 'react'
import { Row, Col, Spinner, Form } from 'react-bootstrap'
import './home.css';
import ProductView from '../section/ProductView';
import axios from 'axios';
import Layout from './Layout';


const Home = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState([]);
    const [color, setColor] = useState('')

    useEffect(() => {
        getAllProduct();
    }, []);


    useEffect(() => {
        view();
    }, [color]);





    const getAllProduct = async () => {
        try {
            setLoading(true);
            await axios.get('https://my-json-server.typicode.com/benirvingplt/products/products').
                then(res => {
                    if (res && res?.data) {
                        setLoading(false);
                        setProductList(res?.data);
                        setFilter(res?.data)
                    }
                });
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }

    const FilterItemFromColor = (col) => {
        if (col === 'All') {
            setFilter(productList)
        } else {
            const newFilter = productList.filter(item => item.colour === col);
            setFilter(newFilter);
        }
    }

    const view = () => {
        const html = filter?.map((item, i) => (
            <Col md={6} lg={4} xl={3} key={i}>
                <ProductView item={item} />
            </Col>
        ));
        return html;
    }

    return (
        <Layout>
            <Row>
                <Col md={3} className="mb-3">
                    <Form.Select aria-label="All" onChange={(e) => { FilterItemFromColor(e.target.value); setColor(e.target.value); }}>
                        <option value="All">All</option>
                        <option value="Black">Black</option>
                        <option value="Red">Red</option>
                        <option value="Stone">Stone</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                {filter?.length === 0 && <Spinner size="small" />}
                {filter?.length > 0 && view()}
            </Row>
        </Layout>
    )
}

export default Home