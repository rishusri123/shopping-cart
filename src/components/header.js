import './header.css'
function Header(props)
{
    return(
        <div className="flex shopping-card">
            <div className="font-weight-bold">SHOPPING CART</div>
            <div>CART
             <sup>{props.count}</sup>
            </div>
        </div>
    );
}
export default Header