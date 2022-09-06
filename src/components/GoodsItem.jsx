export const GoodsItem = (props) => {
    const {id, name, description, price, full_background} = props

    return (<>
        <div className="card" id={id}>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img src={full_background} alt={name} />
                        <span className="card-title">{name}</span>                    
                    </div>
                    <div className="card-content">
                        <p>{description}</p>
                    </div>
                    <div className="card-action">
                        <button className="btn" href="#">Купить</button>
                        <span className='right'>{price}</span>
                    </div>
                </div>
            </div>
        </div>
    </>)              
}