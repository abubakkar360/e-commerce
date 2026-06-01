import { useContext } from 'react';
import './ProductDisplay.css'
import { AiFillStar } from "react-icons/ai";
import { ShopContext } from '../../assets/Context/ShopContextInstance';
import { useNavigate } from 'react-router-dom'; // এটি যোগ করুন

const ProductDisplay = ({product}) => {
    // const {product} = props;
    const {addToCart} = useContext(ShopContext)
    const navigate = useNavigate();
  return (
    <div className='productdisplay'>
      <div className="productdisplay_left">
        <div className="productdisplay_img_list">
            <img src={product.image} alt="" />
            <img className='flip_image' src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img className='flip_image' src={product.image} alt="" />
        </div>
        <div className="productdisplay_img">
            <img className='productdisplay_main_img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className="productdisplay_right_stars">
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <p style={{color:'black'}}>(138)</p>
        </div>
        <div className="productdisplay_right_prices">
            <div className="productdisplay_right_price_old">
                ${product.old_price}
            </div>
            <div className="productdisplay_right_price_new">
                ${product.new_price}

            </div>
            </div>
            <div className="productdisplay_right_description">
                Elevate your casual wardrobe with this Oxford shirt. Made from 100% cotton and featuring a mid-weight fabric, it offers a comfortable, structured feel. Available in slim and regular fit, this piece creates a sharp silhouette, while the classic button-up collar and button-up front make it a versatile choice for smart-casual layering.
<ol>

 <li> 100% cotton </li>
 <li> Regular and Slim fit </li>
 <li> Classic button-up collar </li>
 <li> Mid-weight fabric </li>
 <li> Button-up fastening </li>
 <li> Long sleeve </li>
 <li> Embroidered detail </li>
 <li> Machine washable. </li>
</ol>

Main 100% Organic cotton. Trim 100% Cotton.
            </div>
            <div className="productdisplay_right_sizes">
                <h1>select size</h1>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>

            </div>
            <button onClick={()=>{addToCart(product.id);navigate('/cart')}}>Add to cart</button>
            <p className='productdisplay_right_category'>
                <span>Category:</span> Women , T-shirt, Crop Top
            </p>
            <p className='productdisplay_right_category'>
                <span>Tags:</span> Modern, Latest
            </p>
        
      </div>
    </div>
  )
}

export default ProductDisplay
