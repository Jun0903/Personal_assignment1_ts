import React from "react";
import styled from "styled-components";

interface ProductListProps {
  currentId: number;
  setCurrentId: any;
  product: {
    id: number;
    imageUrl: string;
    productList: any;
    productId: number;
  };
}

function ProductList({ currentId, setCurrentId, product }: ProductListProps) {
  return (
    <>
      <ProductListContainer>
        {product.productList.map((product: any) => (
          <ProductDiv key={product.productId}>
            <ProductBox
              src={product.imageUrl}
              alt="가구 제품"
              productId={product.productId}
              currentId={currentId}
              onClick={() => {
                if (currentId === product.productId) {
                  setCurrentId(0);
                } else {
                  setCurrentId(product.productId);
                }
              }}
            />
            {product.discountRate > 0 && (
              <DiscountBox>
                {product.discountRate}
                <span>%</span>
              </DiscountBox>
            )}
          </ProductDiv>
        ))}
      </ProductListContainer>
    </>
  );
}

export default ProductList;

const DiscountBox = styled.div`
  position: absolute;
  text-align: center;
  width: 24px;
  height: 28px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: 25px;
  color: white;
  right: 5px;
  top: 1px;
  padding-left: 1px;
  background-image: url("//cdn.ggumim.co.kr/cache/star/1000/2022011017094316oRcWeb8R.jpeg");
`;

const ProductBox = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  border: ${(props) =>
    props.currentId === props.productId
      ? "1px solid red"
      : "0.5px solid #aaafb9"};
`;

const ProductDiv = styled.div`
  position: relative;
  margin: 20px 6px;
  cursor: pointer;
`;

const ProductListContainer = styled.div`
  display: inline-flex;
  justify-content: center;
`;
