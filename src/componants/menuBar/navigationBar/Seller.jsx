import style from "./Nav.module.css";
function Seller() {
  return (
    <>
      <img
        src="/images/becomeAsell.png"
        alt="sell"
        className={(style.user, style.img)}
      />
      <p>Become a Seller</p>
    </>
  );
}
export default Seller;
