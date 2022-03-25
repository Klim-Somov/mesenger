import {  useState } from "react";
export default function Form({onSubmit}) {

const [value, setValue] = useState('')

const submitHendler = (e) => {
e.preventDefault();
onSubmit(value)
setValue('')
}


const hendleChange = (e) => {
    setValue(e.target.value) 
}
  return (
    <div>
      <form onSubmit={submitHendler} >
        <input value={value} onChange={hendleChange} type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}
