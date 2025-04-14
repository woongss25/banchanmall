import React from 'react'
import '../App.css'
import CategoryProductList from '../component/CategoryProductList'

const SidePage = () => {
  return (
    <div className='container'>
        <CategoryProductList category="side" label="밑반찬" />
    </div>
  )
}

export default SidePage