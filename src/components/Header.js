import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@material-ui/core/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import empty from '../assests/th.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { DLT } from '../redux/action/Action';
import './Style.css'
const Header = () => {
  const [price, setprice] = useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch()



  const getdata = useSelector((state) => state.cartreducer.carts)
  console.log(getdata)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id))

  }


  const total = () => {
    let price = 0;

    getdata.map((ele, key) => {
      price = ele.price * ele.qnty + price;
      setprice(price)
      console.log(setprice)

    })
  }

  useEffect(() => {
    total()
  }, [total])
  return (
    <div>
      <Navbar bg="light" variant="light" className='navbarshadow' >
        <Container>
          <NavLink to="/" className='text-decoration-none text-dark  logoo' >Bitvent Tech</NavLink>
          <Nav className="me-auto" style={{}}>
            <Nav.Link href="/" className='homee' >Home</Nav.Link>

          </Nav>
          <Badge badgeContent={getdata.length} color="primary" style={{ marginRight: 25, marginTop: 8 }}
            onClick={handleClick}
          >
            <img src="https://tse1.mm.bing.net/th?id=OIP.S_BgMLed4WCTOMUsYFUZjwHaHa&pid=Api&P=0&h=180" alt="card" style={{ width: 50, backgroundColor: 'white', marginRight: -7, cursor: "pointer" }} />
          </Badge>
        </Container>

        <Menu
          className='mt-5'
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {
            getdata.length ?
              <div className='card_details' style={{ width: "22rem", padding: 9 }}>
                <Table>

                  <thead>
                    <tr>
                      <th>Photos</th>
                      <th>Description</th>


                    </tr>

                  </thead>
                  <tbody>
                    {
                      getdata.map((e) => {
                        return (
                          <>
                            <tr>

                              <td>
                                <NavLink to={`/card/${e.id}`} onClick={handleClose}
                                >
                                  <img src={e.imgdata} alt="" style={{ width: "6rem", height: "6rem" }} />

                                </NavLink>
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Title : {e.title}</p>
                                <p>Description : {e.description}</p>

                                <p>Quantity : {e.qnty}</p>
                                <p>
                                  <i className='fas fa-trash smalltrash' onClick={() => dlt(e.id)} style={{ color: "red", cursor: "pointer", fontSize: 19 }}></i>
                                </p>


                              </td>
                              <td className='mt-5' style={{ color: "red", cursor: "pointer", fontSize: 19 }} onClick={() => dlt(e.id)} >

                                <i className='fas fa-trash largetrash' onClick={() => dlt(e.id)} ></i>
                              </td>
                            </tr>

                          </>
                        )
                      })
                    }
                  </tbody>

                </Table>


              </div> :
              <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "22rem ", padding: 9, position: 'relative' }}>
                <i className='fas fa-close smallclose' onClick={handleClose} style={{ position: 'absolute', top: 2, right: 20, cursor: "pointer" }}></i>
                <p style={{ fontSize: 22 }}> Your Cart is Empty</p>
                <img src={empty} alt="" className='emptycard_img' style={{ width: "5rem", padding: 9 }} />
              </div>

          }


        </Menu>
      </Navbar>
    </div>
  )
}

export default Header
