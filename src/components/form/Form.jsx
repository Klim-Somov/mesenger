import {  useState } from "react";
import "./Form.scss";
export default function Form({onSubmit}) {

const [value, setValue] = useState('')

const submitHendler = (e) => {
e.preventDefault();
if (value === "") return
onSubmit(value)
setValue('')
}


const hendleChange = (e) => {
    setValue(e.target.value) 
}
  return (
    <div>
      <form className="form" onSubmit={submitHendler} >
        <input className="form__input" value={value} onChange={hendleChange} type="text" />
        <input className="form__btn" type="submit" />
      </form>
    </div>
  );
}
