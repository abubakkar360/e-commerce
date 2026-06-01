import'./Offers.css'
import exclusive_image from "../Assets/women_t_1.webp"
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best sellers products</p>
        <button>Check now</button>
      </div>
      <div className="offers_right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
