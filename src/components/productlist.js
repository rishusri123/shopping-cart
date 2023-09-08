import { useState } from 'react';
import './productlist.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
function Productlist(props)
{
    const add = ()=>{
        const productname=props.item.name
        // console.log(productname)
        props.cart(productname);
    }
    return(
        <>
    <div className='row'>
    <div className="card" stryle={{width:" 18rem;"}}>
    <img className="card-img-top" src={props.item.url} width={'40px'} alt="Card image cap"/>
    <div className="card-body">
    <h5 className="card-title">{props.item.name}</h5>
    <h5 className="card-title">{props.item.category}</h5>
    <p className="card-text">{props.item.seller}</p>
    <h5 className="card-title">Rs:{props.item.price}/-</h5>
  <button onClick={add}>addtocart</button>
    </div>
    </div>
    </div>
    </>
   
    );
}

export default Productlist;