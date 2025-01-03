import React from "react";

export default function MessageList({messages}) {
    return (
        <div>
            <h2>Messages</h2>
            <table>
                <thead>
                    <tr>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td>{item.message}</td>
                                <td>
                                    <button>Update</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}