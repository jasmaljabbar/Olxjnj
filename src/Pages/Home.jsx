import React from 'react'
import CategoryNav from '../Components/CategoryNav/CategoryNav'
import DataProvider from '../Context/DataContext'
import Products from '../Components/Products/Products'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='homeParentDiv pt-20'>
        <CategoryNav/>
        <DataProvider>
          <Products/>
        </DataProvider>
        </div>
  )
}

export default Home