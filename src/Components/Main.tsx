import React, { useState, useEffect } from "react";
import MainImage from "./MainImage";
import ProductList from "./ProductList";
import styled from "styled-components";
import axios from "axios";

function Main() {
  const [product, setPruduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentId, setCurrentId] = useState(0);

  const fetchProduct = async () => {
    try {
      setError(null);
      setPruduct(null);
      setLoading(true);
      const response = await axios.get(
        "https://cdn.ggumim.co.kr/test/image_product_link.json"
      );
      setPruduct(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) return <Message>로딩중..</Message>;
  if (error) return <Message>에러가 발생했습니다</Message>;
  if (!product) return null;

  return (
    <>
      <MainImage
        currentId={currentId}
        setCurrentId={setCurrentId}
        product={product}
      />
      <ProductList
        currentId={currentId}
        setCurrentId={setCurrentId}
        product={product}
      />
    </>
  );
}

export default Main;

const Message = styled.div`
  text-align: center;
  margin-top: 50px;
`;
