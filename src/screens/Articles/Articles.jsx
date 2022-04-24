import { Button } from "@mui/material";
import React, { useState } from "react";
import { apiUrl } from "../../utils/constants";

export const Articles = () => {
  const [articles, setArticles] = useState("");
  const request = async () => {
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      const data = result.text;
      setArticles(data);
    } catch (error) {}
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "25px"
      }}
    >
      <Button variant="contained" onClick={request}>
        Generate random joke
      </Button>
      <p style={{fontSize: "20px", color: "purple"}} >{articles}</p>
    </div>
  );
};
