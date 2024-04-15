// importing css file present in same folder
import "./style.css";
// importing icons
import { FaChevronDown } from "react-icons/fa6";
// importing componansts
import Fashion from "./Fashion";
import Electronic from "./Electronic";
import HomeFur from "./HomeFur";
import BeautyTM from "./BeautyTM";
import Vehicles from "./Vehicles";
// imorting usestate
import { useState } from "react";

//  main function
function Category() {
  // managing the state of the dropdown
  const [isHovered, setIsHovered] = useState({
    div1: false,
    div2: false,
    div3: false,
    div4: false,
    div5: false,
  });

  // handling the hover event

  const handleHover = (divId) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [divId]: true,
    }));
  };

  const handleMouseLeave = (divId) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [divId]: false,
    }));
  };

  // array of categories fashion
  const fashion = [
    "Men's Top wear",
    "Mens's Bottom Wear",
    "Woman Ethnic",
    "Men Footwear",
  ];

  // array of categories electronic items
  const Electronics = ["Audio", "Gaming", "Laptop & Desktop"];

  // array of categories home and furniture

  const Home_furni = [
    "Home Furnishing",
    "Living Room Furniture",
    "Furniture Studio",
  ];

  // array of categories beauty and personal care

  const BeautyToy = ["Beauty & Personal Care", "Baby Care", "Books"];

  // array of categories vehicles
  const twoWheeler = ["Petrol-Vehicles", "Electrical Vehicles"];

  return (
    <>
      <div className="main_container">
        <div className="sub_main_container">
          <div className="category_card">
            <div className="image_container">
              <img src="/images/c1.png" alt="catImage" />
              <div>
                <span>Grocery</span>
              </div>
            </div>
          </div>
          <div className="category_card">
            <div className="image_container">
              <img src="/images/c2.png" alt="catImage" />
              <div>
                <span>Mobile</span>
              </div>
            </div>
          </div>
          <div className="category_card">
            <div className="image_container special">
              <img src="/images/c3.png" alt="" />
              <div
                onMouseEnter={() => handleHover("div1")}
                onMouseLeave={() => handleMouseLeave("div1")}
              >
                <span classname="span_tag">Fashion</span>
                <FaChevronDown className="icon" />
              </div>
            </div>

            <div className={isHovered.div1 ? "Fashion_main" : "not_visible"}>
              <Fashion myFashion={fashion}></Fashion>
            </div>
          </div>
          <div className="category_card">
            <div className="image_container special">
              <img src="/images/c4.png" alt="catImage" />
              <div
                onMouseEnter={() => handleHover("div2")}
                onMouseLeave={() => handleMouseLeave("div2")}
              >
                <span classname="span_tag">Electronics</span>
                <FaChevronDown className="icon" />
              </div>
            </div>

            <div className={isHovered.div2 ? "electron_main" : "not_visible"}>
              <Electronic Electronic={Electronics}></Electronic>
            </div>
          </div>
          <div className="category_card">
            <div className="image_container special">
              <img src="/images/c5.jpg" alt="catImage" />
              <div
                onMouseEnter={() => handleHover("div3")}
                onMouseLeave={() => handleMouseLeave("div3")}
              >
                <span classname="span_tag">Home & Furniture</span>
                <FaChevronDown className="icon" />
              </div>
            </div>

            <div className={isHovered.div3 ? "Fashion_main" : "not_visible"}>
              <HomeFur Home_furni={Home_furni}></HomeFur>
            </div>
          </div>
          <div className="category_card">
            <div className="image_container">
              <img src="/images/c6.jpg" alt="catImage" />
              <div>
                <span>Appliances</span>
              </div>
            </div>
          </div>
          <div className="category_card">
            <div className="image_container">
              <img src="/images/c7.png" alt="catImage" />
              <div>
                <span>Travel</span>
              </div>
            </div>
          </div>
          <div className="category_card">
            <div className="image_container special">
              <img src="/images/c8.png" alt="catImage" />
              <div
                onMouseEnter={() => handleHover("div4")}
                onMouseLeave={() => handleMouseLeave("div4")}
              >
                <span>Beauty Toys & More</span>
                <FaChevronDown className="icon" />
              </div>
            </div>

            <div className={isHovered.div4 ? "Fashion_main" : "not_visible"}>
              <BeautyTM BeautyToy={BeautyToy}></BeautyTM>
            </div>
          </div>
          <div className="category_card">
            <div className="image_container  special">
              <img src="/images/c9.png" alt="catImage" />
              <div
                onMouseEnter={() => handleHover("div5")}
                onMouseLeave={() => handleMouseLeave("div5")}
              >
                <span>Two Wheelers</span>
                <FaChevronDown className="icon" />
              </div>
            </div>
            <div className={isHovered.div5 ? "Fashion_main" : "not_visible"}>
              <Vehicles twoWheeler={twoWheeler}></Vehicles>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
