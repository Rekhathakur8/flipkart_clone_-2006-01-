// importing css file
import "./style.css";

// main function
function CategoryItems({ catItem, id }) {
  // set position of category items
  const setPosition = () => {
    switch (id) {
      case "three":
        return "25%";
      case "four":
        return "36%";
      case "five":
        return "45%";
      case "eight":
        return "77%";
      case "nine":
        return "90%";
      default:
        return "0";
    }
  };
  return (
    <>
      {/* category items */}
      <div className="catagoryItem" style={{ left: setPosition() }}>
        <div>
          {catItem.map((item) => (
            <div className="itemDiv">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryItems;
