import {Message} from "../Message/Message"
export const Messages = ({messages}) => 
    messages.map((m) => <Message key={m.id} text={m.text} author={m.author} />)