import {React,useState} from 'react'

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
                name:'Ellen',
                image:"...",
                message:"Whats up?"
            }
        ])
    return (
        <div className="chatScreen">
            
        </div>
    )
}

export default ChatScreen
