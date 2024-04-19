// importing css file
import "./style.css";
// import react icon
import { FaChevronDown } from "react-icons/fa6";
// import CategoryItems componant
import CategoryItems from "./CategoryItems";
// useState hook importing
import { useState } from "react";

// getting all props from parent component like source of image , Name , icons, id etc
function CategoryCart({ imageSrc, categoryName, categoryItems, icon, id }) {
  // every categoryCart managing its on state on hover
  const [isHovered, setIsHovered] = useState(false);

  //  function managing hover state
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="category_card special"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image_container">
        <img src={imageSrc} alt="catImage" />
        <div>
          <span className="span_tag">{categoryName}</span>
          {/* this icon will show if data that include the icon */}
          {icon && <FaChevronDown className="icon" />}
        </div>
      </div>
      {/* onHovering componant will visible otherwise it will remain display none */}
      {isHovered && categoryItems.length !== 0 && (
        <CategoryItems catItem={categoryItems} id={id}></CategoryItems>
      )}
    </div>
  );
}
export default CategoryCart;
