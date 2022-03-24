import './Message.scss'
export const Message = ({name, foo}) => {
  
    return (
    <h3 
    className="message__header"
    // style={{color: "red"}} 
    onClick={foo}
    > Hello {name} </h3>);
};
