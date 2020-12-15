import './App.css';
import React,{useState} from 'react'
import Header from './components/Header'
import OnlineUserDisplay from './components/OnlineUserDisplay'
import ChatDisplay from './components/ChatDisplay'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <div>
      <Header/>
      <div className="d-flex">
        <OnlineUserDisplay currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <ChatDisplay currentUser={currentUser}/>
      </div>
    </div>
  );
}

export default App;
