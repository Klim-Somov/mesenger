import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import { Form } from "../../components/Form/Form";
import { Messages } from "../../components/Messages/Messages";
import { addMessage, addMessageWithReply } from "../../store/messages/actions";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { AUTHORS } from "../../utils/constants";

export function Conversation() {
  const { id } = useParams();

  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  
  const wrapperRef = useRef();

  const sendMessages = (text) => {
    dispatch(
      addMessageWithReply(
        {
          author: AUTHORS.human,
          text,
          id: Date.now(),
        },
        id
      )
    );
  };

  // useEffect(() => {
  //   const lastMessage = messages?.[messages?.length - 1];
  //   if (lastMessage?.author === AUTHORS.human) {
  //     timeout.current = setTimeout(() => {
  //       dispatch(
  //         addMessage(
  //           {
  //             author: AUTHORS.robot,
  //             text: "want to talk?",
  //             id: Date.now(),
  //           },
  //           id
  //         )
  //       );
  //     }, 1200);
  //   }
  //   return () => {
  //     clearTimeout(timeout.current);
  //   };
  // }, [messages]);
  if (!messages) {
    return <Navigate to="/conversation" replace />;
  }

  return (
    <div className="App" ref={wrapperRef}>
      <header className="App-header">
        <div className="form-content">
          <div className="input-messages">
            <Form onSubmit={sendMessages} />
          </div>
          <div>
            <Messages messages={messages} />
          </div>
        </div>
      </header>
    </div>
  );
}
