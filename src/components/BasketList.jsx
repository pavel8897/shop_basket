import { BasketItem } from "./BasketItem"

export const BasketList = (props) => {
    const {
        order,
        handleBasketShow=Function.prototype,
        removeToBasket=Function.prototype,
        incQuantity=Function.prototype,
        decQuantity=Function.prototype
    }= props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (        
      <ul className="collection basket-list">
        <li className="collection-item #43a047 green darken-1">
            Корзина
        </li>
        {
            order.length ? order.map(item => (
                <BasketItem
                    key={item.id}
                    removeToBasket={removeToBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                    {...item}
                />
            )) : <li className="collection-item">Коризна пуста</li>
        }
        <li href="#!" className="collection-item #43a047 green darken-1">
            Общая стоимость: {totalPrice} руб.
        </li>

        <li href="#!" className="collection-item #f44336 red">            
            <button className="btn-small">Оформить</button>
        </li>

        <i className="material-icons basket-close" onClick={() => handleBasketShow()}>close</i>
      </ul>
    )
}