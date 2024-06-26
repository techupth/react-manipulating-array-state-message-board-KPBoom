import { useState } from "react";

function MessageBoard() {
  const [message,setMessage] = useState(["Hello all ! This is first message."]);
  const [messageText,setMessageText] = useState("");

  const addMessage = (event) =>{
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(messageText);
    setMessage(newMessage);
  };

   const deleteMessage = (messageIndex) => {
    const newMessage = [...message];
    newMessage.splice(messageIndex,1);
    setMessage(newMessage);
   }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event)=>{setMessageText(event.target.value)}}
            value={messageText}
          />
        </label>
        <button className="submit-message-button" 
                onClick={addMessage}>Submit
        </button>
      </div>
      <div class="board">
        <div className="message">
          <ul>
          {message.map((item,index)=>{
          return (<>
          <h1 key={index}>{item}</h1>
          <button className="delete-button" 
                  onClick={()=>{deleteMessage(index)}}>x
          </button></>
          );
          }
          )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;
