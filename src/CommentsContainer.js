import React, { useEffect, useState } from "react";
import Comment from "./Comment";
function CommentsContainer() {
    const [arr, setArr] = useState([])
    const [id, setId] = useState(1)
    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => response.json())
                .then(data => {
                    setArr(data)
                })
        }, 500)
        return ()=>{
            clearTimeout(timer)
        }
    }, [id])
    return (
        <div>
            <input type="text" value={id} onChange={({ target: { value } }) => { setId(value) }} />
            <ul>
                {
                    arr.map((item) => {
                        return <Comment name={item.name} email={item.email} body={item.body} />
                    })
                }
            </ul>
        </div>
    );
}

export default CommentsContainer;