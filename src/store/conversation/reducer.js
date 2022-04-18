import { ADD_CHAT, DEL_CHAT } from "./actions";

const initialState = [
  {
    name: "Таня",
    lstMsg: "Brunch this weekend?",
    id: "chat1",
    avatar:
      "https://images.androeed.ru/icons/2022/02/14/ico-ninja-turtles-legends-1644870122.webp",
  },
  {
    name: "Дедушка",
    lstMsg: "Wish I could come, but I'm out of town this…",
    id: "chat2",
    avatar:
      "https://ic.pics.livejournal.com/tanjand/44781189/99899304/99899304_original.jpg",
  },
  {
    name: "Вадим",
    lstMsg: "Do you have Paris recommendations? Have you ever…'",
    id: "chat3",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREh-zqIliPz-WGwVfQJQZZUy5XXAudS0qxAg&usqp=CAU",
  },
  {
    name: "Арсен",
    lstMsg: "ok",
    id: "chat4",
    avatar: "https://images.wbstatic.net/big/new/8600000/8606489-1.jpg",
  },
];


export const conversationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_CHAT: {
      return [...state, payload];
    }
    case DEL_CHAT: {
      return state.filter(({ id }) => id !== payload);
    }
    default:
      return state;
  }
};
