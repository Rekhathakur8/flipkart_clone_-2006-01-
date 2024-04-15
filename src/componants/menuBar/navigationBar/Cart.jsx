import style from "./Nav.module.css";
import { BsCart2 } from "react-icons/bs";
function Cart() {
  return (
    <>
      <div>
        <BsCart2 className={style.user} />
      </div>
      <p className={style.cartPara}>Cart</p>
    </>
  );
}
export default Cart;
