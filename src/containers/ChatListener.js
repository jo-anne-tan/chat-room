import React from 'react'
import moment from 'moment'

const ChatListener=({conversations})=>{

    return(
        <div className="partial-height px-3 bg-2 scroll" >
            {
            conversations.map(conversation=>{
                // If no message, do nothing
                if (!conversation.message) return null
                else {
                    return(
                        <div key={conversation.message+conversation.timestamp} className="my-3 p-3 border-5px" style = {{backgroundColor:"white"}}>
                            <div name="msg-container" className="d-flex">
                                <div name="user-info" className="p-2 d-flex flex-wrap justify-content-center" style={{width:"80px", height:"80px"}}> 
                                    <img alt='avatar' name="user-img" src={`https://api.hello-avatar.com/adorables/150/${conversation.username}.png`} style={{width:"50px"}} />
                                    <p name="username" className="color-4 text-center">{conversation.username}</p>
                                </div>
                                <p name="msg" className="pt-3">{conversation.message}</p>
                            </div>
                            <small name="timestamp" className="text-right d-block" >{moment(conversation.timestamp).format("Do MMMM YYYY, h:mm:ss a")}</small>
                        </div>
                    )
                }                
            })}
        </div>
    )
}

export default ChatListener