import {useState} from 'react'
function Cartlist(props)
{  
  // console.log(props)
   const updatecart = (ItemId)=>{
      const updatecart = props.it.map((item)=>{
      
        if(item.id==ItemId){
            return(
              <>
               h
              </>
            );
        }
      })
   }


    

    return(
        <>
      {props.it.map((adder)=>{
        return(
            <>
            {adder.map((addpro)=>{
                return(
                    <>
                   <div className="alldata">
                        <div className="p-name">
                        <img src={addpro.url} width={40}/>
                          <span>{addpro.name}</span>
                          <button>-</button>
                          <span>{1}</span>
                            <button>+</button>
                            <span>RS:{addpro.price}/-</span>
                        </div>
                   </div>
                    </>
                    
                );
            })}
            </>
        );
      })}
        </>
    );
}
export default Cartlist;