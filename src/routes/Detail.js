import React from "react";
import { useLocation } from "react-router-dom";

const Detail = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return <div>Detail</div>;
};

export default Detail;
