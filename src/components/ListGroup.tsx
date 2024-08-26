import { useState } from "react";

function ListGroup() {
  let menuItems = ["How to use the website", "Offer a Ride", "Take a Ride"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Menu</h1>
      <ul className="list-group">
        {menuItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick = {handleClick}
            onClick={() => {
              setSelectedIndex(index);
              console.log("'" + item + "' clicked");
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
