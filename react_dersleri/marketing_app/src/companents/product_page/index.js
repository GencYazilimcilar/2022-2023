import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardConsumer from "../contextApi/cardContextApi";
import Navi from "../navi";
export default function Index(props) {
  let { productId } = useParams();
  const [product, setProduct] = React.useState();
  return (
    <>
      <Navi/>
    </>
  );
}
