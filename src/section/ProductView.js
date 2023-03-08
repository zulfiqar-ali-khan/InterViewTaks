import React from 'react'
import { BiShoppingBag } from "react-icons/bi";
import './../pages/home.css'
import Skeleton from 'react-loading-skeleton'
import { Button, Image } from 'react-bootstrap';
import { addToCart } from './../redux/action/Cart'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const ProductView = ({ item }) => {

    const dispatch = useDispatch();
    const addtocart = (product) => {
        dispatch(addToCart(product));
        toast.success("Item Added to Cart");
    }

    return (
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
                <br />
                <Button onClick={e => addtocart(item)}><BiShoppingBag /></Button>
            </div>
        </div>
    )
}

export default ProductView