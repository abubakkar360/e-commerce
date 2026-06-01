import './Hero.css'
import { MdWavingHand } from "react-icons/md";
import kid_t from '../Assets/kid_t_1.webp'
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero_left">
            <h2>New arrivals only</h2>
            <div>
                <div className="hero_hand_icon">
                    <p>new</p>
                    <MdWavingHand className='handIcon'/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero_latest_btn">
                <div>Latest collection</div>
                <FaLongArrowAltRight/>
            </div>
        </div>
        <div className="hero_right">
                <img className="kidSingle" src={kid_t} alt="" />
        </div>
    </div>
  )
}

export default Hero
