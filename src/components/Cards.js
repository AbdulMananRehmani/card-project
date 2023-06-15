import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData';
import './Style.css'
import { useDispatch } from 'react-redux';
import {ADD} from '../redux/action/Action'
const Cards = () => {

    const dispatch=useDispatch();
    const [data, setdata] = useState(Cardsdata)
    console.log(data)

    const send=(e)=>{

        dispatch(ADD(e))    
    }
    return (
        <div className='container mt-3'>
            <h2 className='text-center'>E-Commerce Base Project </h2>
            <div className='row'>

                {
                    data && data.map((item, id) => {
                        return (
                            <>
                                <Card style={{ width: '18rem',border:'none' }} className='mx-2 mt-4 card_style'>
                                    <Card.Img variant="top" src={item.imgdata}  style={{height:"16rem"}} className='mt-3'/>
                                    <Card.Body>
                                        <Card.Title>{item.rname}</Card.Title>
                                        <Card.Text>
                                            Price : {item.price}
                                        </Card.Text>
                                        <div className='button_div d-flex justify-content-center'> 
                                        <Button 
                                        
                                        onClick={()=>send(item)}
                                        className='col-lg-12' variant="primary">Add To Card</Button>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards
