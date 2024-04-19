// i,porting css file
import style from "./Nav.module.css";

// importing components
import Menu from "./Menu";

import Search from "./Search";
import Logo from "./Logo";
import AnimatedLogBtn from "./AnimateLogBtn";

// imorting useEffect hook
import { useEffect } from "react";

import { useState } from "react";

function Nav() {
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(showDiv);
      setShowDiv(false);
    }, 5000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className={style.mainDiv}>
        <Logo></Logo>
        <Search></Search>
        <Menu></Menu>
        {showDiv && <AnimatedLogBtn></AnimatedLogBtn>}
      </div>
    </>
  );
}

export default Nav;
