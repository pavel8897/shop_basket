import { BasketItem } from "./BasketItem"

export const BasketList = (props) => {
    const {order} = props
    return (        
      <ul className="collection basket-list">
        <li className="collection-item #43a047 green darken-1">
            Корзина
        </li>
        {
            order.length ? order.map(item => (
                <BasketItem key={item.id} {...item} />
            )) : <li className="collection-item">Коризна пуста</li>
        }
        <li href="#!" className="collection-item #43a047 green darken-1">
            Общая стоимость:
        </li>
      </ul>
    )
}