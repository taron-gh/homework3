import React from "react";

function Comment ({name, email, body}){
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Comment: {body}</p>
        </div>
    )
}

export default Comment;