import './Breadcrumbs.css'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = ({product}) => {
  
  
  // const {product} = props;
  return (
    <div className="breadcrumb">
      Home <IoIosArrowForward/>SHOP <IoIosArrowForward/> {product.category} <IoIosArrowForward/> {product.name} <IoIosArrowForward/>
    </div>
  )
}

export default Breadcrumbs
