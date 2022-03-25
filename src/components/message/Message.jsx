
import "./Message.scss";
export const Message = ({ author, text}) => {
  return (
    <div>
 
    <div className="message" >
      <span className="purple-header" >{author}</span>
      <span>{text}</span>
    </div>
    </div>
  );
};
