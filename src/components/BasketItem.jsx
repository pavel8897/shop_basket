export const BasketItem = (props) => {
    const {id, name, price, quanity} = props
    return <li href="#!" className="collection-item">
        {name} x{quanity} = {price}
        <span href="#!" class="secondary-content">
            <i class="material-icons">close</i>
        </span>
    </li>
}
