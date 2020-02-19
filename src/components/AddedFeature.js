import React from "react";

const AddedFeature = ({ removeFeature, feature }) => {
  // console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(feature)} className="button">
        delete
      </button>
      <p>
        {feature.name}
        <span style={{ marginLeft: "5px", color: "green" }}>{"\u2713"}</span>
      </p>
    </li>
  );
};

export default AddedFeature;
