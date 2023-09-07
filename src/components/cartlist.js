function Cartlist({cart})
{
    return(
        <>
        {
            cart.map((cartItem,cartindex)=>{
                return(
                    <>
                    <div>
                     
                    <img src={ cartItem[cartindex].url }/>
                    <img src={ cartItem[cartindex].url }/>
                    </div>
                      
                    </>  
                    
                );
            })
        }
        </>
    );
}
export default Cartlist;