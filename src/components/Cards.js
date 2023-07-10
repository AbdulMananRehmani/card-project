import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardsData from './CardsData';
import './Style.css'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/action/Action'


const Cards = () => {

    const [query, setQuery] = useState("");

    const dispatch = useDispatch();
    const [data, setData] = useState(cardsData)

    const filterData = (searchQuery) => {
        const filteredData = data.filter(card => card.title.toLowerCase().includes(searchQuery));
        setData(searchQuery ? filteredData : cardsData)
    }

    const send = (e) => {

        dispatch(ADD(e))
    }
    console.log(query)
    return (
        <div className='container mt-3'>
            <h2 className='text-center pt-4'>Bitvent Tech Task Project </h2>
            <hr />
            <input
                className="search"
                placeholder="Search using title ..."
                onChange={(e) => filterData(e.target.value.toLowerCase())}
            />
            <div className='row'>

                {
                    data.length > 0 ?
                    data.map((item, id) => {
                        return (
                            <>
                                <Card style={{ width: '18rem', border: 'none' }} className='mx-2 mt-4 card_style'>
                                    <Card.Img variant="top" src={item.imgdata} style={{ height: "16rem" }} className='mt-3' />
                                    <Card.Body>
                                        <Card.Title>
                                            Title : {item.title}</Card.Title>
                                        <Card.Text>
                                            <strong>Description </strong>  : {item.description}
                                        </Card.Text>
                                        <div className='button_div d-flex justify-content-center'>
                                            <Button

                                                onClick={() => send(item)}
                                                className='col-lg-12' variant="primary">Click me</Button>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                       
                    })
                    :
                      <span className='text-center pt-5 text-danger'>No Data Found</span>                    
                }

            </div>
        </div>
    )
    
}

export default Cards
