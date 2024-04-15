import style from "./Main.module.css";
function Image() {
  var Data = [
    {
      img: "c1.png",
      name: "Grocery",
    },
    {
      img: "c2.png",
      name: "Mobiles",
    },
    {
      img: "c3.png",
      name: "Fashion",
    },
    {
      img: "c4.png",
      name: "Electronics",
    },
    {
      img: "c5.jpg",
      name: "Home & Furniture",
    },
    {
      img: "c6.jpg",
      name: "Appliances",
    },
    {
      img: "c7.png",
      name: "Travel",
    },
    {
      img: "c8.png",
      name: "Beauty, Toys & More",
    },
    {
      img: "c9.png",
      name: "Two wheelers",
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.subContainer}>
          {Data.map((item) => (
            <li className={style.dataContainer}>
              <div>
                <img src={`./images/${item.img}`} alt={`${item.name}`} />
              </div>
              <span className={style.textt}>{item.name}</span>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
export default Image;
