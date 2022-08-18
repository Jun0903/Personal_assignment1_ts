import React from "react";
import styled from "styled-components";

interface Props {
  currentId: number;
  setCurrentId: any;
  product: { id: number; imageUrl: string; productList: any };
}

//currentId 라는 상태값 생성 후 API 받은 정보들과 비교 연산자로 처리
export default function MainImage({ currentId, setCurrentId, product }: Props) {
  return (
    <>
      <ImageContainer onClick={() => setCurrentId(0)}>
        <Img key={product.id} src={product.imageUrl} alt="집 꾸미기" />
        {product.productList.map((product: any) => (
          <ProductImageBox
            key={product.productId}
            top={product.pointX}
            left={product.pointY}
          >
            {currentId === product.productId ? (
              <CloseIcon
                src="//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
                alt="취소"
                onClick={() => setCurrentId(0)}
              />
            ) : (
              <SearchIcon
                src=" //cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
                alt="돋보기"
                onClick={(event) => {
                  event.stopPropagation();
                  setCurrentId(product.productId);
                }}
              />
            )}
            {currentId === product.productId && (
              <ProductDetail onClick={() => alert("준비 중")}>
                <DetailImage src={product.imageUrl} />
                <ProductSection>
                  {product.productName}
                  <ProductPrice>
                    {product.discountRate > 0 ? (
                      <Discount>
                        {product.discountRate}
                        <span>%</span>
                      </Discount>
                    ) : (
                      <Price>가격</Price>
                    )}
                    {
                      product.priceDiscount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") //숫자 3자리 마다 콤만 찍기 정규식
                    }
                  </ProductPrice>
                </ProductSection>
              </ProductDetail>
            )}
          </ProductImageBox>
        ))}
      </ImageContainer>
    </>
  );
}

const ImageContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 45%;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ProductImageBox = styled.div`
  position: absolute;
  top: ${(props) => props.top * 1.2}px;
  left: ${(props) => props.left * 1.2}px;
`;

const CloseIcon = styled.img`
  width: 32px;
  height: 32px;
  z-index: 999;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  z-index: 999;
  curosr: pointer;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 5px;
  width: 220px;
  height: 86px;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 7px;
  -webkit-box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  cursor: pointer;
`;

const DetailImage = styled.img`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductPrice = styled.div`
  display: flex;
  align-itmes: center;
  margin-top: 20px;
  line-height: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #181d1f;
`;

const Discount = styled.div`
  margin-right: 4px;
  line-height: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #ff585d;
`;

const Price = styled.div`
  margin-right: 4px;
  line-height: 11px;
  font-size: 11px;
  font-weight: bold;
  color: #898f94;
`;
