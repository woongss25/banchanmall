import React from 'react'
import '../App.css'
import CategoryProductList from '../component/CategoryProductList'

const MainPage = () => {
  return (
    <div className='container'>
        <CategoryProductList category="main" label="메인요리" />
    </div>
  )
}

export default MainPage