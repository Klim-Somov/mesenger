import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { Form } from "../../components/Form/Form";

export function Profile() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  const hendleClick = () => {
    dispatch(toggleCheckbox);
 }
    const hendleSubmit = (text) => {
      dispatch(setName(text))
   
  };
  return (
    <div
      style={{
        gap: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>Profile</h2>

      <span>show name</span>
      <Checkbox
        onChange={hendleClick}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      {state.showName && <span>{state.name}</span>}
      <Form onSubmit={hendleSubmit}/>
    </div>
  );
}
