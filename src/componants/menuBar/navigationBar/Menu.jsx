import style from "./Nav.module.css";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Drop from "./Drop";
import DropDown from "./DropDown";
import User from "./User";
import Cart from "./Cart";
import Seller from "./Seller";
function Menu() {
  return (
    <>
      <div className={style.ulList}>
        <div className={style.first}>
          <User></User>
          <div className={style.dropDiv}>
            <Drop></Drop>
          </div>
        </div>
        <div className={style.second}>
          <Cart></Cart>
        </div>
        <div className={style.third}>
          <Seller></Seller>
        </div>
        <div className={style.fourth}>
          <div className={style.insideFourth}>
            <PiDotsThreeVerticalBold />
            <DropDown></DropDown>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
