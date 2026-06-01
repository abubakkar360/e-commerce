

// import './App.css'
import Cart from './assets/Pages/Cart.jsx'
import LoginSignup from './assets/Pages/LoginSignup.jsx'
import Product from './assets/Pages/Product.jsx'
import Shop from './assets/Pages/Shop.jsx'
import ShopCategory from './assets/Pages/ShopCategory.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import women_bannar from "./Components/Assets/webbanner_women.png"
import kids_bannar from "./Components/Assets/webbanner_kids.png"
import man_bannar from "./Components/Assets/webbanner_man.png"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Shop/> } />
          <Route path='/mens' element={ <ShopCategory banner = {man_bannar} category = "mens"/> }    />
          <Route path='/womens' element={ <ShopCategory banner = {women_bannar} category = "womens"/> }    />
          <Route path='/kids' element={ <ShopCategory banner = {kids_bannar} category = "kids"/> }    />
          <Route path='/product' element={ <Product/> } >
            <Route path=':productId' element = { <Product/> }/>
          </Route>
          <Route path='/cart' element={ <Cart/> }/>
          <Route path='/login' element={ <LoginSignup/> }/>
        </Routes>
        <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
