import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {
  initProfileTrack,
  setName,
  setNameFB,
  setShowName,
  stopProfileTrack,
  toggleCheckbox,
} from "../../store/profile/actions";
import { Form } from "../../components/Form/Form";
import { selectName, selectShowName } from "../../store/profile/selectors";
import LogoutIcon from "@mui/icons-material/Logout";
import { onValue, set } from "firebase/database";
import { userNameRef, userRef, userShowNameRef } from "../../servises/firebase";

export function Profile({ onLogout }) {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const hendleClick = () => {
    dispatch(setShowName(!showName));
    // функция set перезаписывает в БД по ссылке ref значения.
  };

  const hendleSubmit = (text) => {
    dispatch(setNameFB(text));
  };
  useEffect(() => {
    dispatch(initProfileTrack());

    return () => {
      dispatch(stopProfileTrack());
    };
  }, []);

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
      <div
        onClick={onLogout}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          cursor: "pointer",
        }}
      >
        logout
        <LogoutIcon />
      </div>

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
