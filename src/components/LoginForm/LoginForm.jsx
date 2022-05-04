import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export const LoginForm = ({ onSubmit }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ login, pass });

    setLogin("");
    setPass("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexDirection: "column"
        }}
      >
        <TextField
          onChange={handleChangeLogin}
          value={login}
          label="email"
          type="email"
          autoComplete="current-password"
          
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          value={pass}
          onChange={handleChangePass}
        />

        <Button variant="contained" type="submit" >Отправить</Button>
      </div>
    </form>
  );
};
