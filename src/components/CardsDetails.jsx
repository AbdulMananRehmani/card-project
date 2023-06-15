import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { DLT,REMOVE } from '../redux/action/Action';
import {ADD} from '../redux/action/Action'

const CardsDetails = () => {

  const [price, setprice]=useState();

  const navigate= useNavigate();
    const [data,setdata]=useState();
  const getdata = useSelector((state) => state.cartreducer.carts)
const dispatch=useDispatch();
    const {id}=useParams();
     
    const compare =()=>{
        let comparedata=getdata.filter((e)=>{
            return e.id==id
        }) 
        setdata(comparedata)

    }

    useEffect(()=>{
        compare();
    },[id])


    const send=(e)=>{

      dispatch(ADD(e))    
  }

const dlt =(id)=>{
  dispatch(DLT(id))

  navigate('/')
}


const rmv =(item)=>{
  dispatch(REMOVE(item))

}

  return (
    <div className="container mt-3">
      <h2 className="text-center">Card Details Page </h2>
      <p className="text-center mt-3">Resturent:</p>
      <hr />

      {
        data && data.map((ele)=>{
            return (
                <>
<div className="row">
        <div className="col-6">
          <img
            src={ele.imgdata}
            style={{ width: "19rem", height: "16rem" }}
            alt=""
          />
        </div>

        <div className="col-3">
          <p>
            <strong>Dishes : </strong>{ele.rname}
          </p>
          <p>
            <strong>Price : </strong> {ele.price}
          </p>
          <p>
            <strong>Address : </strong> {ele.address}
          </p>
          <p>
            <strong>Total : {ele.price * ele.qnty} </strong> 
          </p>
          <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100, cursor:"pointer", background:"#ddd",color:"#111"}}>

            <span style={{fontSize:26}} onClick={ele.qnty<=1 ? ()=>dlt(ele.id) : ()=>rmv(ele)}>-</span>
            <span style={{fontSize:20}}>{ele.qnty}</span>
            <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

          </div>
        </div>
        <div className="col-3">
          <p>
            <strong>Rating : </strong>
            <span style={{ background: "green", color: "white" }}>{ele.rating} ★</span>
          </p>

          <p>
            <strong>
              Order : <span>{ele.somedata}</span>
            </strong>
          </p>

          <p>
            <strong>Remove : </strong>
            <span>
              <i
                className="fas fa-trash "
                onClick={()=>dlt(ele.id)}
                style={{ color: "red", cursor: "pointer", fontSize: 22 }}
              ></i>
            </span>
          </p>
        </div>
        </div>

                </>
            )
        })
      }
      
    </div>
  );
};

export default CardsDetails;
