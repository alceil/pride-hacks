import {React,useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'
function ChatScreen() {
    const [input,setInput] =useState('')

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


        const handleClick= e =>{
e.preventDefault()
setMessages([...messages,{message:input}])
setInput('')
        }


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
    <form  className="chatScreen__input">
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}  
        className="chatScreen__inputField" 
        type="text" />
        <button onClick={handleClick} type="submit" className="chatScreen__inputButton">Send</button>
    </form>
        </div>
    )
}

export default ChatScreen
