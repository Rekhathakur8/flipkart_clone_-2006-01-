import style from "./Nav.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiCustomerServiceLine } from "react-icons/ri";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { CiSaveDown2 } from "react-icons/ci";
function DropDown() {
  return (
    <>
      <div className={style.DropDownMain}>
        <div className={style.hoverul}>
          <div className={style.grip}>
            <IoIosNotificationsOutline />
            <span>Notification prefrences</span>
          </div>
          <div className={style.grip}>
            <RiCustomerServiceLine />
            <span>Customer Services</span>
          </div>
          <div className={style.grip}>
            <HiArrowTrendingUp />
            <span>Advertise</span>
          </div>
          <div className={style.grip}>
            <CiSaveDown2 />
            <span>Download App</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default DropDown;
