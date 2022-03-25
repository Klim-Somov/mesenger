
import "./Message.scss";
export const Message = ({ author, text}) => {
  return (
    <div>
    {/* <h3
      className={"message__header " + (!purple ? "purple-header" : "")}
      onClick={foo}
    >
      Hello {name}
    </h3> */}
    <div className="message" >
      <span className="purple-header" >{author}</span>
      <span>{text}</span>
    </div>
    </div>
  );
};
