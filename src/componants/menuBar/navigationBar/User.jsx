import style from "./Nav.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
function User() {
  return (
    <>
      <div className={style.NavLi}>
        <FaRegUserCircle className={style.user} />
        <p>
          Rekha <FaAngleDown className={style.downKey} />
        </p>
      </div>

      {/* making responsive user  */}
      <div className={style.resNavLi}>
        <FaRegUserCircle />
        <p>Rekha</p>
      </div>
    </>
  );
}
export default User;
