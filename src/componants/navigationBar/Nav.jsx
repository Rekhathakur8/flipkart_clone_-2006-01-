import style from "./Nav.module.css";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Drop from "./Drop";
import DropDown from "./DropDown";

function Nav() {
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.logo}>
          <img src="/images/flipkartlogo.png" alt="logo" />
        </div>
        <div className={style.searchBox}>
          <div className={style.searchField}>
            <IoIosSearch className={style.searchIcon} />
            <input
              type="text"
              placeholder="Search for products,Brands and More"
              className={style.inputField}
            />
          </div>
        </div>

        <div className={style.ulList}>
          <div className={style.first}>
            <div className={style.NavLi}>
              <FaRegUserCircle className={style.user} />
              <p>
                Rekha <FaAngleDown className={style.downKey} />
              </p>
            </div>
            <Drop></Drop>
          </div>
          <div className={style.second}>
            <div>
              <BsCart2 className={style.user} />
            </div>
            <p>Cart</p>
          </div>
          <div className={style.third}>
            <img
              src="/images/becomeAsell.png"
              alt="sell"
              className={(style.user, style.img)}
            />
            <p>Become a Seller</p>
          </div>
          <div className={style.fourth}>
            <div className={style.insideFourth}>
              <PiDotsThreeVerticalBold />
              <DropDown></DropDown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
