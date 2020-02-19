import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { addItem, removeItem } from "./actions/actions";

const App = ({ removeItem, addItem, car, carFeatures, additionalPrice }) => {
  //props give us access to remove and buy action creators
  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeItem(item);
  };

  const addFeature = item => {
    // dispatch an action here to remove an item
    addItem(item);
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures removeFeature={removeFeature} car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures carFeatures={carFeatures} addFeature={addFeature} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    carFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, {
  addItem,
  removeItem
})(App);
