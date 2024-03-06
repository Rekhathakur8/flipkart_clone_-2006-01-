import style from "./Nav.module.css";
import { FaRegUserCircle } from "react-icons/fa";
function Drop() {
  return (
    <>
      <div className={style.HoverList}>
        <div>
          <div className={style.hoverul}>
            <div className={style.grip}>
              <FaRegUserCircle />

              <span>My Profile</span>
            </div>
            <div className={style.grip}>
              <img src="./images/suparCoin.svg" alt="suparCoin" />

              <span>SuparCoin Zone</span>
            </div>
            <div className={style.grip}>
              <img src="./images/flipPlus.svg" alt="flip" />
              <span>Flipkart Plus</span>
            </div>
            <div className={style.grip}>
              <img src="./images/odersImage.svg" alt="order" />
              <span>Oders</span>
            </div>
            <div className={style.grip}>
              <img src="./images/wishlist.svg" alt="wishlist" />
              <span>Wishlist(0)</span>
            </div>
            <div className={style.grip}>
              <img src="./images/coupons.svg" alt="coupons" />
              <span>Coupons</span>
            </div>

            <div className={style.grip}>
              <img src="./images/giftCard.svg" alt="giftCard" />
              <span>Gift Cards</span>
            </div>
            <div className={style.grip}>
              <img src="./images/notification.svg" alt="notification" />
              <span>Notifications</span>
            </div>
            <div className={style.grip}>
              <img src="./images/logout.svg" alt="logout" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Drop;
