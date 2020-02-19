import React from "react";

const AdditionalFeature = ({ addFeature, item }) => {
  // console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addFeature(item)} className="button">
        Add
      </button>
      {item.name} (+{item.price})
    </li>
  );
};

export default AdditionalFeature;
