import { useState } from "react";

export default function MessageForm({ }) {
    const [message, setMessage] = useState("");

    async function createMessage(e) {
        e.preventDefault();

        const data = {
            message
        }

        const url = "http://127.0.0.1:5000/store";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, options);
        if(response.status !== 201 && response.status !== 200) {
            const data = await response.json();
            alert(data.message);
        }
        else {

        }
    }

    return(
        <div>
            <div>
                <p>Enter Message:</p>
                <input type="text"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}></input>
            </div>
            <button onClick={createMessage}>Submit</button>
        </div>
    )
    
}