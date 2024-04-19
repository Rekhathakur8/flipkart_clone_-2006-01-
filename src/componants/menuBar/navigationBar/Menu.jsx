// importing css
import style from "./Nav.module.css";
// react icon import form react icon library
import { FaAngleDown } from "react-icons/fa6";

import { FaRegUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

//  importing menuitem component
import Menuitem from "./Menuitem";

//  main function
function Menu() {
  //  array of object conntaining all the data of navigation list
  const menuData = [
    {
      className: "Login",
      icon: <FaRegUserCircle />,
      name: "Login",
      arrow: <FaAngleDown className="arrowIcon" />,
      item: [
        {
          subIcon: <FaRegUserCircle />,
          title: "My Profile",
        },
        {
          subIcon: <FaRegUserCircle />,
          title: "My Profile",
        },
        {
          subIcon: <FaRegUserCircle />,
          title: "My Profile",
        },
        { subIcon: <FaRegUserCircle />, title: "My Profile" },
      ],
    },
    {
      icon: <BsCart2 />,
      name: "Cart",
      arrow: "",
      item: "",
    },
    {
      icon: "",
      name: "Become a Seller",
      arrow: "",
      item: "",
    },
    {
      className: "threedot",
      icon: <BsThreeDotsVertical />,
      item: [
        {
          subIcon: <FaRegUserCircle />,
          title: "My Profile",
        },
        {
          subIcon: <FaRegUserCircle />,
          title: "My Profile",
        },
        {
          subIcon: <FaRegUserCircle />,
          title: "My Profile",
        },
        { subIcon: <FaRegUserCircle />, title: "My Profile" },
      ],
    },
  ];

  return (
    <>
      <div className={style.ulList}>
        {/* mapping tha data with componant menuitem */}
        {menuData.map((item) => (
          <Menuitem
            // sending data using prop

            icon={item.icon}
            name={item.name}
            items={item.item}
            arrow={item.arrow}
            Login={item.className}
          ></Menuitem>
        ))}
      </div>
    </>
  );
}
export default Menu;
