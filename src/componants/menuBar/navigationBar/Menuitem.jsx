import "./style.css";
function Menuitem({ icon, name, items, arrow, Login }) {
  return (
    <>
      <div className="menuItem">
        <div className={`submenuItem ${items && "spec"} ${Login}`}>
          {icon && <span className="user_icon">{icon}</span>}
          {name && <span className="name">{name}</span>}
          {arrow && <span className="arrow">{arrow}</span>}
        </div>
      </div>
    </>
  );
}
export default Menuitem;
