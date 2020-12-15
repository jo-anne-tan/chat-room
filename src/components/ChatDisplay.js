import React, {useState} from 'react'
import ChatListener from '../containers/ChatListener'
import MessageInput from './MessageInput'

const ChatDisplay=({currentUser})=>{
    const [conversations, setConversations] = useState([
        {username: 'Edwind', message: 'What did the ocean say to another ocean?', timestamp: 1544532325758},
        {username: 'Liren', message: 'sea you later', timestamp: 1544532341078},
    ])

    return(
        <div className="body-width" > 
            <ChatListener conversations={conversations} />
            <MessageInput conversations={conversations} setConversations={setConversations} currentUser={currentUser}/>
        </div>
    )
}

export default ChatDisplay