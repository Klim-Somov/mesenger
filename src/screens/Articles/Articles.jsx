import { Button, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFacts } from "../../store/facts/actions";
import {
  selectError,
  selectFacts,
  selectStatus,
} from "../../store/facts/selectors";
import { FETCH_STATUSES } from "../../utils/constants";

export const Articles = () => {
  const dispatch = useDispatch();
  const facts = useSelector(selectFacts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const request = () => {
    dispatch(getFacts());
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
      <p style={{ fontSize: "20px", color: "purple" }}>{facts}</p>
      {status == FETCH_STATUSES.REQUEST && <CircularProgress />}
      {error && <h4>{error}</h4>}
    </div>
  );
};
