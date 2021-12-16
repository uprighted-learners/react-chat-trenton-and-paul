//importing hooks from React
import { useState, useEffect } from "react";
import "./styles/App.css";

export default function MessageBox(props) {
  //uses state to hold the result of the fetch
  const [gameMessages, setGameMessages] = useState([]);
  const [count, setCount] = useState(0);
  // setInterval(()=>{
  //   setCount(count +1)
  // },10000 )

  useEffect(() => {
    //fetches information from a local API route
    fetch("/gamemessages")
      .then((res) => {
        return res.json();
      })
      //setting fish messages to the collected json file
      .then((json) => {
        setGameMessages(json);
      });
  }, []);

  return (
    //the game chat box
    <center>
      {" "}
      <div id="chatbox">
        {gameMessages.map((entry) => {
          return (
            <div>
              {/* pulling in the author and the message into the chat box */}
              <p>{entry.author}</p>
              <p>{entry.body}</p>
            </div>
          );
        })}
      </div>
    </center>
  );
}
