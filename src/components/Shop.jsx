import {useState, useEffect} from 'react'
import {API_KEY, API_URL} from '../config'

import {Preloader} from '../components/Preloader'
import {GoodsList} from './GoodList'

export const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            },
        }).then(response => response.json()).then(data => {
            data.featured && setGoods(data.featured)
            setLoading(false)
        })
    }, [])

    return (
        <div className="container content">
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </div>
    )
}
