import React, { useEffect, useState } from 'react'
import Socket from '../utils/socket'

const OnlineUserDisplay=({currentUser, setCurrentUser})=>{
    const [userList, updateUserList] = useState([])


    useEffect(()=>{
        
        Socket.emit('NEW_USER')
        // setCurrentUser({})
        Socket.on('GET_CURRENT_USER', user=>{ //user is an object returned with {id , username}

            if (!currentUser.username){
                setCurrentUser(user)
            }
        })

        Socket.on('UPDATE_USER_LIST', users=>{ //users is an array of all users
            updateUserList(users)
        })
    },[])


    return(
        <div className="py-3 px-3 full-height side-bar App border-r-1" style={{boxSizing:"border-box"}} >
            <p className="h5">
                Online now:
            </p> 
            <hr/>
            <ul style={{listStyle:"none", padding:0}}>
                {/* Retrieve a list of online users */}
                {
                    userList.map((userdata,idx)=>{
                        
                        if(userdata.username===currentUser.username){
                            return(
                                <li key={idx} className="bg-5" >
                                    {userdata.username}
                                </li>
                            )
                            // return <li> with different background color (eg pale yellow)
                        } else return(
                            <li key={idx}>{userdata.username}</li>
                        )
                    })
                }

            </ul>

        </div>
    )
}

export default OnlineUserDisplay