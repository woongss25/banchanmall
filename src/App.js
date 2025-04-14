import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetailPage from './pages/ProductDetailPage';
import SidePage from './pages/SidePage'
import MainPage from './pages/MainPage'
import SoupPage from './pages/SoupPage'
import SaladPage from './pages/SaladPage'

function App() {
  return (
    <BrowserRouter>
    <div className='wrap'>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/product/:id' element={<ProductDetailPage />}/>

        <Route path='/side-1' element={<SidePage/>}/>
        <Route path='/main-1' element={<MainPage/>}/>
        <Route path='/soup-1' element={<SoupPage/>}/>
        <Route path='/salad' element={<SaladPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
