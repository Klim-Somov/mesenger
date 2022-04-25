export const selectMessages = (state) => state.messages;
export const selectMessagesByChatId = (id) => (state) =>
  state.messages[id];
