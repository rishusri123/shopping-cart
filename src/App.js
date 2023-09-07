
import './App.css';
import Cartlist from './components/cartlist';
import Header from './components/header';
import Productlist from './components/productlist';
import {useState} from 'react'

function App() {

  const[product,setproduct]=useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
  ])
   
  
  const[cart,setcart]=useState([]);

   const addtocart=(data)=>{
      // console.log(data)
    const abc= product.filter((product)=>product.name === data)
    setcart([...cart, abc])    
   }
  //  console.log(cart)

  return (
    <>
    
    <Header it={cart} />
    <Cartlist cart={cart}/>
    {
      product.map(pro=>{
        return(
          <>
            <Productlist item={pro} cart={addtocart}/>
          </>
        );
      })
    }
  
   </>
  );
}

export default App;
