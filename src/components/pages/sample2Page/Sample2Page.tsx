import { Button } from "@mui/material";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Sample2Page:React.VFC =() => {

  const [searchParams] = useSearchParams();

  const query1 = searchParams.get("query1");
  const query2 = searchParams.get("query2");

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <p>query1={query1}</p>
      <p>query2={query2}</p>
      <Button variant="contained" color="secondary" onClick={handleGoBack}>BACK</Button>
    </>
  );
}