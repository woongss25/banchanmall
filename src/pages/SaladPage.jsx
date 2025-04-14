import React from 'react'
import '../App.css'
import CategoryProductList from '../component/CategoryProductList'

const SaladPage = () => {
    return (
        <div className='container'>
            <CategoryProductList category="salad" label="샐러드" />
        </div>
    )
}

export default SaladPage