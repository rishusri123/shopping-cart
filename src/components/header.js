import './header.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

function Header(props)
{
  
    return(
        <>
        {
      props.it.map((c, i)=>{
      // console.log(i)
      return(
        <>
     <div className='cart'>
       {/* {c[i].name}  */}
     </div>
        </>
      );

   })
  }

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
SHOW CART
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{props.name}</h5>
        <h5 class="modal-title" id="exampleModalLabel">{props.seller}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  
      </div>
      <div class="modal-footer">
      
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
      
        </>
    );
}
export default Header;