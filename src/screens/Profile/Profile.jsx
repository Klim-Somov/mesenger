import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { Form } from "../../components/Form/Form";
import { selectName, selectShowName } from "../../store/profile/selectors";

export function Profile() {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const first = useRef();
  const hendleClick = () => {
    dispatch(toggleCheckbox);
  };
  
  
  useEffect(() => {
    first.current = name;
  }, [name]);
  console.log(first.current);


  const hendleSubmit = (text) => {
    dispatch(setName(text));
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

      {showName && <span>{name}</span>}
      <Form onSubmit={hendleSubmit} />
    </div>
  );
}
