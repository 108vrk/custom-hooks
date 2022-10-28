import React, { useState } from "react";

export const useArray = (initialValue = []) => {
  const [array, setArray] = useState(initialValue);

  const pushIntoAnArray = (newElement) => {
    const newArray = [...array, newElement];
    setArray(newArray);
    //or
    setArray((oldArray) => [...oldArray, newArray]);
  };

  const updateArray = (key, value, newElement) => {
    let newArray = array;
    let ind = newArray.findIndex((u) => u[key] == value);
    newArray[ind] = newElement;
    setArray([...newArray]);
  };

  const removeFromArray = (index) => {
    setArray((theArray) => [
      ...theArray.slice(0, index),
      ...theArray.slice(index + 1, theArray.length),
    ]);
  };
  const clearArray = () => setArray([]);

  return [
    array,
    setArray,
    pushIntoArray,
    updateArray,
    removeFromArray,
    clearArray,
  ];
};
