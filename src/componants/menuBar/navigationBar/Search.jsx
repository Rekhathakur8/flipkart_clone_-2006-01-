import style from "./Nav.module.css";
import { IoIosSearch } from "react-icons/io";
function Search() {
  return (
    <div className={style.searchBox}>
      <div className={style.searchField}>
        <IoIosSearch className={style.searchIcon} />
        <input
          type="text"
          placeholder="Search for products,Brands and More"
          className={style.inputField}
        />
      </div>
    </div>
  );
}
export default Search;
