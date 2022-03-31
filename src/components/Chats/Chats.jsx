import "./Chats.scss";
import { Chat } from "../Chat/Chat";

const chats = [
  {
    name: "Таня",
    lstMsg: "Brunch this weekend?",
    id: 1,
  },
  {
    name: "Дедушка",
    lstMsg: "Wish I could come, but I'm out of town this…",
    id: 2,
  },
  {
    name: "Вадим",
    lstMsg: "Do you have Paris recommendations? Have you ever…'",
    id: 3,
  },
];

export const Chats = () =>
  chats.map((ch) => <Chat key={ch.id} name={ch.name} lstMsg={ch.lstMsg} />);