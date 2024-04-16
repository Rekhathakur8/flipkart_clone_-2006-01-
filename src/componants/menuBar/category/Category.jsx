// importing css file present in same folder
import "./style.css";

// importing CategoryCart component
import CategoryCart from "./CategoryCart";

//  main function
function Category() {
  // Define category data
  const categories = [
    {
      id: "one",
      name: "Grocery",
      items: [],
      image: "/images/c1.png ",
      icon: false,
    },
    {
      id: "two",
      name: "Mobiles",
      items: [],
      image: "/images/c2.png",
      icon: false,
    },
    {
      id: "three",
      name: "Fashion",
      items: [
        "Men's Top wear",
        "Mens's Bottom Wear",
        "Woman Ethnic",
        "Men Footwear",
        "saree",
      ],
      image: "/images/c3.png",
      icon: true,
    },
    {
      id: "four",
      name: "Electronics",
      items: ["Audio", "Gaming", "Laptop & Desktop"],
      image: "/images/c4.png",
      icon: true,
    },
    {
      id: "five",
      name: "Home & Furniture",
      items: ["Home Furnishing", "Living Room Furniture", "Furniture Studio"],
      image: "/images/c5.jpg",
      icon: true,
    },
    {
      id: "six",
      name: "Appliances",
      items: [],
      image: "/images/c6.jpg",
      icon: false,
    },
    {
      id: "seven",
      name: "Travel",
      items: [],
      image: "/images/c7.png",
      icon: false,
    },
    {
      id: "eight",
      name: "Beauty Toys & More",
      items: ["Beauty & Personal Care", "Baby Care", "Books"],
      image: "/images/c8.png",
      icon: true,
    },
    {
      id: "nine",
      name: "Two Wheelers",
      items: ["Electrical Vehicle", "Petrol Vehicle"],
      image: "/images/c9.png",
      icon: true,
    },
  ];

  return (
    <>
      <div className="main_container">
        <div className="sub_main_container ">
          {/* creating componants for all the category  */}
          {categories.map((items, index) => (
            <CategoryCart
              key={index}
              imageSrc={items.image}
              categoryName={items.name}
              categoryItems={items.items}
              icon={items.icon}
              id={items.id}
            ></CategoryCart>
          ))}
        </div>
      </div>
    </>
  );
}
export default Category;
