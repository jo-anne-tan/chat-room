import React from 'react'
import {Icon} from 'semantic-ui-react'

const Header =()=>{
    return(
        <div className="App-header">
            <p className="h3 mx-2">Chat Room</p>            
            <Icon name='chat' style={{lineHeight:"50%"}} size='large' /> 
        </div>
    )
}
export default Header