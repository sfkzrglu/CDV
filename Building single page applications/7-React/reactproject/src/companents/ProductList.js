import React, {  useState } from 'react'
import ProductItem from './ProductItem'


export default function ProductList({products}) {

    const [filter, setFilter] = useState("")

   
    return (
        <div>
            <h1>List of products</h1>
            <label>Filter by product title</label>
            <input onChange={(e) => { setFilter(e.target.value) }}></input>
            <ul>
                {
                    products.filter((e) => { return e.title.includes(filter) })
                        .map(e => {
                            return < ProductItem key={e.id} id={e.id} title={e.title} brand={e.brand} />
                        })
                }
            </ul>
        </div>


    )
}
