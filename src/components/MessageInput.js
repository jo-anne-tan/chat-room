import React, { useState,useEffect } from 'react'
import {Form, Button, Input} from 'reactstrap'
import Socket from '../utils/socket'


const MessageInput=({conversations, setConversations,currentUser})=>{

    const [text,setText] = useState("")
    const [data,setData] = useState({})
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(text)

        setData({
            username: currentUser.username,
            message: text,
            timestamp: Date.now()
        })

        setText("")
    }

    useEffect(()=>{
        console.log("**********useEffect called**********")
        if (data.username){ //if username exists, i.e. not an empty object
            Socket.emit("BROADCAST_MESSAGE", data)
            console.log("----------------------------" )
            console.log("BROADCAST_MESSAGE: ")
            console.log(data)

        }

        Socket.on("RECEIVE_BROADCAST", receivedData=>{
            console.log("----------------------------" )
            console.log("RECEIVE_BROADCAST: ")
            console.log(receivedData)


            console.log("----------------------------" )
            console.log("conversation history: ")
            console.log(conversations)

            let newConversations = [...conversations]
            newConversations.push(receivedData) // works fine
            setConversations(newConversations)

            console.log("----------------------------" )
            console.log("conversation updated: ")
            console.log(newConversations)


            setData({})//clear data
        })

        Socket.on("HAS_ERROR",errMsg=>{ //works fine 
            console.error(errMsg)
        })
    },[data])


    const handleTextChange=(e=>{
        setText(e.target.value)
    })

    return(      
        <div className="d-flex flex-column justify-content-between " style={{height:"10vh", position:"fixed", width:"86vw"}}>
            <small className="pl-3" style={{ color: text.length>500? "red" : "grey"}}>
                Characters left: {500-text.length}
            </small>
            <Form onSubmit={handleSubmit} className="d-flex row" style={{margin:"0", padding:"0"}} >
                <Input className="col-10" type="text" id="text" value={text} onChange={handleTextChange} placeholder="Type your message here...">
                    Input
                </Input>
                <Button disabled={!text? true:false} className="col-2 border-0 bg-1">Submit</Button>
            </Form>
        </div>
    )
}

export default MessageInput