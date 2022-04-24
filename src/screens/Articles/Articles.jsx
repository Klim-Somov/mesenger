import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../utils/constants";

export const Articles = () => {
  const [articles, setArticles] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const request = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`failed with ${response.status}`);
      }
      const result = await response.json();
      const data = result.text;
      setArticles(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    request();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <Button variant="contained" onClick={request}>
        Generate Fact
      </Button>
      <p style={{ fontSize: "20px", color: "purple" }}>{articles}</p>
      {isLoading && <CircularProgress />}
      {error && <h4>{error}</h4>}
    </div>
  );
};
