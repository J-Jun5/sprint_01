import React from "react";
import { useState } from "react";
import styles from "./Homepage.module.css";

//렌더링 컴포넌트
import PageNav from "../components/PageNav.js";
import SellingProductHeader from "../components/SellingProductHeader.js";

// 커스텀 훅
import useProductData from "../hooks/useGetSellingProductData.js/index.js";
import useWindowWidhtSize from "../hooks/useGetDeviceType.js/index.js";

function Hompage() {
  const [ProductSortOption, setProductSortOption] = useState("recent");
  const [searchKeyword, setSearchKeyword] = useState("");

  // 커스텀 훅
  const {
    bestProductCount,
    sellingProductCount,
    sellingProductCountPerRow,
    device,
  } = useWindowWidhtSize();

  const { productsList: bestProductData, noProduct: bestNoProduct } =
    useProductData(1, bestProductCount, "favorite", "");

  const {
    productsList: sellingProductData,
    noProduct: sellingNoProduct,
    nowPage,
    totalPageSize,
    handlePageChange,
  } = useProductData(1, sellingProductCount, ProductSortOption, searchKeyword);

  // 검색어 핸들러
  const handleSeachKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSortOption = (option) => {
    setProductSortOption(option);
  };

  return (
    <div className={styles.homepage}>
      <section className="bestProductSection">
        <header className="ProductSectionHeader">
          <ProductHeaderText headerText={"베스트 상품"} />
        </header>
        <ProductRenderGrid
          productData={bestProductData}
          noProduct={bestNoProduct}
        />
      </section>
      <section className="sellingProductSection">
        <header className="ProductSectionHeader">
          <ProductHeaderText headerText={"판매 중인 상품"} />
          <ProductHeaderSearchBar
            inputText={searchKeyword}
            handleInput={handleSeachKeyword}
            device={Device}
          />
          <ProductHeaderRegistBtn />
          <ProductHeaderSortBtn handleSortOption={handleSetProductSortOption} />
        </header>

      </section>
    </div>
  );
}

export default Hompage;
