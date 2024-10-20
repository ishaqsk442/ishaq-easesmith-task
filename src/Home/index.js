import './index.css';
import Navbar from '../Navbar/navbar';
import SearchProduct from '../SearchProducts';
import ProductsSummery from '../ProductsSummery';
import NurserySplideProducts from '../NurserySplideProducts';
import ProductsComponent from '../ProductsComponent';

const Home = () => {
  

  return (
    <div className='Home-container'>
       <Navbar/>
       <SearchProduct/>
       <ProductsSummery/>
       <NurserySplideProducts/> 
       <ProductsComponent/>
    </div>
  )
}

export default Home