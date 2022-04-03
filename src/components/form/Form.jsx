import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./Form.scss";


export  function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const submitHendler = (e) => {
    e.preventDefault();
    if (value === "") return;
    onSubmit(value);
    setValue("");
  };
  const hendleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className="form" onSubmit={submitHendler}>
      <TextField
        className="myTextField"
        id="standard-basic"
        label="Введите сообщение"
        variant="standard"
        value={value}
        onChange={hendleChange}
        InputLabelProps={{ sx: {color: 'white' } }}
      />

      <Button className="form__btn mybtn" variant="contained" type="">
        submit
      </Button>
    </form>
  );
}
