export const addItem = addNewFeature => {
  return {
    type: "ADD_FEATURE",
    payload: addNewFeature
  };
};

export const removeItem = removeFeature => {
  return {
    type: "REMOVE_FEATURE",
    payload: removeFeature
  };
};
