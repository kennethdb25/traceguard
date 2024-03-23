import React, { createContext, useState } from "react";

export const CatContext = createContext("");

const CategoryContext = ({ children }) => {
  const [categoryData, setCatogryData] = useState("");

  return (
    <>
      <CatContext.Provider value={{ categoryData, setCatogryData }}>
        {children}
      </CatContext.Provider>
    </>
  );
};

export default CategoryContext;
