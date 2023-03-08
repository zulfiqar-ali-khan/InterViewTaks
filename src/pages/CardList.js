import React from 'react'
import { Table, Image, Button } from 'react-bootstrap'
import './home.css';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { addquantity, removeItem } from './../redux/action/Cart'
import toast from 'react-hot-toast';
const CardList = () => {

    const dispatch = useDispatch();
    const { total, addedItems } = useSelector((state) => state.cart);

    const addQuan = (item) => {
        dispatch(addquantity(item));
        toast.success("Quantity Increase");
    }

    const RemoveQuan = (item) => {
        dispatch(removeItem(item));
        toast.error("Item Romoved");
    }
    return (
        <Layout>
            <Table hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {addedItems?.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Image src={item?.img} width="100" />
                            </td>
                            <td>{item?.name}</td>
                            <td>{item?.price}</td>
                            <td>{item?.quantity}</td>
                            <td>{item?.quantity * item?.price}</td>
                            <td>
                                <Button variant='danger' onClick={() => RemoveQuan(item)}><BiMinusCircle /></Button>
                                <Button variant='success' onClick={() => addQuan(item)}><BiPlusCircle /></Button>
                            </td>
                        </tr>
                    ))}


                </tbody>
                <tfoot>
                    <tr>
                        <th>Total:</th>
                        <th>{total}</th>
                    </tr>
                </tfoot>
            </Table>




        </Layout>
    )
}

export default CardList