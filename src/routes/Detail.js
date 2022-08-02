import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = (props) => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  });

  if (state) {
    return (
      <>
        <img src={state.poster} alt={state.title} />
        <div>{state.title}</div>
        <div>{state.year}</div>
        <div>{state.genres}</div>
        <div>{state.summary}</div>
      </>
    );
  }
};

export default Detail;
