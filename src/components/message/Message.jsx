import "./Message.scss";
export const Message = ({ name, foo, purple }) => {
  return (
    <h3
      className={"message__header " + (!purple ? "purple-header" : "")}
      onClick={foo}
    >
      Hello {name}
    </h3>
  );
};
