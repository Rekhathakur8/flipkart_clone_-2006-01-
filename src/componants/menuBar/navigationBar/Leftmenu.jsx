import style from "./Nav.module.css";
import { IoMdMenu } from "react-icons/io";
function Leftmenu() {
  return (
    <>
      <div>
        <IoMdMenu className={style.leftmenu} />
      </div>
    </>
  );
}
export default Leftmenu;
