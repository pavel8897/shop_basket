export const BasketItem = (props) => {
    const {
        id, name, price, quantity,
        removeToBasket = Function.prototype,
        incQuantity=Function.prototype,
        decQuantity=Function.prototype
    } = props
    return <li href="#!" className="collection-item">
            {name}  <i class="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i>
                    x{quantity}
                    <i class="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i>
                    = {price * quantity} руб                    
            <span href="#!"
                className="secondary-content" 
                onClick={() => removeToBasket(id)}
            >
            <i class="material-icons basket-delete">close</i>
        </span>
    </li>
}
