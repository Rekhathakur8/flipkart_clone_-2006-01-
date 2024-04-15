import style from "./Nav.module.css";
function Logo() {
  return (
    <>
      <div className={style.logo}>
        <img src="/images/flipkartlogo.png" alt="logo" />
      </div>
    </>
  );
}
export default Logo;
