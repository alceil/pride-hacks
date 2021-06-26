import {React,useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'
function ChatScreen() {

    const [messages,setMessages]=useState(
        [
            {
                name:'Ellen',
                image:"https://content.fortune.com/wp-content/uploads/2020/09/AP20253004547347.jpg",
                message:"Whats up?"
            },
            {
                name:'Ellen',
                image:"https://content.fortune.com/wp-content/uploads/2020/09/AP20253004547347.jpg",
                message:"Hows it going?"
            },
            {
   
                message:"Whats up?"
            }
        ])
    return (
        <div className="chatScreen">
        <p className="chatScreen__timestamp">You matched with elen</p>
        {messages.map((message)=>
message.name?
(
    <div className="chatScreen__message">
    <Avatar className="chat__image" alt={message.name} src={message.image} />
  <p className="chatScreen__text">{message.message}</p>
</div>

):
(
    <div className="chatScreen__message">
  <p className="chatScreen__textUser">{message.message}</p>
</div>
)   

)}
<div>
    <form>
        <input type="text"/>
        <button>Send</button>
    </form>
</div>
        </div>
    )
}

export default ChatScreen
