import style from "./Nav.module.css";
import Menu from "./Menu";

import Search from "./Search";
import Logo from "./Logo";
import Leftmenu from "./Leftmenu";

function Nav() {
  return (
    <>
      <div className={style.mainDiv}>
        <Logo></Logo>
        <Search></Search>
        <Menu></Menu>
      </div>

      {/* making responsive at width 768px */}

      <div className={style.resMainDiv}>
        <div className={style.resAbove}>
          <Leftmenu></Leftmenu>

          <Logo></Logo>

          <Menu></Menu>
        </div>
        <div className={style.resSearch}>
          <Search></Search>
        </div>
      </div>
    </>
  );
}

export default Nav;
