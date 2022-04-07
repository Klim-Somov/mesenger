
import { Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import "./Form.scss";
import SendIcon from '@mui/icons-material/Send';
import { ThemeContext } from "../../utils/ThemeContext";


export  function Form({ onSubmit }) {
  const [value, setValue] = useState("");
  const {changeTheme} = useContext(ThemeContext)

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
        InputLabelProps={{ sx: {color: 'black' } }}
      />
  
      <Button 
      className="form__btn mybtn" variant="contained" endIcon={<SendIcon />} type="">
        Send
      </Button>
      <Button
      onClick={changeTheme}
      >useContextTest</Button>
    </form>
    
  );
}
