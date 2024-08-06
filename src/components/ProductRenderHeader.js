import React from "react";
import "./ProductRenderHeader.css";

//컴포넌트
import ProductHeaderRegistBtn from "./ProductHeaderRegistBtn";
import ProductHeaderSearchBar from "./ProductHeaderSearchBar";
import ProductHeaderSortBtn from "./ProductHeaderSortBtn";
import ProductHeaderText from "./ProductHeaderText";

function ProductRenderHeader({
  headerText,
  searchBar = false,
  registBtn = false,
  sortBtn = false,
  inputText,
  handleInput,
  handelSortOption
}) {
  return (
    <div className="productRenderHeader">
      <ProductHeaderText text={headerText} />
      {searchBar && (
        <ProductHeaderSearchBar
        inputText={inputText}
          handleInput={handleInput}
        />
      )}
      {registBtn && <ProductHeaderRegistBtn />}
      {sortBtn && <ProductHeaderSortBtn handelSortOption={handelSortOption} />}
    </div>
  );
}

export default ProductRenderHeader;
