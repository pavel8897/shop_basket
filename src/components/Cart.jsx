export const Cart = (props) => {
    const {quantity = 0, handleBasketShow = Function.proptotype} = props
    return <div 
                className='cart blue darken-4 white-text'
                onClick={handleBasketShow}
            >
         <i className="material-icons">add_shopping_cart</i>
         {quantity ? <span className="cart-quality">{quantity}</span> : null}
    </div>
}
